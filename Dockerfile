FROM node:6

WORKDIR /wheel-ui
COPY package.json package.json
RUN npm install 

COPY src/ src/
COPY public/ public/

RUN npm run build

RUN mkdir /ls-ui/
RUN mkdir /ls-ui/ui/
RUN mv build /ls-ui/ui/wheel

VOLUME /ls-ui/ui/wheel

CMD ["echo", "'wheel-ui file volume mounted over /ls-ui/'"]
