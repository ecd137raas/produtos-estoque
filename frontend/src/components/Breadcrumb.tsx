import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default function Bcrumb() {
    return (
            <Breadcrumb>
                <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Cadastro de Produtos</Breadcrumb.Item>
            </Breadcrumb>
    )
}