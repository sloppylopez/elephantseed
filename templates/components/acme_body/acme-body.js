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
                        <div className="left">
                            <img style={{width:'200px', height:'200px'}}
                                 src="https://elephantseed.firebaseapp.com/assets/images/ElephantSeed.png"
                                 alt="Elephant Seed"></img>
                        </div>
                        <div className="left">
                            <h1>A little bit of frictionless!</h1>

                            <p>Vaseline driven browser side boiler-plate annihilation. Period</p>
                        </div>
                    </div>
                </div>
                <AcmeListGroup></AcmeListGroup>
            </div>
        )
    }
}