# Estágio de construção (BUILD STAGE)
FROM node:lts-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

#RUN npm run build

# Estágio de produção (PRODUCTION STAGE)
FROM node:lts-alpine 

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app .

EXPOSE 3001

CMD ["node", "app.js"]
