FROM php:7.1-apache

COPY ./conf /etc/apache2
COPY ./apache2-foreground /usr/local/bin/

COPY ./templates/ /var/apache2/
RUN chmod a+x /usr/local/bin/apache2-foreground
RUN a2enmod proxy proxy_http
RUN a2ensite *
RUN service apache2 restart