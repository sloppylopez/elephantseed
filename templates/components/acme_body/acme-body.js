import React, { Component } from 'react'
import { render } from 'react-dom'

import { Link, IndexLink } from 'react-router'

import AcmeListGroup from './acme_list_group/acme-list-group'

const ACTIVE = {color: 'blue'};

export default
class AcmeBody extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="container">
                        <h1>A little bit of frictionless SEED!</h1>
                        <ul>
                            <li><Link to="/" activeStyle={ACTIVE}>/</Link></li>
                            <li><IndexLink to="/" activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>

                            <li><Link to="/users" activeStyle={ACTIVE}>/users</Link></li>
                            <li><IndexLink to="/users" activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

                            <li><Link to="/users/sloppy" activeStyle={ACTIVE}>/users/sloppy</Link></li>
                            <li><Link to="/users/lopez" query={{ foo: 'bar' }}
                                      activeStyle={ACTIVE}>/users/lopez?foo=bar</Link>
                            </li>

                            <li><Link to="/about" activeStyle={ACTIVE}>/about</Link></li>
                        </ul>
                    </div>
                </div>
                <AcmeListGroup></AcmeListGroup>
            </div>
        )
    }
}