import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Problemes() {
  return (
    <section id="problemes">
      <h2>🌍 Problèmes Environnementaux</h2>
      <p>Voici quelques-unes des menaces majeures qui pèsent sur notre planète :</p>
      <ListGroup>
        <ListGroup.Item>🌫️ Pollution de l'air et de l'eau</ListGroup.Item>
        <ListGroup.Item>🌲 Déforestation</ListGroup.Item>
        <ListGroup.Item>🔥 Réchauffement climatique</ListGroup.Item>
        <ListGroup.Item>🐘 Disparition des espèces</ListGroup.Item>
        <ListGroup.Item>♻️ Surconsommation et déchets</ListGroup.Item>
      </ListGroup>
    </section>
  );
}

export default Problemes;
