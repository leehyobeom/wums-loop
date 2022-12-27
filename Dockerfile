
FROM node:16 AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build


FROM node:16-alpine

ARG TARGET_APP
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000
ENV APP=start:prod:${TARGET_APP}
CMD npm run ${APP}