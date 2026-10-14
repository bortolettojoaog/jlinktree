# =========================
# 1. Dependencies (build-time — inclui devDependencies)
# =========================

FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci


# =========================
# 1b. Dependencies (runtime — só produção)
# =========================

FROM node:22-alpine AS prod-deps

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --omit=dev


# =========================
# 2. Build
# =========================

FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN npm run build


# =========================
# 3. Runtime
# =========================

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=127.0.0.1

RUN apk add --no-cache nginx

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY scripts/docker-entrypoint.sh ./scripts/docker-entrypoint.sh

RUN chmod +x ./scripts/docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["./scripts/docker-entrypoint.sh"]
