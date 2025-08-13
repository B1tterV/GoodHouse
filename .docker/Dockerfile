# Stage 1: Build
FROM node:20.11.0-alpine AS builder

WORKDIR /app

COPY ./src/package*.json ./
COPY ./src/yarn.lock ./

COPY ./src .

RUN yarn install --frozen-lockfile

RUN yarn build

# Stage 2: Production
FROM node:20.17.0-alpine

WORKDIR /app

# Копируем только необходимые файлы из стадии сборки
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock

# Устанавливаем только production зависимости
RUN yarn install --production --frozen-lockfile

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
