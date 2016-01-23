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
                <ul className="features">
                    <li>
                        Next-gen pure static front-end Gulpless/Gruntless Website template working out-of-the-box
                    </li>
                    <li>
                        Firebase hosting friendly, just login and deploy with command line in seconds
                    </li>
                    <li>
                        No build process, just run your desired web server and have fun playing
                    </li>
                    <li>
                        Minimum configuration, whola lotta features for smooth develop
                    </li>
                    <li>
                        Isomorphic Client/Server React template rendering
                    </li>
                    <li>
                        Convenient 7 to 1 Sass folder structure
                    </li>
                    <li>
                        Babel ES6/ES* transpilation
                    </li>
                    <li>
                        Efortless use
                    </li>
                    <li>
                        <a href="https://www.npmjs.com/package/slush-jspm-react-seed">Fork U!</a>
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

                <ul className="features">
                    <li>
                        Modern library for developing user interfaces based entirely in Javascript
                    </li>
                </ul>
            </div>
        )
    }
}

class AcmeJspm extends React.Component {
    render() {
        return (
            <div>
                <h2>Jspm</h2>

                <ul className="features">
                    <li>
                        Load ES6, AMD, CommonJS and globals universally using your preferred online source
                    </li>
                    <li>
                        JSPM uses SystemJS module loader to provide ES6 loader features
                    </li>
                    <li>
                        Compile static resources in the browser in development time
                    </li>
                    <li>
                        Optimize static resources bundling them from production
                    </li>
                </ul>
            </div>
        )
    }
}

class AcmeBabel extends React.Component {
    render() {
        return (
            <div>
                <h2>Babel</h2>

                <ul className="features">
                    <li>
                        Use the Javascript of tomorrow today, Babel transpiles your sources
                    </li>
                    <li>
                        No need to patiently wait for browser support
                    </li>
                </ul>
            </div>
        )
    }
}

class AcmeNodejs extends React.Component {
    render() {
        return (
            <div>
                <h2>NodeJS</h2>

                <ul className="features">
                    <li>
                        Runtime event-driven non-blocking I/O built on Chrome's V8 engine
                    </li>
                    <li>
                        Biggest eco-system of open source code in the whole planet
                    </li>
                </ul>
            </div>
        )
    }
}

class AcmeReactBootstrao extends React.Component {
    render() {
        return (
            <div>
                <h2>React-Bootstrap</h2>

                <ul className="features">
                    <li>
                        Rebuilding of the preferred framework for front-end in React
                    </li>
                </ul>
            </div>
        )
    }
}

class AcmeBootstrao extends React.Component {
    render() {
        return (
            <div>
                <h2>Bootstrap</h2>

                <ul className="features">
                    <li>
                        Standard 'de facto' framework for front-end developing
                    </li>
                    <li>
                        Responsive and extremely easy to user
                    </li>
                </ul>
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