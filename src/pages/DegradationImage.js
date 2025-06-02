import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function DegradationImage() {
  return (
    <section id="image-degradation" className="py-5 bg-light">
      <Container>
        <Row>
          <Col md={6}>
            <h2>🌳 Dégradation de la flore</h2>
            <p>
              La surface forestière mondiale a diminué drastiquement au cours des dernières décennies. 
              Cette image illustre une forêt en danger due à la déforestation massive.
            </p>
          </Col>
          <Col md={6}>
            <Image src="/image1.jpg" fluid rounded className="shadow" alt="Forêt dégradée" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DegradationImage;

