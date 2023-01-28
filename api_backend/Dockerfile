FROM node:18.13-alpine

WORKDIR /app

EXPOSE 5000

COPY package*.json /app

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]
