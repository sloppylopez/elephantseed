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
                        <h1>A little bit of frictionless! <img style={{width:'200px', height:'200px'}}
                                                               src="assets/images/ElephantSeed.png"></img></h1>
                    </div>
                </div>
                <AcmeListGroup></AcmeListGroup>
            </div>
        )
    }
}