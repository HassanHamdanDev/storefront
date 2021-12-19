import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './header.scss';

export default function Header() {
    return (
        <>
            <Navbar className='header'>
                <Container>
                    <Navbar.Brand href="#home">Our Store</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Cart ( )
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}