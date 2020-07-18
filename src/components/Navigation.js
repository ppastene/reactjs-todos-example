import React, { useContext } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';

export default function Navigation () {

    const { cookies, logout } = useContext(AuthContext)

    const isLoggedIn = (cookies && cookies.auth && cookies.auth.isLoggedIn)

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Link to="/"><Navbar.Brand>Title</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                </Nav>
                <Nav>
                    {isLoggedIn? <Nav.Link onClick={logout}>Logout</Nav.Link>:
                        (<><Nav.Link as={Link} to="/register">Register</Nav.Link><Nav.Link as={Link} to="/Login">Login</Nav.Link></>)
                    }
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
