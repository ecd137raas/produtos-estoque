import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Menu() {
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Catálago de Produtos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/product/create">Cadastrar Produto</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/products">Listar Produtos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/stock">Estoque</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/report">Relatórios</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/">Sair</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}