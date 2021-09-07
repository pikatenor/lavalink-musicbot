FROM node:lts-alpine

WORKDIR /app

COPY package.json ./
RUN yarn install --production

COPY . ./

ENTRYPOINT ["npm", "start"]
