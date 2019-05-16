import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Navbar, Nav,  Form, FormControl } from 'react-bootstrap';
import './Header.css';
import Users from '../Users/Users';
import About from '../About/About';
import HomePage from '../HomePage/HomePage';
import Portfolio from '../Portfolio/Portfolio';

class Header extends React.Component {
    render () {
    return (
        
        <header>
            <div className="container">
                <div className="row">
                    <Navbar bg="light" expand="lg" className="w-100">
                        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/users">Users</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </header>
    )
}
}

export default Header;