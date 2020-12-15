import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import Menu from '../components/Menu'

import api from "../services/api";

interface Products {
    factoryid: number;
    name: string;
    description: string;
    model: string;
    brand: string;
    size: string;
    color: string
}

export default function Product(){

    const [products, setProducts] = useState<Products>();
        
    useEffect(() => {
        api.get('api/product').then(data => {
            setProducts(data.data);
            console.log(data)
        })
    },)
    
    if(!products){
        return <p>Carregando...</p>;
    }

    return (
        <><Menu />
            <Container>
            <h1>Produtos</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            </Container>
            </>
        );
    
}