import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

export default function Menu() {
    const { goBack } = useHistory();
    return(
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Catálago de Produtos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/product/create">Cadastrar Produto</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/products">Listar Produtos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/stock">Estoque</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/report">Relatórios</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="/">Sair</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
}