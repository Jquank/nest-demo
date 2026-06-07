import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
  Req,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AiImageService } from './ai-image.service';
import {
  GenerateImageDto,
  CreateModelDto,
  UpdateModelDto,
  CreatePromptDto,
  UpdatePromptDto,
} from './dto/generate-image.dto';
import { ApiTags, ApiConsumes } from '@nestjs/swagger';
import { Request } from 'express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { AiService } from '@/common/service/ai.service';

interface IRequest extends Request {
  user: { id: number; username: string; roles?: string[] };
}

@Controller('ai-image')
@ApiTags('ai-image')
export class AiImageController {
  constructor(
    private readonly aiImageService: AiImageService,
    private readonly aiService: AiService,
  ) {}

  // ========== 模型管理 ==========

  @Get('models')
  getModels() {
    return this.aiImageService.getModels();
  }

  @Get('models/:id')
  getModel(@Param('id', ParseIntPipe) id: number) {
    return this.aiImageService.getModel(id);
  }

  @Post('models')
  createModel(@Body() dto: CreateModelDto) {
    return this.aiImageService.createModel(dto);
  }

  @Put('models/:id')
  updateModel(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateModelDto,
  ) {
    return this.aiImageService.updateModel(id, dto);
  }

  @Delete('models/:id')
  deleteModel(@Param('id', ParseIntPipe) id: number) {
    return this.aiImageService.deleteModel(id);
  }

  // ========== 提示词管理 ==========

  @Get('prompts')
  getPrompts(@Req() req: IRequest) {
    return this.aiImageService.getPrompts(req.user?.id);
  }

  @Post('prompts')
  createPrompt(@Body() dto: CreatePromptDto, @Req() req: IRequest) {
    return this.aiImageService.createPrompt(dto, req.user.id);
  }

  @Put('prompts/:id')
  updatePrompt(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePromptDto,
    @Req() req: IRequest,
  ) {
    return this.aiImageService.updatePrompt(id, dto, req.user.id);
  }

  @Delete('prompts/:id')
  deletePrompt(@Param('id', ParseIntPipe) id: number, @Req() req: IRequest) {
    return this.aiImageService.deletePrompt(id, req.user.id);
  }

  // ========== 生成图片 ==========

  @Post('generate')
  generate(@Body() dto: GenerateImageDto, @Req() req: IRequest) {
    return this.aiImageService.generate(dto, req.user?.id);
  }

  // ========== AI 润色/生成提示词 ==========

  @Post('refine-prompt')
  refinePrompt(@Body('text') text?: string, @Req() req?: IRequest) {
    return this.aiImageService.refinePrompt(text, req?.user?.id);
  }

  // ========== 参考图片上传 ==========

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: join(process.cwd(), 'uploads', 'ai-images', 'references'),
        filename: (_req, file, cb) => {
          const timestamp = Date.now();
          const random = Math.random().toString(36).slice(2, 8);
          const ext = extname(file.originalname);
          cb(null, `ref-${timestamp}-${random}${ext}`);
        },
      }),
      limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
      fileFilter: (_req, file, cb) => {
        const allowed = ['.png', '.jpg', '.jpeg', '.webp', '.gif'];
        const ext = extname(file.originalname).toLowerCase();
        if (allowed.includes(ext)) {
          cb(null, true);
        } else {
          cb(new Error('仅支持 PNG/JPG/JPEG/WEBP/GIF 格式'), false);
        }
      },
    }),
  )
  uploadReference(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new Error('请上传图片文件');
    const url = `/uploads/ai-images/references/${file.filename}`;
    return { url, filename: file.filename };
  }

  // ========== 生成记录 ==========

  @Get('records')
  getRecords(
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
    @Query('modelId') modelId?: string,
    @Req() req?: IRequest,
  ) {
    return this.aiImageService.getRecords(
      page ? parseInt(page, 10) : 1,
      pageSize ? parseInt(pageSize, 10) : 20,
      modelId ? parseInt(modelId, 10) : undefined,
      req?.user?.id,
    );
  }

  @Delete('records/:id')
  deleteRecord(@Param('id', ParseIntPipe) id: number, @Req() req: IRequest) {
    return this.aiImageService.deleteRecord(id, req.user?.id);
  }

  @Delete('records')
  deleteAllRecords(@Req() req: IRequest) {
    return this.aiImageService.deleteAllRecords(req.user?.id);
  }
}
