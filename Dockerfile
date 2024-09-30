FROM node:22.8-alpine3.20

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4321

CMD ["sh", "-c", "npx astro dev --host"]
