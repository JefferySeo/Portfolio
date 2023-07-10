import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import work from '../data/work';

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
                            {work.portfolio.map((dt, index) => {
                                let url = "/portfolio/" + dt.id;
                                return <NavDropdown.Item className='text-end' href={url} key={index}>{dt.main_title}</NavDropdown.Item>
                            })}
                            
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