# RES_LABO4
## Étapes et répertoires
Vous trouverez ci-dessous l'emplacement de la réalisation de chaque étape.

| Étape                                          | Répertoire                                                                                       |
|------------------------------------------------|--------------------------------------------------------------------------------------------------|
| 1. Serveur HTTP statique                       | [apache-php-image](docker-images/apache-php-image/)                                              |
| 2. Serveur HTTP dynamique (express)            | [express-image](docker-images/express-image/)                                                    |
| 3. Reverse proxy apache                        | [reverse-proxy-v1](docker-images/reverse-proxy-v1)                                               |
| 4. Requetes AJAX                               | [apache-php-image/src/assets/js/posts.js](docker-images/apache-php-image/src/assets/js/posts.js) |
| 5. Reverse proxy dynamique                     | [reverse-proxy-v2](docker-images/reverse-proxy-v2)                                               |
| Bonus 1. Load balancing : multiple serveurs    | [reverse-proxy-traefik](docker-images/reverse-proxy-traefik/)                                    |
| Bonus 2. Load balancing : rr vs sticky session | TODO                                                                                             |
| Bonus 3. Gestionnaire de cluster dynamique     | TODO                                                                                             |
| Bonus 4. Gestionnaire UI                       | [portainer](docker-images/portainer/)                                                            |

## Prérequis :
- Docker (version 20.10.6)

## Éape 1. Serveur HTTP statique
Cette étape a pour but de mettre en place uns erveur apache httpd servant du contenu via le protocole HTTP. Notre serveur HTTP est dockerisé et utilise l'image de base [php])(https://hub.docker.com/_/php). 

**Mais Jamy, comment on lance notre container Docker ?**  
Rien de plus facile ! Rendez-vous dans le répertorie [apache-php-image](docker-images/apache-php-image), build l'image et lancer le container ! 
```bash
cd docker-images/apache-php-image
docker build -t poubelle/apache-php .
docker run -p 8080:80 poubelle/apache-php
```
Nous mappons 

Et en vous rendant à l'adresse [localhost:8080](localhost:8080), le serveur *devrait* tourner et servir une page web statique !

## Étape 2. Serveur HTTP dynamique
Dans cette étape, nous mettons en place une application [Express.js](https://expressjs.com/) dont le comportement, à l'instar d'une API retourne un JSON de données pour une requête GET. 
Nous utilisons également la librairie [Chance](https://www.npmjs.com/package/chance) pour générer du contenu aléatoire. Ces deux librairies sont installées via le gestionnaire de paquet NodeJS [NPM](https://www.npmjs.com/). 
Vous trouverez la configuration minimale du projet dans le fichier [`package.json`](docker-images/express-image/src/package.json). 
Notons que nous utilisons la version 1.1.7 (ou compatible) pour Chance et la version 4.17.1 (ou compatible) pour express.
```json
{
   ... 
  "dependencies": {
    "chance": "^1.1.7",
    "express": "^4.17.1"
  }
}
```

Notre mini-API ne possède qu'une seule route :

- GET / : retourne une liste de posts aléatoires. 

**Lancer le container Docker** 
Encore une fois

```bash
cd docker-images/express-image
docker build -t poubelle/express .

docker run -p 9090:3000 poubelle/express

```

TODO postman...
