import React from "react";
import { CollapseCardBase, Accordion } from "@axa-fr/react-toolkit-collapse";
import "./Home.scss";

const Home = ({ connectedUserFullName }) => (
  <>
    <p>Bonjour {connectedUserFullName}</p>
    <Accordion onlyOne={true}>
      <CollapseCardBase collapse={true}>
        <CollapseCardBase.Header>Déroulé de la séance</CollapseCardBase.Header>
        <CollapseCardBase.Body>
          <p>
            Voici une petite application de mise en pratique. Ce site possède
            une partie publique, les projets, et une partie privée, la liste des
            utilisateurs. Nous pouvons également afficher en haut a droite le
            nom de l'utilisateur connecté. Voici les différents points qui vont
            être abordés :
          </p>
          <ol>
            <li>Découverte</li>
            <li>Installation de react-oidc-context</li>
            <li>Utilisation du login et du logout</li>
            <li>Sécurisation</li>
            <li>Récupération des informations utilisateur</li>
            <li>Installation de react-oidc-context-fetch</li>
            <li>Envoi du token au serveur</li>
          </ol>
        </CollapseCardBase.Body>
      </CollapseCardBase>
      <CollapseCardBase collapse={false}>
        <CollapseCardBase.Header>
          Découverte de l'application{" "}
        </CollapseCardBase.Header>
        <CollapseCardBase.Body>
          <p>
            L'application est brute, nous devons y effectuer quelques optisation
            concernant la gestion de l'authentification. Essayez de lister les
            features OIDC que nous devons appliquer sur les différentes parties
            de l'application.
          </p>
        </CollapseCardBase.Body>
      </CollapseCardBase>
      <CollapseCardBase collapse={false}>
        <CollapseCardBase.Header>
          Installation de react-oidc
        </CollapseCardBase.Header>
        <CollapseCardBase.Body>
          <p>
            En tout premier lieu, nous devons installer le package et le
            paramétrer dans l'application.
          </p>
          <div className="code-container">
            <span className="code">
              npm install @axa-fr/react-oidc-context --save
            </span>
          </div>
          <p>OIDC Client est également un prérequis.</p>
          <div className="code-container">
            <span className="code">npm install oidc-client --save</span>
          </div>
          <p>
            OIDC Client nécessite un polyfill, ne pas oubliez de le mettre en
            place. Ici nous utiliserons core JS
          </p>
          <div className="code-container">
            <span className="code">npm install core-js</span>
          </div>
          <p>
            Ajouter les polyfill necessaires pour faire tourner correctement
            l'application sous IE
          </p>
          <p>
            Vous devez ensuite intégrer la configuration à l'aide des
            identifiants que vous trouverez sur le site{" "}
            <a href="https://demo.identityserver.io/">de démo d'IS4</a>.
            Choisissez le client correspondant à notre Use Case, et implémentez
            la configuration dans un fichier json.
          </p>
          <p>
            Mettez ensuite en place le container OIDC dans le composant global
            de l'application
          </p>
        </CollapseCardBase.Body>
      </CollapseCardBase>
      <CollapseCardBase collapse={false}>
        <CollapseCardBase.Header>Part 1 - Login</CollapseCardBase.Header>
        <CollapseCardBase.Body>
          <p>Nous n'avons aucune action sur le bouton d'identification</p>
          <ul>
            <li>
              Branchez la méthode adéquate sur le callback du bouton du Header
            </li>
          </ul>
        </CollapseCardBase.Body>
      </CollapseCardBase>
      <CollapseCardBase collapse={false}>
        <CollapseCardBase.Header>
          Part 2 - Sécurisation de l'application
        </CollapseCardBase.Header>
        <CollapseCardBase.Body>
          <p>
            Comme vous l'avez sans doute remarqué, nous avons donc des parties
            publiques que nous ne souhaitons pas afficher. Il convient donc de :
          </p>
          <ul>
            <li>Cacher les partie non publiques</li>
            <li>Sécuriser l'accès à la route Admin</li>
            <li>Rediriger l'utilisateur vers le serveur d'authentification</li>
          </ul>
        </CollapseCardBase.Body>
      </CollapseCardBase>
      <CollapseCardBase collapse={false}>
        <CollapseCardBase.Header>
          Part 3 - Affichage de l'utilisateur
        </CollapseCardBase.Header>
        <CollapseCardBase.Body>
          <p>
            Lorsque l'utilisateur est connecté nous souhaitons avoir les
            informations relatives à son compte également dans la page d'accueil (nom et prénom).
          </p>
          <ul>
            <li>
              Utilisez le HOC WithUser afin de récupérer les informations sur
              l'utilisateur connecté
            </li>
          </ul>
        </CollapseCardBase.Body>
      </CollapseCardBase>
      <CollapseCardBase collapse={false}>
        <CollapseCardBase.Header>
          Installation de react-oidc-context-fetch{" "}
        </CollapseCardBase.Header>
        <CollapseCardBase.Body>
          <p>
            Afin de fournir les informations d'authentification de l'utilisateur
            à l'API nous allons utiliser le package react-oidc-context-fetch
          </p>
          <div className="code-container">
            <span className="code">
              npm install @axa-fr/react-oidc-context-fetch --save
            </span>
          </div>
        </CollapseCardBase.Body>
      </CollapseCardBase>
      <CollapseCardBase collapse={false}>
        <CollapseCardBase.Header>
          Part 4 - Ajout du token dans les appels API{" "}
        </CollapseCardBase.Header>
        <CollapseCardBase.Body>
          <p>
            Modifiez les appels à l'API afin que les nouveaux appels contiennent
            le jeton et que nous ayons bien un appel en succès sur l'API
          </p>
        </CollapseCardBase.Body>
      </CollapseCardBase>
    </Accordion>
  </>
);

export default Home;
