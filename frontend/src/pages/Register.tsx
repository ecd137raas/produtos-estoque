import React, { FormEvent, useState } from 'react'
import { Button, Col, Container, Form } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'

import Menu from '../components/Menu';
import api from '../services/api';

export default function Register(){

    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
async function handleSubmit(event: FormEvent) {
      
      event.preventDefault();
  
      const data = new FormData();
      data.append('name', String(name));
      data.append('email', String(email));
      data.append('password', String(password));

      await api.post('/auth/register', data);
  
      alert('Cadastro realizado com sucesso!');
  
      history.push('/home');
  
    }

    return (
        <><Menu />
        <Container>
            <h3>Cadastre seu usuário</h3>
            <Form onSubmit={ handleSubmit } >
                <Form.Row>
                <Form.Group as={Col}>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control placeholder="Nome completo" id="name" value={name} onChange={event => setName(event.target.value)} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Informe seu email" id="email" value={email} onChange={event => setEmail(event.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Senha" id="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>
            </>
        );
}