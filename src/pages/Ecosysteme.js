import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const biomes = [
  { title: "Forêt Tropicale", desc: "Riche en biodiversité, abrite des milliers d'espèces." },
  { title: "Océan", desc: "Régule le climat et abrite une vie marine fascinante." },
  { title: "Désert", desc: "Écosystèmes arides avec une faune adaptée aux conditions extrêmes." }
];

function Ecosysteme() {
  return (
    <section id="ecosysteme">
      <h2>🌿 L'Écosystème</h2>
      <p>Explore les différents écosystèmes et leur importance pour la planète.</p>
      <Row>
        {biomes.map((biome, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>{biome.title}</Card.Title>
                <Card.Text>{biome.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Ecosysteme;
