import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contact">
      <h2>📞 Contact & Participation</h2>
      <p>Envie de nous aider ou de proposer une idée ? Laisse-nous un message :</p>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Votre nom" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Votre email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Votre message" />
        </Form.Group>
        <Button variant="success" type="submit">Envoyer</Button>
      </Form>
    </section>
  );
}

export default Contact;
