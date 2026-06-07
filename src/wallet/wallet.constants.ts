/**
 * AI 服务定价（单位：分）
 *
 * 定价原则：成本 + 利润
 *
 * === AI 生图 ===
 * | 模型               | 成本来源       | 成本(约) | 售价   | 售价(分) |
 * |--------------------|---------------|---------|--------|----------|
 * | ERNIE-Image-Turbo  | 百度千帆API    | ¥0.02   | ¥0.15  | 15 分    |
 * | Z-Image-Turbo      | ModelScope免费 | ¥0      | ¥0.02  | 2 分     |
 * | Z-Image            | ModelScope免费 | ¥0      | ¥0.02  | 2 分     |
 * | GPT-Image-2        | GRSAI API     | ¥0.04   | ¥0.10  | 10 分    |
 * | Nano Banana Fast   | GRSAI API     | ¥0.02   | ¥0.08  | 8 分     |
 * | Nano Banana 2      | GRSAI API     | ¥0.05   | ¥0.20  | 20 分    |
 *
 * === AI 成文（热点） ===
 * | 服务              | 成本来源  | 成本(约) | 售价   | 售价(分) |
 * |-------------------|----------|---------|--------|----------|
 * | 生成热点图文       | DeepSeek | ¥0.008  | ¥0.05  | 5 分     |
 * | 全量刷新今日热点     | DeepSeek | ¥0.025  | ¥0.40  | 40 分    |
 * | 单个分类刷新         | DeepSeek | ¥0.010  | ¥0.10  | 10 分    |
 */
export const PRICING: Record<string, number> = {
  // AI 生图
  'ernie-image-turbo': 15,
  'z-image-turbo': 2,
  'z-image': 2,
  'grsai-gpt-image-2': 10,
  'nano-banana-fast': 8,
  'nano-banana-2': 20,
  // AI 成文
  'hotspot-generate': 5,
  'hotspot-refresh': 40,
  'hotspot-refresh-single': 10,
  // AI 润色提示词（不公开显示）
  'prompt-refine': 1,
};

/** 定价描述 */
export const PRICING_LABELS: Record<string, string> = {
  'ernie-image-turbo': 'ERNIE-Image-Turbo 生图',
  'z-image-turbo': 'Z-Image-Turbo 生图',
  'z-image': 'Z-Image 生图',
  'grsai-gpt-image-2': 'GPT-Image-2 生图',
  'nano-banana-fast': 'Nano Banana Fast 生图',
  'nano-banana-2': 'Nano Banana 2 生图',
  'hotspot-generate': 'AI 生成热点图文',
  'hotspot-refresh': 'AI 全量刷新热点',
  'hotspot-refresh-single': 'AI 刷新单个分类',
};

/** 金额转换：元 → 分 */
export function yuanToFen(yuan: number): number {
  return Math.round(yuan * 100);
}

/** 金额转换：分 → 元 */
export function fenToYuan(fen: number): number {
  return fen / 100;
}
