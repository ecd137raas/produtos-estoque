import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Login() {
  return (
    <Container>
      <Row >
        <Col md={{ span: 6, offset: 3 }}>  
          <Card className="bg-ligth text-white">
            <Card.Body>
                <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Informe seu e-mail" />
                  <Form.Text className="text-muted">
                    Nunca compartilhe seu endereço de e-mail.
                  </Form.Text>
                </Form.Group>
              
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Informe sua senha" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Link to='/register'>Não tem acesso, crie sua conta.</Link>
                  <Link to='/home'>home.</Link>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Entrar
                </Button>
              </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  );
}
