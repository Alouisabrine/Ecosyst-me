import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-success text-white text-center py-3 mt-5">
      <Container>
        <p>&copy; {new Date().getFullYear()} EcoSensibilisation - Tous droits réservés</p>
      </Container>
    </footer>
  );
}

export default Footer;
