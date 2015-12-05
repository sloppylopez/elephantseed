import React, { Component } from 'react'
import { render } from 'react-dom'

import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default
class AcmeListGroup extends Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItem header="React for templating">A Javasript Library for building user
                    interfaces</ListGroupItem>
                <ListGroupItem header="React-Bootstrap" bsStyle="danger">Danger styling</ListGroupItem>
                <ListGroupItem header="Jspm" href="#">Frictionless browser package management</ListGroupItem>
            </ListGroup>
        )
    }
}