import Jquery from 'jquery'
import React from 'react'

import AcmeNavbar from 'components/acme_nav_bar/acme-nav-bar.js'
import AcmeBody from 'components/acme_body/acme-body.js'
import AcmeFooter from 'components/acme_footer/acme-footer.js'

import BootstrapCss from 'bootstrap/css/bootstrap.css!css'

import { render } from 'react-dom'
import { Router, Route, IndexRoute, RouteHandler } from 'react-router'
import { createHistory, useBasename } from 'history'

export default
class App extends React.Component {
    render() {
        return (
            <div>
                <AcmeNavbar></AcmeNavbar>

                <AcmeBody></AcmeBody>

                {this.props.children}

                <AcmeFooter></AcmeFooter>
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
            <div className="container">
                <h2>
                    Featuring
                </h2>
                <ul className="features">
                    <li>
                        No build process, just run your desired web server and have fun
                    </li>
                    <li>
                        Minimum configuration, whola lotta next-gen features
                    </li>
                    <li>
                        Client/Server React template rendering
                    </li>
                    <li>
                        7 to 1 Sass folder structure
                    </li>
                    <li>
                        ES6/ES* Transpilation
                    </li>
                    <li>
                        Efortless use
                    </li>
                </ul>
            </div>
        )
    }
}

class Technologies extends React.Component {
    render() {
        return (
            <div>
                <h2>Technologies</h2>
            </div>
        )
    }
}

class TechnologiesIndex extends React.Component {
    render() {
        return (
            <div>
                <h3>TechnologiesIndex</h3>
            </div>
        )
    }
}

class Technology extends React.Component {
    render() {
        return (
            <div>
                <h3>Technology {this.props.params.id}</h3>
            </div>
        )
    }
}

class AcmeReact extends React.Component {
    render() {
        return (
            <div>
                <h2>React</h2>
            </div>
        )
    }
}

class AcmeJspm extends React.Component {
    render() {
        return (
            <div>
                <h2>Jspm</h2>
            </div>
        )
    }
}

class AcmeBabel extends React.Component {
    render() {
        return (
            <div>
                <h2>Babel</h2>
            </div>
        )
    }
}

class AcmeNodejs extends React.Component {
    render() {
        return (
            <div>
                <h2>NodeJS</h2>
            </div>
        )
    }
}

class AcmeReactBootstrao extends React.Component {
    render() {
        return (
            <div>
                <h2>React-Bootstrap</h2>
            </div>
        )
    }
}

class AcmeBootstrao extends React.Component {
    render() {
        return (
            <div>
                <h2>Bootstrap</h2>
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
            <Route path="/react" component={AcmeReact}/>
            <Route path="/jspm" component={AcmeJspm}/>
            <Route path="/babel" component={AcmeBabel}/>
            <Route path="/nodejs" component={AcmeNodejs}/>
            <Route path="/react-bootstrap" component={AcmeReactBootstrao}/>
            <Route path="/bootstrap" component={AcmeBootstrao}/>
            <Route path="technologies" component={Technologies}>
                <IndexRoute component={TechnologiesIndex}/>
                <Route path=":id" component={Technology}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));