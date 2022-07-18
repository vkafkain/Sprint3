# Entrega 3.2: Publisher - Subscriber 🔊

## Instruccions d'ús: 🧙‍♂️

Per executar el programa introduirem el següent comandament per terminal:

Per enviar missatge a la cua:

    node Publisher.js

Per rebre el missatge de la cua:

    node Subscriber.js

## Què necessitem per fer-lo funcionar? 🧞

Primer de tot hem d'instal·lar Rabbitmq[^1], el podem trobar a la seva pàgina oficial:

[Windows](https://www.rabbitmq.com/install-windows.html'🪟')
[macOs](https://www.rabbitmq.com/install-homebrew.html'🍏')
[Linux](https://www.rabbitmq.com/install-debian.html'👽')

D'altra banda, també hem d'instal·lar un mòdul específic, en aquest cas és el recomanat pels creadors de RabbitMQ, amqplib:

https://www.npmjs.com/package/amqplib

Per instal·lar el mòdul introduirem per terminal:

    npm install amqplib

## Referències

https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html

A la pàgina de tutorials de RabbitMQ hi ha un exemple perfecte de com funciona RabbitMQ, és força estrany trobar tan bona documentació i exemples d'un programa.
