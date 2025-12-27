# Build stage
FROM node:20-alpine AS builder
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev git

WORKDIR /opt/
COPY package.json ./
RUN npm install

WORKDIR /opt/app
COPY . .
ENV NODE_ENV=production
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
RUN apk add --no-cache vips-dev

WORKDIR /opt/
COPY --from=builder /opt/node_modules ./node_modules

WORKDIR /opt/app
COPY --from=builder /opt/app ./

ENV PATH=/opt/node_modules/.bin:$PATH
ENV NODE_ENV=production

RUN chown -R node:node /opt/app
USER node

EXPOSE 1337

CMD ["npm", "run", "start"]
