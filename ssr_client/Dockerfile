FROM node:18.13-alpine

WORKDIR /app

EXPOSE 3000

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
