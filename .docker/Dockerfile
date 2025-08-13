# Stage 1: Build
FROM node:20.19.0-alpine AS builder

WORKDIR /app

# 1. Копируем только файлы зависимостей
COPY ./src/package*.json ./
COPY ./src/yarn.lock ./

# 2. Устанавливаем зависимости (без frozen-lockfile на этом этапе)
RUN yarn install

# 3. Копируем остальные файлы
COPY ./src .

# 4. Собираем проект
RUN yarn build

# Stage 2: Production
FROM node:20.19.0-alpine

WORKDIR /app

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./

# Здесь можно использовать --frozen-lockfile
RUN yarn install --production --frozen-lockfile

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]