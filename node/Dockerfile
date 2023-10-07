FROM alpine:3.18.4
COPY . /server
WORKDIR /server/
RUN rm -rf node_modules && rm db && apk add --update nodejs npm && cd /server && npm i && npx tsc

CMD [ "node", "app.js" ]
EXPOSE 8000
