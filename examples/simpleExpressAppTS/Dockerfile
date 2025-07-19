FROM node:23-alpine3.20 AS builder

WORKDIR /build
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build

FROM node:23-alpine3.20 AS runner

WORKDIR /app
COPY --from=builder /build/dist ./dist
COPY --from=builder /build/package.json ./package.json

RUN npm install --omit=dev --ignore-scripts

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs

USER nodejs
EXPOSE 3000
ENV PORT=3000

CMD [ "npm","start" ]