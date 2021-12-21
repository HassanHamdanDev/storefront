import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Navbar, Container } from 'react-bootstrap';
import './header.scss';

export default function Header() {
    const { cartCount } = useSelector(state => state.cart);
    return (
        <>
            <Navbar className='header'>
                <Container>
                    <Navbar.Brand><Link to="/">Our Store </Link></Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to="/cart"> Cart ({cartCount}) </Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}