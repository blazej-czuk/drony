FROM gcr.io/tetratelabs/color-app:1.0.0



WORKDIR /usr/src/app
COPY node_modules .
COPY package.json .
COPY app.js .
COPY index.js views/index.js

CMD node app.js