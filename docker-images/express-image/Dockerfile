FROM node:14.17.0

COPY src /opt/app

RUN npm install --prefix /opt/app

CMD ["npm", "start", "--prefix",  "/opt/app/"]
