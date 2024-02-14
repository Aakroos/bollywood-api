FROM node:20.9.0-alpine

ENV PORT {PORT}
ENV NODE_ENV {NODE_ENV}
ENV WHITELISTED_ORIGINS {WHITELISTED_ORIGINS}

WORKDIR /usr/apps/bollywood-api

COPY yarn.lock .
COPY package.json .

RUN yarn install --frozen-lockfile --production
RUN yarn add -D @swc/cli @swc/core

COPY . .

RUN yarn build

EXPOSE 5000-10000

CMD [ "yarn", "start" ]
