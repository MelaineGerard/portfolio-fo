FROM node:20
LABEL maintainer="Melaine Gérard <pro@melaine-gerard.fr>"
LABEL version="0.1"

RUN mkdir -p /project

WORKDIR /project

COPY .output .

ENV TZ Europe/Paris
EXPOSE 3000
CMD [ "node", "/project/server/index.mjs" ]
