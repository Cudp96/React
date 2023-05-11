import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    const [backgroundToggle, setBackgroundToggle] = useState(false);

    if (backgroundToggle === true) {
        document.body.style.background = 'Black';
        document.body.style.color = 'white';
    }
    else {
        document.body.style.background = 'White';
        document.body.style.color = 'black';
    }



    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Nav-Bar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/stu">Student List</Nav.Link>
                        <button onClick={() => setBackgroundToggle(!backgroundToggle)} className='btn btn-light float-end'>{backgroundToggle ? 'Light Mode' : 'Dark Mode'}</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;