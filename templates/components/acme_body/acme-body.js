import React, { Component } from 'react'
import { render } from 'react-dom'

import { Link, IndexLink } from 'react-router'

import AcmeListGroup from './acme_list_group/acme-list-group'

const ACTIVE = {color: 'red'};

export default
class AcmeBody extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="container">
                        <h1>A little bit of frictionless SEED!</h1>
                    </div>
                </div>
                <AcmeListGroup></AcmeListGroup>
            </div>
        )
    }
}