FROM alpine:3.16
LABEL maintainer="Melaine Gérard <pro@melaine-gerard.fr>"
LABEL version="0.1"

RUN mkdir -p /project

WORKDIR /project

RUN apk update && apk add --update --no-cache \
tzdata \
nano \
neovim \
nodejs \
bash \
npm

COPY .output .

ENV TZ Europe/Paris
EXPOSE 3000
CMD [ "node", "/project/server/index.mjs" ]
