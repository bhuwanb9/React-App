import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Button, Navbar, Nav,  Form, FormControl } from 'react-bootstrap';

export default class Footer extends React.Component {
    render () {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <Navbar bg="light" expand="lg" className="w-100">
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                                <Nav.Link as={Link} to='/portfolio'>Portfolio</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </footer>
        )
    }
}