import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Actions() {
  return (
    <section id="actions">
      <h2>💪 Comment Agir ?</h2>
      <p>Chaque geste compte pour préserver notre planète :</p>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Réduire, Réutiliser, Recycler</Card.Title>
          <Card.Text>Adopte des habitudes de consommation responsables.</Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Soutenir les ONG</Card.Title>
          <Card.Text>Contribue financièrement ou deviens bénévole.</Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Planter des arbres</Card.Title>
          <Card.Text>Participe à des campagnes de reforestation locales.</Card.Text>
          <Button variant="success" href="https://www.reforestaction.com" target="_blank">
            ReforestAction 🌱
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Actions;
