import React, { Component } from 'react'
import { render } from 'react-dom'

import { Link, IndexLink } from 'react-router'

import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { ListGroupItemLink, LinkContainer } from 'react-router-bootstrap'

export default
class AcmeListGroup extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <LinkContainer to="/jspm">
                        <ListGroupItem header="Jspm" href="#">Frictionless browser package management</ListGroupItem>
                    </LinkContainer>
                    <LinkContainer to="/babel">
                        <ListGroupItem header="Babel" href="#">The compiler for writing next generation
                            JavaScript</ListGroupItem>
                    </LinkContainer>
                    <LinkContainer to="/nodejs">
                        <ListGroupItem header="NodeJS" href="#">Event-driven I/O server-side JavaScript environment
                            based on
                            V8</ListGroupItem>
                    </LinkContainer>
                </ListGroup>
                <ListGroup>
                    <LinkContainer to="/react">
                        <ListGroupItem header="React" href="#">A Javasript Library for building
                            user
                            interfaces</ListGroupItem>
                    </LinkContainer>
                    <LinkContainer to="/bootstrap">
                        <ListGroupItem header="Bootstrap" href="#">Bootstrap, a mobile
                            first front-end framework for faster and easier web development</ListGroupItem>
                    </LinkContainer>
                    <LinkContainer to="/react-bootstrap">
                        <ListGroupItem header="React-Bootstrap" href="#">The most popular front-end framework, rebuilt
                            for
                            React.</ListGroupItem>
                    </LinkContainer>
                </ListGroup>
            </div>
        )
    }
}