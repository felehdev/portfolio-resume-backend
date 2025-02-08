FROM node:22.13.1-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY src dist ./

EXPOSE 3000

CMD ["npm", "run", "dev"]
