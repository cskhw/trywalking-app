FROM node:lts

WORKDIR /var/www/html/app/

COPY package*.json ./
COPY . .

RUN yarn install --immutable --immutable-cache --check-cache
RUN yarn build

EXPOSE 5050
CMD ["yarn", "preview"]
