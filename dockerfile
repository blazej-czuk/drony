FROM gcr.io/tetratelabs/color-app:1.0.0

WORKDIR /usr/src/app

COPY app.js .

CMD node app.js