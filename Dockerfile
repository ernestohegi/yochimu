FROM node:24-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Corepack is included in Node, it allows to manage package managers like pnpm.
RUN corepack enable

FROM base AS builder

WORKDIR /app

COPY ["package.json", "pnpm-lock.yaml", "./"]

# Creates a cache for pnpm store to speed up subsequent builds.
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

COPY [".", "."]

RUN pnpm build

FROM base AS runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

EXPOSE 3000

CMD ["pnpm", "start"]
