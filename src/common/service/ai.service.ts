import { Injectable, Logger } from '@nestjs/common';

export interface AiChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface AiChatOptions {
  temperature?: number;
  maxTokens?: number;
  /** DeepSeek 特有：top_p 采样参数 */
  topP?: number;
  /** 流式输出（暂不支持，预留） */
  stream?: boolean;
  /** 重试次数，默认 1（不重试） */
  retries?: number;
}

export interface AiChatResponse {
  /** 模型生成的文本内容 */
  content: string;
  /** DeepSeek-R1 模型的推理过程内容（仅 reasoning 模型返回） */
  reasoningContent?: string;
  /** Token 用量信息 */
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  /** 模型名称 */
  model: string;
}

@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly model: string;
  /** 默认为 DeepSeek Chat 模型的最大输出 token */
  private readonly defaultMaxTokens = 8192;

  constructor() {
    // DeepSeek API 默认配置：兼容 OpenAI 接口规范
    this.baseUrl = process.env.AI_API_URL || 'https://api.deepseek.com/v1';
    this.apiKey = process.env.AI_API_KEY || '';
    this.model = process.env.AI_MODEL || 'deepseek-chat';
  }

  /**
   * 调用 AI 大模型聊天接口（兼容 OpenAI / DeepSeek API）
   * @param messages 对话消息列表
   * @param options 可选参数（temperature, maxTokens, retries 等）
   * @returns AiChatResponse 包含生成内容、推理过程、token 用量
   */
  async chat(
    messages: AiChatMessage[],
    options?: AiChatOptions,
  ): Promise<AiChatResponse> {
    if (!this.apiKey) {
      throw new Error('AI_API_KEY not configured');
    }

    const retries = options?.retries ?? 1;
    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        return await this._call(messages, options);
      } catch (err: any) {
        lastError = err;
        this.logger.warn(
          `AI call attempt ${attempt}/${retries} failed: ${err.message}`,
        );
        if (attempt < retries) {
          // 指数退避：1s, 2s, 4s...
          await new Promise((r) =>
            setTimeout(r, Math.pow(2, attempt - 1) * 1000),
          );
        }
      }
    }
    throw lastError;
  }

  /**
   * 简化调用：只返回文本内容（兼容旧接口）
   */
  async chatText(
    messages: AiChatMessage[],
    options?: AiChatOptions,
  ): Promise<string> {
    const response = await this.chat(messages, options);
    return response.content;
  }

  private async _call(
    messages: AiChatMessage[],
    options?: AiChatOptions,
  ): Promise<AiChatResponse> {
    this.logger.log(
      `Calling AI: model=${this.model}, messages=${messages.length}, temperature=${options?.temperature ?? 0.7}`,
    );

    const body: Record<string, any> = {
      model: this.model,
      messages,
      temperature: options?.temperature ?? 0.7,
      max_tokens: options?.maxTokens ?? this.defaultMaxTokens,
      stream: false,
    };

    // DeepSeek 支持 top_p 参数
    if (options?.topP !== undefined) {
      body.top_p = options.topP;
    }

    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errBody = await response.text();
      this.logger.error(`AI call failed: ${response.status} ${errBody}`);
      // 区分不同错误类型
      if (response.status === 402) {
        throw new Error(`AI 账户余额不足 (402): ${errBody}`);
      }
      if (response.status === 429) {
        throw new Error(`AI 速率限制 (429): ${errBody}，请稍后重试`);
      }
      throw new Error(`AI call failed: ${response.status} ${errBody}`);
    }

    const data = await response.json();
    const choice = data.choices?.[0];
    const message = choice?.message;

    const content = message?.content?.trim();
    if (!content && !message?.reasoning_content) {
      this.logger.error(`AI returned empty response: ${JSON.stringify(data)}`);
      throw new Error('AI returned empty response');
    }

    // 提取 token 用量
    const usage = data.usage
      ? {
          promptTokens: data.usage.prompt_tokens ?? 0,
          completionTokens: data.usage.completion_tokens ?? 0,
          totalTokens: data.usage.total_tokens ?? 0,
        }
      : undefined;

    if (usage) {
      this.logger.log(
        `AI token usage: prompt=${usage.promptTokens}, completion=${usage.completionTokens}, total=${usage.totalTokens}`,
      );
    }

    return {
      content: content || '',
      // DeepSeek-R1 reasoning model 特有字段
      reasoningContent: message?.reasoning_content || undefined,
      usage,
      model: data.model || this.model,
    };
  }
}
