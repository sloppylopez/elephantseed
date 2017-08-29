// eslint-disable-next-line no-unused-vars
import React, {Component} from "react";
// eslint-disable-next-line no-unused-vars
import {render} from "react-dom";
// eslint-disable-next-line no-unused-vars
import AcmeListGroup from "./list_group/list-group";

export default
class AcmeBody extends Component {

    render () {

        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="container">
                        <img src="https://goo.gl/MPSSme"
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
