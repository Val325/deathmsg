FROM alpine:3.18.4
COPY . /frontend
WORKDIR /frontend/

RUN rm -rf node_modules && apk add --update npm && cd /frontend && npm i && npx tsc

CMD [ "npm", "start" ]
EXPOSE 3000
