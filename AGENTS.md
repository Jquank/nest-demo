# NestJS Demo — AI Agent Instructions

## Quick Reference

| Area            | Detail                                  |
| --------------- | --------------------------------------- |
| Framework       | NestJS 11 (Express)                     |
| Database        | MySQL via Prisma 6.6                    |
| Package manager | pnpm                                    |
| Path alias      | `@/*` → `src/*`                         |
| API prefix      | `/api`                                  |
| Auth            | JWT (global guard + `@Public()` bypass) |
| API docs        | Swagger UI at `/api`                    |

## Build / Test / Run

```bash
pnpm start:dev        # Start with hot-reload
pnpm build            # Production build
pnpm start:prod       # Run built app
pnpm test             # Unit tests (Jest)
pnpm test:e2e         # E2E tests (supertest)
pnpm lint             # ESLint fix
pnpm seed             # Seed database (ts-node src/initDataBase.ts)
```

Prisma commands (run via `npx prisma <cmd>`):

- `npx prisma migrate dev` — apply migrations
- `npx prisma db push` — push schema without migrations
- `npx prisma studio` — GUI database browser

## Architecture

### Module Pattern

Every feature module follows this structure:

```
<feature>/
  <feature>.controller.ts   # Routes (use @Controller('<name>'))
  <feature>.service.ts      # Business logic, Prisma queries
  <feature>.module.ts       # Register controller + provider + exports
  dto/                      # DTO files with class-validator decorators
```

Module registration: add to `AppModule` imports in `src/app.module.ts`.

### Auth (Global Guard)

- `AuthGuard` is registered as `APP_GUARD` in `AuthModule` — **every route requires auth by default**.
- Mark public routes with the `@Public()` decorator from `@/common/decorator/public.decorator`.
- User info is attached to `req.user` (`{ id, username }`) by the guard.
- Login returns JWT in `access_token` field + full user profile.

### Response Format

`HttpInterceptor` (registered in `main.ts`) wraps all successful responses:

```ts
{ code: 0, success: true, data: <actual data> }
```

Error responses from `AllExceptionsFilter` (registered as `APP_FILTER` in `AppModule`):

```ts
{ code: -1, status: <http code>, message: <error> }
```

Do **NOT** manually wrap responses — the interceptor handles it.

- **CORS** is enabled globally in `main.ts`.
- **LoggerMiddleware** is applied to all routes (`*`) via `AppModule.configure`.
- **Swagger** docs available at `http://localhost:<port>/api`.

### Database (Prisma)

- `PrismaService` (`@/prisma/prisma.service.ts`) extends `PrismaClient`, auto-connects `OnModuleInit`.
- Inject into services: `constructor(private prisma: PrismaService) {}`
- Prisma client is generated to `node_modules/.prisma/client`, imported from `@prisma/client`.

#### Prisma 迁移安全规范 ⚠️

**生产环境绝对不要直接 `prisma migrate dev`**，必须走两步：

```bash
# 第一步：只生成迁移文件，不应用
npx prisma migrate dev --create-only --name <迁移名>

# 第二步：review 生成的 SQL，确认安全后再应用
npx prisma migrate dev
```

**关键检查清单：**

1. **给已有数据的表加 NOT NULL 列是炸弹** 💣——Prisma 自动生成的 SQL 会直接 `ADD COLUMN ... NOT NULL`，MySQL 在处理已有行时会直接报错。正确做法：
   - schema 中先写成 `Int?`（可空）
   - 迁移后手动补数据
   - 再改 schema 为必填、再建一次迁移

2. **DROP COLUMN / DROP TABLE** — 确认不是误删，生产数据不可逆

3. **外键约束** — 检查是否有脏数据会导致 FK 创建失败（如引用不存在的 id）

4. **`migrate reset` 永远不要在生产跑** — 会清空整个数据库

**开发环境也要养成习惯**：先 `--create-only` → review SQL → 再 `dev`。如果迁移失败导致数据库状态不一致，手动清理残留的列/约束，不要轻易 reset。

```bash
# 查看迁移状态
npx prisma migrate status
# 标记失败迁移为已回滚
npx prisma migrate resolve --rolled-back <迁移名>
```

### Validation

DTOs use `class-validator` decorators (`@IsNotEmpty()`, `@IsString()`, etc.). NestJS `ValidationPipe` is global (see `main.ts`).

### File Uploads / Images

- Static files served from `uploads/` directory at `/uploads` prefix.
- Image proxy at `/uploads/proxy?url=<encoded-url>` for cross-origin images.
- Hotspot images: `uploads/hotspot/`.

## Key Conventions

1. **Use `@/*` imports** (e.g., `import { Foo } from '@/common/...'`) — never relative paths like `../../common/...`.
2. **Never wrap responses** — the global `HttpInterceptor` already wraps with `{ code, success, data }`.
3. **DTO first** — always create/update the DTO class before the controller endpoint.
4. **Prisma query in service** — controllers never call `prismaService` directly; they delegate to services.
5. **Controller endpoints use `@ApiTags()`** for Swagger grouping.
6. **Use `@ApiResponse()`** on endpoints that diverge from default 200 responses.
7. **ESLint**: `any` is allowed, but avoid it in new code. Floating promises warn.

## Common Pitfalls

- **Module dependency**: If a service from Module A is needed in Module B, Module A must `exports: [AService]` and Module B must `imports: [AModule]`.
- **Circular dependencies**: Use `forwardRef(() => Module)` if needed.
- **JWT secret**: Must be set as `JWT_SECRET` env var, default in `AuthModule` registers it globally.
- **bcrypt**: Import `hash`/`compare` from `bcrypt` with named imports (not default). Salt rounds: 10 (`@/common/constants`).
- **Prisma client generation**: Run after schema changes — Prisma client is in a custom output path.
- **Do NOT manually create `src/dto/` from the Prisma generator** — the `nestjsDto` generator in schema.prisma is commented out currently.
