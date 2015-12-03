import Jquery from 'jquery'
import React from 'react'
import Bootstrap from 'jspm_packages/github/twbs/bootstrap@3.3.6/css/bootstrap.css!'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, RouteHandler } from 'react-router'
import { createHistory, useBasename } from 'history'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
const ACTIVE = {color: 'red'};

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Jspm-React-Bootstrap ROCKS!</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Link</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <h1>Put a SEED in your Life!</h1>
                <ul>
                    <li><Link to="/" activeStyle={ACTIVE}>/</Link></li>
                    <li><IndexLink to="/" activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>

                    <li><Link to="/users" activeStyle={ACTIVE}>/users</Link></li>
                    <li><IndexLink to="/users" activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

                    <li><Link to="/users/sloppy" activeStyle={ACTIVE}>/users/sloppy</Link></li>
                    <li><Link to="/users/lopez" query={{ foo: 'bar' }} activeStyle={ACTIVE}>/users/lopez?foo=bar</Link>
                    </li>

                    <li><Link to="/about" activeStyle={ACTIVE}>/about</Link></li>
                </ul>

                {this.props.children}
            </div>
        )
    }

    //arrow function automatically binds lexical "this"
    handleClick = () => {
        //do something in response to button click
        console.log('handled!');
    }
}

class Index extends React.Component {
    render() {
        return (
            <div>
                <h2>Index!</h2>
            </div>
        )
    }
}

class Users extends React.Component {
    render() {
        return (
            <div>
                <h2>Users</h2>
            </div>
        )
    }
}

class UsersIndex extends React.Component {
    render() {
        return (
            <div>
                <h3>UsersIndex</h3>
            </div>
        )
    }
}

class User extends React.Component {
    render() {
        return (
            <div>
                <h3>User {this.props.params.id}</h3>
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About</h2>
            </div>
        )
    }
}

const history = useBasename(createHistory)({
    basename: '/active-links'
});

render((
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="/about" component={About}/>
            <Route path="users" component={Users}>
                <IndexRoute component={UsersIndex}/>
                <Route path=":id" component={User}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));