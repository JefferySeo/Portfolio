import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar expand="lg" >
            <Container>
                <Navbar.Brand href="/" className='logo_area'><img src="../images/logo.png" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-end">
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title='Portfolio' id="show_portfolio">
                            <NavDropdown.Item href="/portfolio/1">11</NavDropdown.Item>
                            <NavDropdown.Item href="/portfolio/2">22</NavDropdown.Item>
                            <NavDropdown.Item href="/portfolio/3">33</NavDropdown.Item>
                            <NavDropdown.Item href="/portfolio/4">44</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link target={'_blank'} href="https://github.com/JefferySeo">Github</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;