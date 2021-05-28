FROM php:7.1-apache

COPY ./conf /etc/apache2

RUN a2enmod proxy proxy_http
RUN a2ensite *
RUN service apache2 restart