# Stage 1: Build the TypeScript code
FROM node:20 AS builder
WORKDIR /app
COPY . .
RUN npm install -g esbuild && npm ci

RUN npm run prepare

# Stage 2: Serve the compiled code in a lightweight container
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/ /app/
COPY package.json package-lock.json ./
RUN npm install -g esbuild
RUN npm ci --omit=dev
#EXPOSE 3000
CMD ["node", "./dist/index.js"]
