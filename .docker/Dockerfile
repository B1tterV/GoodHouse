# Build
FROM node:20.19.4-alpine AS builder

WORKDIR /var/www/app

COPY ./src/package*.json ./
COPY ./src/yarn.lock ./

ENV NODE_OPTIONS="--max_old_space_size=2000"

RUN yarn install --prefer-offline --pure-lockfile --non-interactive --production=false

COPY ./src .

RUN yarn build

# Run
FROM node:20.19.4-alpine AS prod

ENV NODE_ENV="production"
ENV PORT="3000"
WORKDIR /var/www/app

COPY --from=builder /var/www/app/package.json ./package.json
COPY --from=builder /var/www/app/yarn.lock ./yarn.lock

COPY --from=builder /var/www/app/.output ./.output

# Запускаем приложение
CMD ["node", ".output/server/index.mjs"]
