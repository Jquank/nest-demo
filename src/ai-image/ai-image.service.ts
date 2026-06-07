import {
  Injectable,
  Logger,
  BadRequestException,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import {
  GenerateImageDto,
  CreateModelDto,
  UpdateModelDto,
  CreatePromptDto,
  UpdatePromptDto,
} from './dto/generate-image.dto';
import {
  existsSync,
  mkdirSync,
  writeFileSync,
  unlinkSync,
  readFileSync,
} from 'fs';
import { join, extname } from 'path';
import { WalletService } from '@/wallet/wallet.service';
import { AiService } from '@/common/service/ai.service';
import { PRICING } from '@/wallet/wallet.constants';

/**
 * 硬编码的模型列表（后续追加新模型只需在这里加一条）
 *
 * === ERNIE-Image-Turbo (百度千帆) ===
 * 官方文档：https://cloud.baidu.com/doc/qianfan-api/s/Imo9g5a6a
 * 请求参数：model / prompt / size / watermark / n
 * 固定分辨率：1024x1024 / 848x1264 / 768x1376 / 896x1200 / 1264x848 / 1376x768 / 1200x896
 * n 固定为 1（单次只能生成一张）
 * API 端点：POST /v2/ernie-image/images/generations
 * 响应格式：{ data: [{ url: "..." }] }
 * API Key 环境变量：AI_IMAGE_API_KEY
 *
 * === Z-Image-Turbo (ModelScope) ===
 * 官方文档：https://www.modelscope.cn/models/Tongyi-MAI/Z-Image-Turbo
 * 蒸馏加速版，8步出图，亚秒级延迟
 * 模型ID：Tongyi-MAI/Z-Image-Turbo
 *
 * === Z-Image (ModelScope) ===
 * 官方文档：https://www.modelscope.cn/models/Tongyi-MAI/Z-Image
 * 完整基础模型，28-50步，支持CFG/negative_prompt，多样性更高
 * 模型ID：Tongyi-MAI/Z-Image
 *
 * ModelScope 通用参数：model / prompt / size / seed / steps / guidance / negative_prompt
 * 分辨率范围：[512x512, 2048x2048]
 * 调用方式：异步（提交任务 → 轮询结果）
 * API 端点：POST /v1/images/generations → GET /v1/tasks/{task_id}
 * 响应格式：{ task_id: "..." } → { task_status: "SUCCEED", output_images: ["..."] }
 * API Key 环境变量：MODELSCOPE_API_KEY
 *
 * === GPT-Image-2 (GRSAI) ===
 * 官方文档：https://grsai.ai/zh/dashboard/documents/gpt-image
 * 请求参数：model / prompt / aspectRatio / quality / images / webHook / shutProgress
 * 调用方式：异步提交 + 轮询结果
 * API 端点：POST /v1/draw/completions → POST /v1/draw/result
 * 响应格式：{ data: { id, status, results: [{ url }] } }
 * API Key 环境变量：GRSAI_API_KEY
 */
const BUILTIN_MODELS = [
  {
    name: 'ernie-image-turbo',
    displayName: 'ERNIE-Image-Turbo',
    apiUrl: 'https://qianfan.baidubce.com/v2/ernie-image/images/generations',
    defaultSize: '1376x768',
    apiKeyEnv: 'AI_IMAGE_API_KEY',
  },
  {
    name: 'z-image-turbo',
    displayName: 'Z-Image-Turbo',
    apiUrl: 'https://api-inference.modelscope.cn',
    defaultSize: '1024x1024',
    apiKeyEnv: 'MODELSCOPE_API_KEY',
  },
  {
    name: 'z-image',
    displayName: 'Z-Image',
    apiUrl: 'https://api-inference.modelscope.cn',
    defaultSize: '1024x1024',
    apiKeyEnv: 'MODELSCOPE_API_KEY',
  },
  {
    name: 'grsai-gpt-image-2',
    displayName: 'GPT-Image-2',
    apiUrl: 'https://grsai.dakka.com.cn/v1/draw/completions',
    defaultSize: '1024x1024',
    apiKeyEnv: 'GRSAI_API_KEY',
  },
  {
    name: 'nano-banana-fast',
    displayName: 'Nano Banana Fast',
    apiUrl: 'https://grsai.dakka.com.cn/v1/draw/nano-banana',
    defaultSize: 'auto',
    apiKeyEnv: 'GRSAI_API_KEY',
  },
  {
    name: 'nano-banana-2',
    displayName: 'Nano Banana 2',
    apiUrl: 'https://grsai.dakka.com.cn/v1/draw/nano-banana',
    defaultSize: 'auto',
    apiKeyEnv: 'GRSAI_API_KEY',
  },
];

/** 系统级提示词模板（5条） */
const BUILTIN_PROMPTS: { name: string; content: string }[] = [
  {
    name: '浅涂油画风格',
    content:
      '**浅涂写实油画风格**，轻度油画笔触，颜料薄涂在画布上的质感，色彩明亮通透，光线柔和自然。人物和环境有立体感和真实质感，不要厚重的颜料堆叠，不要粗粝肌理。场景为现代都市或生活场景，人物着装和道具符合当代特征。色彩以暖色调为主，整体氛围温馨明亮。禁止卡通化、光滑渲染、扁平插画风、阴暗题材。',
  },
  {
    name: '国风水墨意境',
    content:
      '**中国传统水墨画风格**，以焦墨、浓墨、重墨、淡墨、清墨五色分层渲染。画面讲求留白意蕴，山石树木以皴法勾勒纹理，云雾以淡墨晕染过渡。远山如黛、近水含烟，整体色调以黑白灰为主，可点缀少量朱砂红或石青色。构图上借鉴宋代山水画的三远法（高远、深远、平远），意境空灵禅意。可以出现古建筑、孤舟、飞鸟等传统元素。禁止卡通化、彩色渲染、现代感、写实摄影风格。',
  },
  {
    name: '极简扁平插画',
    content:
      '**现代极简扁平插画风格**，几何化的简洁造型，干净利落的色块分割，没有渐变和阴影。配色以马卡龙色系或莫兰迪色系为主，饱和度低且柔和。人物简化为几何轮廓，场景去繁就简只保留核心元素。构图讲究点线面的节奏感和大面积留白。适合生活场景、城市风景、抽象概念表达。禁止写实渲染、油画肌理、复杂光影、3D效果。',
  },
  {
    name: '赛博朋克夜景',
    content:
      '**赛博朋克风格的夜景城市**，霓虹灯管在雨后的街道上投下粉色、紫色和青色光斑。高楼大厦的玻璃幕墙反射着巨幅全息广告，低空有悬浮的飞行器尾灯拖出光轨。地面蒸汽升腾，小贩摊位的暖黄灯光与周遭冷色霓虹形成对比。天空是深灰的雾霾底色，隐约可见远处的巨型建筑轮廓。拥挤的市集里各色人等穿梭——机械义肢的商贩、戴全息眼镜的年轻人。色调以冷蓝紫和暖粉橙的强烈对比为主，黑色为底色。禁用自然田园、古代场景、柔和色调。',
  },
  {
    name: '日系清新治愈',
    content:
      '**日系清新治愈风格插画**，明亮柔和的光线笼罩整个画面，蓝天白云下是宁静的小镇街道或乡间田野。色彩以浅蓝、嫩绿、淡粉、米白为主，画面整体偏亮偏白。人物比例可爱Q版或纤细日系风格，表情温暖愉悦。场景可以包含：沿海电车轨道、夏日向日葵田、日式杂货铺门口、樱花树下的长椅、猫咪在阳光下打盹。光影是柔和的漫反射，没有强烈对比。禁止暗黑风、写实渲染、复杂肌理、冷色调。',
  },
];

@Injectable()
export class AiImageService implements OnModuleInit {
  private readonly logger = new Logger(AiImageService.name);
  private readonly outputDir: string;

  private readonly refDir: string;

  constructor(
    private prisma: PrismaService,
    private walletService: WalletService,
    private aiService: AiService,
  ) {
    this.outputDir = join(process.cwd(), 'uploads', 'ai-images');
    if (!existsSync(this.outputDir)) {
      mkdirSync(this.outputDir, { recursive: true });
    }
    this.refDir = join(this.outputDir, 'references');
    if (!existsSync(this.refDir)) {
      mkdirSync(this.refDir, { recursive: true });
    }
  }

  /** 启动时自动将硬编码的模型和系统提示词同步到数据库 */
  async onModuleInit() {
    for (const m of BUILTIN_MODELS) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { apiKeyEnv, ...modelData } = m;
      await this.prisma.aiImageModel.upsert({
        where: { name: m.name },
        create: modelData,
        update: {
          displayName: m.displayName,
          apiUrl: m.apiUrl,
          defaultSize: m.defaultSize,
        },
      });
    }
    this.logger.log(`已同步 ${BUILTIN_MODELS.length} 个内置模型`);

    // 同步系统提示词：先删全部再重建，保证与 BUILTIN_PROMPTS 完全一致
    await this.prisma.aiImagePrompt.deleteMany({ where: { isSystem: true } });
    for (const p of BUILTIN_PROMPTS) {
      await this.prisma.aiImagePrompt.create({
        data: { name: p.name, content: p.content, isSystem: true },
      });
    }
    this.logger.log(`已同步 ${BUILTIN_PROMPTS.length} 个系统提示词`);
  }

  // ========== 模型查询（只读） ==========

  async getModels() {
    const models = await this.prisma.aiImageModel.findMany({
      orderBy: { id: 'asc' },
      include: { _count: { select: { records: true } } },
    });
    return models.map((m) => ({
      ...m,
      price: PRICING[m.name] ?? 0,
    }));
  }

  async getModel(id: number) {
    return this.prisma.aiImageModel.findUnique({ where: { id } });
  }

  async createModel(dto: CreateModelDto) {
    return this.prisma.aiImageModel.create({
      data: {
        name: dto.name,
        displayName: dto.displayName,
        apiUrl: dto.apiUrl,
        defaultSize: dto.defaultSize || '1376x768',
      },
    });
  }

  async updateModel(id: number, dto: UpdateModelDto) {
    return this.prisma.aiImageModel.update({ where: { id }, data: dto });
  }

  async deleteModel(id: number) {
    return this.prisma.aiImageModel.delete({ where: { id } });
  }

  // ========== 提示词管理 ==========

  async getPrompts(userId?: number) {
    return this.prisma.aiImagePrompt.findMany({
      where: {
        OR: [{ isSystem: true }, ...(userId ? [{ userId }] : [])],
      },
      orderBy: [{ isSystem: 'desc' }, { createdAt: 'desc' }],
      include: { user: { select: { id: true, username: true } } },
    });
  }

  async createPrompt(dto: CreatePromptDto, userId: number) {
    return this.prisma.aiImagePrompt.create({
      data: {
        name: dto.name,
        content: dto.content,
        userId,
        size: dto.size,
        modelId: dto.modelId,
      },
    });
  }

  async updatePrompt(id: number, dto: UpdatePromptDto, userId: number) {
    const prompt = await this.prisma.aiImagePrompt.findUnique({
      where: { id },
    });
    if (!prompt) throw new BadRequestException('提示词不存在');
    if (prompt.isSystem) throw new BadRequestException('系统提示词不可编辑');
    if (prompt.userId !== userId)
      throw new BadRequestException('只能编辑自己的提示词');
    return this.prisma.aiImagePrompt.update({ where: { id }, data: dto });
  }

  async deletePrompt(id: number, userId: number) {
    const prompt = await this.prisma.aiImagePrompt.findUnique({
      where: { id },
    });
    if (!prompt) throw new BadRequestException('提示词不存在');
    if (prompt.isSystem) throw new BadRequestException('系统提示词不可删除');
    if (prompt.userId !== userId)
      throw new BadRequestException('只能删除自己的提示词');
    return this.prisma.aiImagePrompt.delete({ where: { id } });
  }

  // ========== 生成记录 ==========

  async getRecords(page = 1, pageSize = 20, modelId?: number, userId?: number) {
    const where: any = {};
    if (modelId) where.modelId = modelId;
    if (userId) where.userId = userId;
    const [records, total] = await Promise.all([
      this.prisma.aiImageRecord.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          model: { select: { name: true, displayName: true } },
          promptRel: { select: { name: true } },
        },
      }),
      this.prisma.aiImageRecord.count({ where }),
    ]);
    return { records, total, page, pageSize };
  }

  async deleteRecord(id: number, userId?: number) {
    const where: any = { id };
    if (userId) where.userId = userId;
    const record = await this.prisma.aiImageRecord.findUnique({
      where,
    });
    if (!record) throw new BadRequestException('记录不存在');
    // 删除本地文件
    try {
      unlinkSync(record.localPath);
    } catch {}
    return this.prisma.aiImageRecord.delete({ where: { id } });
  }

  /** 批量删除当前用户的生成记录（真删除，含本地文件） */
  async deleteAllRecords(userId?: number) {
    const where: any = {};
    if (userId) where.userId = userId;
    const records = await this.prisma.aiImageRecord.findMany({
      where,
      select: { id: true, localPath: true },
    });
    for (const r of records) {
      try {
        unlinkSync(r.localPath);
      } catch {}
    }
    const result = await this.prisma.aiImageRecord.deleteMany({ where });
    return { deleted: result.count };
  }

  // ========== 供其他模块调用的简易生图接口（不创建 AiImageRecord） ==========

  /**
   * 根据提示词生成一张图片，返回本地访问 URL。
   * 使用第一个活跃模型，默认尺寸 1376x768。
   */
  async generateImageUrl(
    prompt: string,
    size = '1376x768',
    userId?: number,
    modelName?: string,
  ): Promise<string> {
    // 如果指定了模型名，优先使用；否则取第一个活跃模型
    let model: { name: string; apiUrl: string } | null = null;
    if (modelName) {
      model = await this.prisma.aiImageModel.findFirst({
        where: { name: modelName, isActive: true },
      });
      if (!model) {
        this.logger.warn(`指定的模型不存在或未激活: ${modelName}`);
        return '';
      }
    } else {
      model = await this.prisma.aiImageModel.findFirst({
        where: { isActive: true },
        orderBy: { id: 'asc' },
      });
    }
    if (!model) {
      this.logger.warn('没有可用的 AI 生图模型');
      return '';
    }

    const modelConfig = this.getModelConfig(model.name);
    if (!modelConfig) {
      this.logger.warn(`模型配置不存在: ${model.name}`);
      return '';
    }

    const apiKey = this.getApiKey(modelConfig.apiKeyEnv);
    if (!apiKey) {
      this.logger.warn(`${modelConfig.apiKeyEnv} 未配置，跳过 AI 生图`);
      return '';
    }

    // 计费
    let deducted = 0;
    if (userId) {
      try {
        const { amount } = await this.walletService.consume(userId, model.name);
        deducted = amount;
      } catch (err: any) {
        this.logger.warn(`扣款失败，跳过 AI 生图: ${err.message}`);
        return '';
      }
    }

    try {
      const result = await this.callImageApi(
        model.name,
        model.apiUrl,
        apiKey,
        prompt,
        size,
        false,
        [],
      );
      this.logger.log(
        `AI 生图成功: ${result.imageUrl}${deducted ? ` (扣款 ${deducted}分)` : ''}`,
      );
      return result.imageUrl;
    } catch (err: any) {
      this.logger.error(`AI 生图失败: ${err.message}`);
      // API 失败，退款
      if (deducted > 0 && userId) {
        await this.walletService.refund(userId, deducted, 'AI生图失败退款');
      }
      return '';
    }
  }

  // ========== 核心：生成图片 ==========

  async generate(dto: GenerateImageDto, userId?: number) {
    const model = await this.prisma.aiImageModel.findUnique({
      where: { id: dto.modelId },
    });
    if (!model) throw new BadRequestException('模型不存在');
    if (!model.isActive) throw new BadRequestException('模型已禁用');

    let prompt: string;
    if (dto.promptId) {
      const promptRecord = await this.prisma.aiImagePrompt.findUnique({
        where: { id: dto.promptId },
      });
      if (!promptRecord) throw new BadRequestException('提示词模板不存在');
      prompt = promptRecord.content;
    } else if (dto.prompt) {
      prompt = dto.prompt;
    } else {
      throw new BadRequestException('请提供提示词或选择提示词模板');
    }

    const size = dto.size || model.defaultSize || '1376x768';
    // GRSAI / Nano Banana 异步轮询模型只支持单张生成
    const n =
      model.name === 'grsai-gpt-image-2' ||
      model.name === 'nano-banana-fast' ||
      model.name === 'nano-banana-2'
        ? 1
        : dto.n || 1;

    // Nano Banana 分辨率等级
    const imageSizeVal = dto.imageSize || '1K';

    // 根据模型名获取对应的 API Key 环境变量
    const modelConfig = this.getModelConfig(model.name);
    if (!modelConfig)
      throw new BadRequestException(`模型配置不存在: ${model.name}`);
    const apiKey = this.getApiKey(modelConfig.apiKeyEnv);
    if (!apiKey)
      throw new BadRequestException(`${modelConfig.apiKeyEnv} 未配置`);

    const watermark = dto.watermark ?? false;

    // ===== 计费：检查余额并扣款 =====
    let deductedAmount = 0;
    if (userId) {
      const { wallet, amount } = await this.walletService.consume(
        userId,
        model.name,
      );
      deductedAmount = amount;
      this.logger.log(
        `扣款成功: userId=${userId} amount=${amount}分 balance=${wallet.balance}分`,
      );
    }

    // 参考图片路径（仅 GRSAI 模型使用）
    const images = dto.images || [];

    const results: Array<{ imageUrl: string; localPath: string }> = [];
    let apiError: any = null;
    for (let i = 0; i < n; i++) {
      try {
        const result = await this.callImageApi(
          model.name,
          model.apiUrl,
          apiKey,
          prompt,
          size,
          watermark,
          images,
          imageSizeVal,
        );
        results.push(result);
      } catch (err: any) {
        apiError = err;
        this.logger.error(`生成第 ${i + 1} 张图片失败: ${err.message}`);
        break;
      }
      if (i < n - 1) {
        await new Promise((r) => setTimeout(r, 3000));
      }
    }

    // 如果一张都没生成成功，退款
    if (results.length === 0 && deductedAmount > 0 && userId) {
      await this.walletService.refund(
        userId,
        deductedAmount,
        apiError?.message || 'AI生图失败',
      );
      throw new BadRequestException(
        `图片生成失败: ${apiError?.message || '未知错误'}`,
      );
    }

    const records = await Promise.all(
      results.map((r) =>
        this.prisma.aiImageRecord.create({
          data: {
            modelId: model.id,
            promptId: dto.promptId || null,
            prompt,
            size,
            imageUrl: r.imageUrl,
            localPath: r.localPath,
            userId: userId || 0,
          },
        }),
      ),
    );

    return records;
  }

  // ========== AI 润色/生成提示词 ==========

  async refinePrompt(text?: string, userId?: number): Promise<{ prompt: string }> {
    // 扣费 ¥0.01（1分）
    if (userId) {
      try {
        await this.walletService.consume(userId, 'prompt-refine');
      } catch (err: any) {
        throw new BadRequestException(err.message || '余额不足');
      }
    }
    const systemMsg = '你是一个AI生图提示词专家。用户会给你一段描述或空白，你需要输出一段高质量的中文AI生图提示词。直接输出提示词，不要解释。';
    const userMsg = text?.trim()
      ? `请润色并扩写这段生图提示词，使其更丰富、更具画面感，适合AI生图模型：\n${text}`
      : '请随机生成一个高质量的中文AI生图提示词，包含主体、环境、风格、光线、色调等要素，50-100字。';
    const result = await this.aiService.chat(
      [
        { role: 'system', content: systemMsg },
        { role: 'user', content: userMsg },
      ],
      { temperature: 0.8, maxTokens: 1024 },
    );
    return { prompt: result.content };
  }

  // ========== 内部工具方法 ==========

  /** 根据模型名查找 BUILTIN_MODELS 中的配置 */
  private getModelConfig(name: string) {
    return BUILTIN_MODELS.find((m) => m.name === name);
  }

  /** 获取 API Key：优先 process.env，失败则从 .env 文件读取 */
  private getApiKey(envName: string): string | undefined {
    if (process.env[envName]) return process.env[envName];
    try {
      for (const envPath of ['/home/nest-demo/.env', join(process.cwd(), '.env')]) {
        if (existsSync(envPath)) {
          const content = readFileSync(envPath, 'utf-8');
          const match = content.match(new RegExp(`^${envName}=["']?(.+?)["']?$`, 'm'));
          if (match) return match[1];
        }
      }
    } catch {}
    return undefined;
  }

  /**
   * 模型调度器：根据模型名派发到对应的 API 实现
   */
  /** ModelScope model-id 映射表 */
  private readonly MODEL_SCOPE_IDS: Record<string, string> = {
    'z-image-turbo': 'Tongyi-MAI/Z-Image-Turbo',
    'z-image': 'Tongyi-MAI/Z-Image',
  };

  private async callImageApi(
    modelName: string,
    apiUrl: string,
    apiKey: string,
    prompt: string,
    size: string,
    watermark: boolean,
    images: string[] = [],
    imageSizeVal = '1K',
  ): Promise<{ imageUrl: string; localPath: string }> {
    if (modelName === 'ernie-image-turbo') {
      return this.callErnieApi(apiUrl, apiKey, prompt, size, watermark);
    }
    const modelScopeId = this.MODEL_SCOPE_IDS[modelName];
    if (modelScopeId) {
      return this.callModelScopeApi(apiUrl, apiKey, modelScopeId, prompt, size);
    }
    if (modelName === 'grsai-gpt-image-2') {
      return this.callGrsaiApi(apiUrl, apiKey, prompt, size, images);
    }
    if (modelName === 'nano-banana-fast' || modelName === 'nano-banana-2') {
      return this.callNanoBananaApi(
        apiUrl,
        apiKey,
        modelName,
        prompt,
        size,
        images,
        imageSizeVal,
      );
    }
    throw new BadRequestException(`不支持的模型: ${modelName}`);
  }

  /**
   * 百度千帆 ERNIE-Image-Turbo（同步）
   *
   * 官方文档：https://cloud.baidu.com/doc/qianfan-api/s/Imo9g5a6a
   * 端点：POST /v2/ernie-image/images/generations
   * 响应：{ data: [{ url: "https://..." }] }
   */
  private async callErnieApi(
    apiUrl: string,
    apiKey: string,
    prompt: string,
    size: string,
    watermark: boolean,
  ): Promise<{ imageUrl: string; localPath: string }> {
    const payload = JSON.stringify({
      model: 'ernie-image-turbo',
      prompt,
      size,
      watermark,
    });

    const resp = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: payload,
      signal: AbortSignal.timeout(120_000),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      throw new Error(`ERNIE API 返回错误 ${resp.status}: ${errText}`);
    }

    const result = (await resp.json()) as { data?: Array<{ url?: string }> };
    const imageUrl: string | undefined = result?.data?.[0]?.url;
    if (!imageUrl) {
      this.logger.error(
        `ERNIE API 响应中未找到 image url: ${JSON.stringify(result)}`,
      );
      throw new Error('ERNIE API 未返回图片链接');
    }

    return this.downloadImage(imageUrl);
  }

  /**
   * ModelScope 通用异步调用（提交任务 → 轮询 → 下载）
   * 适用于 Z-Image-Turbo、Z-Image 等所有 ModelScope AIGC 模型
   *
   * 官方文档：https://www.modelscope.cn/docs/model-service/API-Inference/intro
   * 提交端点：POST /v1/images/generations (header: X-ModelScope-Async-Mode: true)
   *   响应：{ task_id: "..." }
   * 轮询端点：GET /v1/tasks/{task_id} (header: X-ModelScope-Task-Type: image_generation)
   *   响应：{ task_status: "SUCCEED", output_images: ["https://..."] }
   */
  private async callModelScopeApi(
    baseUrl: string,
    apiKey: string,
    modelId: string,
    prompt: string,
    size: string,
  ): Promise<{ imageUrl: string; localPath: string }> {
    const commonHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    };

    // 1. 提交生成任务
    const submitBody = JSON.stringify({
      model: modelId,
      prompt,
      size,
    });

    const submitResp = await fetch(`${baseUrl}/v1/images/generations`, {
      method: 'POST',
      headers: { ...commonHeaders, 'X-ModelScope-Async-Mode': 'true' },
      body: submitBody,
      signal: AbortSignal.timeout(30_000),
    });

    if (!submitResp.ok) {
      const errText = await submitResp.text();
      throw new Error(`ModelScope 提交失败 ${submitResp.status}: ${errText}`);
    }

    const submitResult = (await submitResp.json()) as { task_id?: string };
    const taskId: string | undefined = submitResult?.task_id;
    if (!taskId) {
      this.logger.error(
        `ModelScope 未返回 task_id: ${JSON.stringify(submitResult)}`,
      );
      throw new Error('ModelScope 未返回任务 ID');
    }

    this.logger.log(`ModelScope 任务已提交: ${taskId}`);

    // 2. 轮询任务结果（最长等 120 秒）
    const maxPollTime = 120_000;
    const pollInterval = 5_000;
    const startTime = Date.now();

    while (Date.now() - startTime < maxPollTime) {
      await new Promise((r) => setTimeout(r, pollInterval));

      const pollResp = await fetch(`${baseUrl}/v1/tasks/${taskId}`, {
        method: 'GET',
        headers: {
          ...commonHeaders,
          'X-ModelScope-Task-Type': 'image_generation',
        },
        signal: AbortSignal.timeout(15_000),
      });

      if (!pollResp.ok) {
        const errText = await pollResp.text();
        throw new Error(`ModelScope 轮询失败 ${pollResp.status}: ${errText}`);
      }

      const pollResult = (await pollResp.json()) as {
        task_status?: string;
        output_images?: string[];
        message?: string;
        error?: string;
      };

      if (pollResult.task_status === 'SUCCEED') {
        const outputImages = pollResult?.output_images;
        if (!outputImages || outputImages.length === 0) {
          throw new Error('ModelScope 任务成功但未返回图片');
        }
        this.logger.log(`ModelScope 任务完成: ${taskId}`);
        return this.downloadImage(outputImages[0]);
      }

      if (pollResult.task_status === 'FAILED') {
        const errMsg = pollResult?.message || pollResult?.error || '未知错误';
        throw new Error(`ModelScope 任务失败: ${errMsg}`);
      }

      // 仍为 RUNNING / PENDING，继续轮询
    }

    throw new Error(`ModelScope 任务超时: ${taskId}`);
  }

  // ========== GRSAI 通用方法 ==========

  /** 将图片路径数组转为 base64 数组（本地路径或外部 URL） */
  private encodeImages(imagePaths: string[]): string[] {
    return imagePaths.map((p) => {
      try {
        const fullPath = p.startsWith('/') ? join(process.cwd(), p) : p;
        const buffer = readFileSync(fullPath);
        const ext = extname(fullPath).toLowerCase();
        const mimeMap: Record<string, string> = {
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.jpeg': 'image/jpeg',
          '.webp': 'image/webp',
          '.gif': 'image/gif',
        };
        const mime = mimeMap[ext] || 'image/png';
        return `data:${mime};base64,${buffer.toString('base64')}`;
      } catch (err) {
        this.logger.warn(
          `参考图片读取失败，跳过: ${p}`,
          (err as Error).message,
        );
        return p;
      }
    });
  }

  /**
   * GRSAI GPT-Image-2 异步调用（提交任务 → 轮询 → 下载）
   *
   * 官方文档：https://grsai.ai/zh/dashboard/documents/gpt-image
   * 提交端点：POST /v1/draw/completions
   *   请求体：{ model, prompt, aspectRatio, quality, images, webHook, shutProgress }
   *   提交响应（webHook="-1" 立即返回）：{ code: 0, data: { id: "..." }, msg: "success" }
   * 轮询端点：POST /v1/draw/result
   *   请求体：{ id: "..." }
   *   响应：{ code: 0, data: { id, status, progress, results: [{ url }], failure_reason, error } }
   *
   * @param apiUrl 基础 URL（已含 /v1/draw/completions 路径）
   * @param apiKey GRSAI API Key
   * @param prompt 提示词
   * @param aspectRatio 宽高比，如 "1024x1024"
   * @param imagePaths 本地参考图片路径数组（可选）
   */
  private async callGrsaiApi(
    apiUrl: string,
    apiKey: string,
    prompt: string,
    aspectRatio: string,
    imagePaths: string[] = [],
  ): Promise<{ imageUrl: string; localPath: string }> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    };

    // 处理参考图片：转 base64
    const imageBases: string[] = this.encodeImages(imagePaths);

    // 1. 提交生成任务（webHook: "-1" 立即返回 taskId）
    this.logger.log(
      `GRSAI 提交: prompt="${prompt.slice(0, 50)}..." aspectRatio=${aspectRatio} images=${imageBases.length}张`,
    );
    const payload: Record<string, unknown> = {
      model: 'gpt-image-2',
      prompt,
      aspectRatio,
      quality: 'auto',
      webHook: '-1',
      shutProgress: true,
    };
    // 有参考图时才传 urls 字段，空数组也会 400
    if (imageBases.length > 0) {
      payload.urls = imageBases;
    }
    const submitBody = JSON.stringify(payload);

    const baseUrl = apiUrl; // apiUrl 已包含 /v1/draw/completions
    const submitResp = await fetch(baseUrl, {
      method: 'POST',
      headers,
      body: submitBody,
      signal: AbortSignal.timeout(30_000),
    });

    if (!submitResp.ok) {
      const errText = await submitResp.text();
      this.logger.error(
        `GRSAI 提交失败 ${submitResp.status}: ${errText.slice(0, 500)}`,
      );
      this.logger.error(
        `→ 请求体大小: ${submitBody.length} 字节, urls=${imageBases.length}张`,
      );
      throw new Error(
        `GRSAI 提交失败 ${submitResp.status}: ${errText.slice(0, 200)}`,
      );
    }

    const submitJson = (await submitResp.json()) as {
      code?: number;
      data?: {
        id?: string;
        status?: string;
        results?: Array<{ url?: string }>;
        failure_reason?: string;
        error?: string;
      };
      msg?: string;
    };

    if (submitJson.code !== 0) {
      throw new Error(`GRSAI 提交失败: ${submitJson.msg || '未知错误'}`);
    }

    // 如果提交直接返回了结果（shutProgress: true 时可能），直接处理
    const submitData = submitJson.data;
    if (submitData?.status === 'succeeded' && submitData?.results?.[0]?.url) {
      this.logger.log(`GRSAI 直接返回结果: ${submitData.id}`);
      return this.downloadImage(submitData.results[0].url);
    }

    // 如果提交失败，立即抛出
    if (submitData?.status === 'failed') {
      const reason =
        submitData?.failure_reason || submitData?.error || '未知错误';
      throw new Error(`GRSAI 任务失败: ${reason}`);
    }

    const taskId = submitData?.id;
    if (!taskId) {
      this.logger.error(`GRSAI 未返回 taskId: ${JSON.stringify(submitJson)}`);
      throw new Error('GRSAI 未返回任务 ID');
    }

    this.logger.log(`GRSAI 任务已提交: ${taskId}`);

    // 2. 推导出 result 接口的 baseUrl（去掉 /v1/draw/completions 部分）
    const resultBaseUrl = apiUrl.replace(/\/v1\/draw\/completions\/?$/, '');

    // 3. 轮询任务结果（最长等 180 秒）
    const maxPollTime = 180_000;
    const pollInterval = 3_000;
    const startTime = Date.now();

    while (Date.now() - startTime < maxPollTime) {
      await new Promise((r) => setTimeout(r, pollInterval));

      const pollResp = await fetch(`${resultBaseUrl}/v1/draw/result`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ id: taskId }),
        signal: AbortSignal.timeout(15_000),
      });

      if (!pollResp.ok) {
        const errText = await pollResp.text();
        throw new Error(`GRSAI 轮询失败 ${pollResp.status}: ${errText}`);
      }

      const pollJson = (await pollResp.json()) as {
        code?: number;
        data?: {
          id?: string;
          status?: string;
          progress?: number;
          results?: Array<{ url?: string }>;
          failure_reason?: string;
          error?: string;
          url?: string;
        };
        msg?: string;
      };

      if (pollJson.code !== 0) {
        throw new Error(`GRSAI 轮询失败: ${pollJson.msg || '未知错误'}`);
      }

      const pollData = pollJson.data;
      if (!pollData) continue;

      if (pollData.status === 'succeeded') {
        const imageUrl = pollData?.results?.[0]?.url || pollData?.url;
        if (!imageUrl) {
          throw new Error('GRSAI 任务成功但未返回图片');
        }
        this.logger.log(`GRSAI 任务完成: ${taskId}`);
        return this.downloadImage(imageUrl);
      }

      if (pollData.status === 'failed') {
        const reason =
          pollData?.failure_reason || pollData?.error || '未知错误';
        throw new Error(`GRSAI 任务失败: ${reason}`);
      }

      // 仍为 running，继续轮询
      this.logger.debug(
        `GRSAI 轮询中: ${taskId} progress=${pollData.progress ?? '?'}`,
      );
    }

    throw new Error(`GRSAI 任务超时: ${taskId}`);
  }

  /**
   * Nano Banana 异步调用（提交任务 → 轮询 → 下载）
   *
   * 官方文档：https://grsai.ai/zh/dashboard/documents/gpt-image
   * 端点：POST /v1/draw/nano-banana → POST /v1/draw/result
   * 模型：nano-banana-fast
   *
   * @param apiUrl 已含 /v1/draw/nano-banana
   * @param apiKey GRSAI API Key
   * @param prompt 提示词
   * @param aspectRatio 宽高比，如 "1024x1024"
   * @param imagePaths 参考图片路径（可选）
   */
  private async callNanoBananaApi(
    apiUrl: string,
    apiKey: string,
    modelName: string,
    prompt: string,
    aspectRatio: string,
    imagePaths: string[] = [],
    imageSizeVal = '1K',
  ): Promise<{ imageUrl: string; localPath: string }> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    };

    const imageBases = this.encodeImages(imagePaths);

    this.logger.log(
      `${modelName} 提交: prompt="${prompt.slice(0, 50)}..." aspectRatio=${aspectRatio} imageSize=${imageSizeVal} images=${imageBases.length}张`,
    );
    const payload: Record<string, unknown> = {
      model: modelName,
      prompt,
      aspectRatio,
      imageSize: imageSizeVal,
      webHook: '-1',
      shutProgress: true,
    };
    if (imageBases.length > 0) {
      payload.urls = imageBases;
    }
    const submitBody = JSON.stringify(payload);

    const submitResp = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: submitBody,
      signal: AbortSignal.timeout(30_000),
    });

    if (!submitResp.ok) {
      const errText = await submitResp.text();
      this.logger.error(
        `Nano Banana 提交失败 ${submitResp.status}: ${errText.slice(0, 500)}`,
      );
      throw new Error(
        `Nano Banana 提交失败 ${submitResp.status}: ${errText.slice(0, 200)}`,
      );
    }

    const submitJson = (await submitResp.json()) as {
      code?: number;
      data?: {
        id?: string;
        status?: string;
        results?: Array<{ url?: string }>;
        failure_reason?: string;
        error?: string;
      };
      msg?: string;
    };

    if (submitJson.code !== 0) {
      throw new Error(`Nano Banana 提交失败: ${submitJson.msg || '未知错误'}`);
    }

    const submitData = submitJson.data;
    if (submitData?.status === 'succeeded' && submitData?.results?.[0]?.url) {
      this.logger.log(`Nano Banana 直接返回结果: ${submitData.id}`);
      return this.downloadImage(submitData.results[0].url);
    }

    if (submitData?.status === 'failed') {
      const reason =
        submitData?.failure_reason || submitData?.error || '未知错误';
      throw new Error(`Nano Banana 任务失败: ${reason}`);
    }

    const taskId = submitData?.id;
    if (!taskId) {
      this.logger.error(
        `Nano Banana 未返回 taskId: ${JSON.stringify(submitJson)}`,
      );
      throw new Error('Nano Banana 未返回任务 ID');
    }

    this.logger.log(`Nano Banana 任务已提交: ${taskId}`);

    // 轮询结果
    const resultBaseUrl = apiUrl.replace(/\/v1\/draw\/[^/]+\/?$/, '');
    const maxPollTime = 180_000;
    const pollInterval = 3_000;
    const startTime = Date.now();

    while (Date.now() - startTime < maxPollTime) {
      await new Promise((r) => setTimeout(r, pollInterval));

      const pollResp = await fetch(`${resultBaseUrl}/v1/draw/result`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ id: taskId }),
        signal: AbortSignal.timeout(15_000),
      });

      if (!pollResp.ok) {
        const errText = await pollResp.text();
        throw new Error(`Nano Banana 轮询失败 ${pollResp.status}: ${errText}`);
      }

      const pollJson = (await pollResp.json()) as {
        code?: number;
        data?: {
          id?: string;
          status?: string;
          progress?: number;
          results?: Array<{ url?: string }>;
          failure_reason?: string;
          error?: string;
          url?: string;
        };
        msg?: string;
      };

      if (pollJson.code !== 0) {
        throw new Error(`Nano Banana 轮询失败: ${pollJson.msg || '未知错误'}`);
      }

      const pollData = pollJson.data;
      if (!pollData) continue;

      if (pollData.status === 'succeeded') {
        const imageUrl = pollData?.results?.[0]?.url || pollData?.url;
        if (!imageUrl) {
          throw new Error('Nano Banana 任务成功但未返回图片');
        }
        this.logger.log(`Nano Banana 任务完成: ${taskId}`);
        return this.downloadImage(imageUrl);
      }

      if (pollData.status === 'failed') {
        const reason =
          pollData?.failure_reason || pollData?.error || '未知错误';
        throw new Error(`Nano Banana 任务失败: ${reason}`);
      }

      this.logger.debug(
        `Nano Banana 轮询中: ${taskId} progress=${pollData.progress ?? '?'}`,
      );
    }

    throw new Error(`Nano Banana 任务超时: ${taskId}`);
  }

  /**
   * 下载远程图片到本地 uploads/ai-images/ 目录
   */
  private async downloadImage(
    remoteUrl: string,
  ): Promise<{ imageUrl: string; localPath: string }> {
    const timestamp = Date.now();
    const filename = `ai-img-${timestamp}-${Math.random().toString(36).slice(2, 8)}.png`;
    const localPath = join(this.outputDir, filename);

    const imageResp = await fetch(remoteUrl, {
      signal: AbortSignal.timeout(60_000),
    });
    if (!imageResp.ok) {
      throw new Error(`下载图片失败: ${imageResp.status}`);
    }
    const buffer = Buffer.from(await imageResp.arrayBuffer());
    writeFileSync(localPath, buffer);

    return { imageUrl: `/uploads/ai-images/${filename}`, localPath };
  }
}
