FROM node:14

WORKDIR /usr/src/app

COPY src/package*.json ./

RUN npm install

COPY src/ .

EXPOSE 3000

CMD ["node", "index.js"]