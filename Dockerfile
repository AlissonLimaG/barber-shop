FROM node:22.13.1

WORKDIR /barber-shop-ui

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli@19.1.5

COPY . .

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
