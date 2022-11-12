FROM node:12-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN npm prune --production

EXPOSE 3000

CMD [ "node", "app.js"]