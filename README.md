# dojo-oidc-client

On va ici, à travers ce DOJO, voir comment utiliser [react-oidc](https://github.com/AxaGuilDEv/react-oidc) pour se connecter sur une application type AXA à travers un serveur d'authentification OAuth/OIDC type Google, Facebook, Axa Connect ou autre.

Voici un peu le déroulé de la séance. Compter 1h30 pour le tout, avec 20/30 min d'introduction et 1h00 de pratique.

### Introduction du sujet

Voici une petite documentation sur le sujet, les principes de base sont repris pour une entrée en matière.

[OAuth2 / OpenID Connect](introduction/README.md)

## Pratique

### Prérequis

Nous devons avoir sur le poste :

- Un accès vers Github en lecture.
- Si en environnement entreprise, le proxy doit etre correctement configuré (cf les guides en interne)
- [Npm](https://www.npmjs.com/get-npm) Installé
- Avant de commencer le dojo le site doit être installé et tourner correctement avec le serveur de mock

Pour cet exercice pratique nous allons utiliser le serveur OAuth du site d'IS4 : [serveur de démo](https://demo.identityserver.io/)

### Installation

```
cd mocks
npm install
cd ../exercice-sample
npm install
npm start
```

Le site doit se lancer ainsi que le serveur de mocks.

![](./assets/images/oidc-hybrid.png)

### Déroulé

Vous trouverez sur le site les instructions à suivre.

### Feedback / Réclamation

Merci d'ouvrir une issue ou de nous contacter via Github

Enjoy !
