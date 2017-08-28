// eslint-disable-next-line 
import React, {Component} from "react";
// eslint-disable-next-line 
import {render} from "react-dom";
// eslint-disable-next-line 
import AcmeListGroup from "./acme_list_group/acme-list-group";

export default
class AcmeBody extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="container">
                        <img style={{"width": "200px", "height": "200px", "float": "left"}}
                             src="https://raw.githubusercontent.com/sloppylopez/elephantseed/master/templates/assets/images/ElephantSeed.png" // eslint-disable-line max-len
                             alt="Elephant Seed"/>

                        <h1>A little bit of frictionless!!!</h1>

                        <p>
                            Vaseline driven Docker
                            boiler-plate annihilation. Period
                        </p>

                    </div>
                </div>
                <AcmeListGroup></AcmeListGroup>
            </div>
        );
    }
}
