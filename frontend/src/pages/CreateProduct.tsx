import React from 'react'
import { Breadcrumb, Button, Col, Container, Form } from 'react-bootstrap'

import Menu from '../components/Menu'
import Bcrumb from '../components/Breadcrumb'

export default function CreateProduct(){
    return (
        <><Menu />
        
            <Container>
                <h3>Cadastro de Produto</h3>
                < Bcrumb />
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCode">
                            <Form.Label>Código do produto</Form.Label>
                            <Form.Control type="text" placeholder="Informe o código EAN" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Nome do produto</Form.Label>
                            <Form.Control type="text" placeholder="Informe o nome" required />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridDescription">
                        <Form.Label>Descrição do produto</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Informe a ficha tecnica do produto" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridmodel">
                            <Form.Label>Modelo</Form.Label>
                            <Form.Control type="text" placeholder="Informe o modelo"  required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBrand">
                            <Form.Label>Marca</Form.Label>
                            <Form.Control type="text" placeholder="Informe a marca" required/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridSize">
                            <Form.Label>Tamanho</Form.Label>
                            <Form.Control type="text" placeholder="Informe o tamanho" required/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridColor">
                            <Form.Label>Cor do produto</Form.Label>
                            <Form.Control type="text" placeholder="Informe a cor" required/>
                        </Form.Group>
                    </Form.Row>


                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Ativo" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container></>
        );
    
}