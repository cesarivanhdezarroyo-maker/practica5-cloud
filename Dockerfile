# --- ETAPA 1: Builder ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

# --- ETAPA 2: Production ---
FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm prune --production

COPY --from=builder /app/node_modules ./node_modules
COPY index.js .

EXPOSE 3000
CMD ["node", "index.js"]
