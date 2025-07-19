FROM node:23-alpine3.20

WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .

RUN npm install --omit=dev --ignore-scripts

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs

USER nodejs
EXPOSE 3000
ENV PORT=3000

CMD [ "npm","start" ]