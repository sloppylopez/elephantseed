// eslint-disable-next-line 
import React, {Component} from "react";
// eslint-disable-next-line 
import {render} from "react-dom";
// eslint-disable-next-line 
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap"; 

export default
class AcmeNavbar extends Component {
    render () {

        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Home</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavDropdown eventKey={2} title="Dropdown"
                                     id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1}>Action</MenuItem>
                            <MenuItem eventKey={2.2}>
                                Another action</MenuItem>
                            <MenuItem eventKey={2.3}>Something
                                else here</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={2.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );

    }
}
