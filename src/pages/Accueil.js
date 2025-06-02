import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

function Accueil() {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <h1>Bienvenue sur EcoSensibilisation</h1>
      <p>Un site dédié à la protection de notre planète et de ses merveilles naturelles.</p>
      <Button variant="success" href="#actions">Découvrir comment agir</Button>
    </div>
  );
}

export default Accueil;
