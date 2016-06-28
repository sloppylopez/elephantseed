// eslint-disable-next-line
import React from "react";

// eslint-disable-next-line 
import AcmeNavbar from "components/acme_nav_bar/acme-nav-bar.js";
// eslint-disable-next-line 
import AcmeBody from "components/acme_body/acme-body.js";
// eslint-disable-next-line 
import AcmeFooter from "components/acme_footer/acme-footer.js";
// eslint-disable-next-line 
import {render} from "react-dom";
// eslint-disable-next-line 
import {Router, Route, IndexRoute, RouteHandler, browserHistory}
    from "react-router";

const App = ({children}) => (
    <div>
        <AcmeNavbar></AcmeNavbar>

        <AcmeBody></AcmeBody>

        {children}

        <AcmeFooter></AcmeFooter>
    </div>
), AcmeBabel = () => (
    <div>
        <h2>Babel</h2>

        <ul className="features">
            <li>
                Use the Javascript of tomorrow
                today, Babel transpiles your sources
            </li>
            <li>
                No need to patiently wait for browser support
            </li>
        </ul>
    </div>
), AcmeESlint = () => (
    <div>
        <h2>ESlint</h2>

        <ul className="features">
            <li>
                Code linting is a type of static analysis
                that is frequently used to find problematic patterns
            </li>
            <li>
                It's a standard 'de facto'
                in all modern Web applications
            </li>
        </ul>
    </div>
), AcmeJspm = () => (
    <div>
        <h2>Jspm</h2>

        <ul className="features">
            <li>
                Load ES6, AMD, CommonJS and globals
                universally using your preferred online source
            </li>
            <li>
                JSPM uses SystemJS module loader
                to provide ES6 loader features
            </li>
            <li>
                Compile static resources in the
                browser in development time
            </li>
            <li>
                Optimize static resources
                bundling them from production
            </li>
        </ul>
    </div>
), AcmeNodejs = () => (
    <div>
        <h2>NodeJS</h2>

        <ul className="features">
            <li>
                Runtime event-driven non-blocking
                I/O built on Chrome's V8 engine
            </li>
            <li>
                Biggest eco-system of open source
                code in the whole planet
            </li>
        </ul>
    </div>
), AcmeReactBootstrao = () => (
    <div>
        <h2>React-Bootstrap</h2>

        <ul className="features">
            <li>
                Rebuilding of the preferred
                framework for front-end in React
            </li>
        </ul>
    </div>
), AcmeReact = () => (
    <div>
        <h2>React</h2>

        <ul className="features">
            <li>
                Modern library for developing user i
                nterfaces based entirely in Javascript
            </li>
        </ul>
    </div>
), Index = () => (
    <div className="container">
        <ul className="features">
            <li>
                This is a React based template for building
                Next-Gen SPA Web applications in a blink
            </li>
            <li>
                Gulpless/Gruntless fully functional workflow
                just using JSPM as a universal tool
            </li>
            <li>
                Firebase hosting friendly, deploy your
                project using command line in seconds
            </li>
            <li>
                No build process, just run your desired
                web server and have fun playing
            </li>
            <li>
                Minimum configuration, whola lotta
                features for smooth develop
            </li>
            <li>
                Using ESlint the pluggable linting
                utility for JavaScript and JSX
            </li>
            <li>
                Isomorphic Client/Server
                React template rendering
            </li>
            <li>
                Convenient 7 to 1 Sass
                folder structure
            </li>
            <li>
                Babel ES6/ES* transpilation
            </li>
            <li>
                Efortless use
            </li>
            <li>
                <a href="https://www.npmjs.com/package/slush-jspm-react-seed">
                    Fork U!</a>
            </li>
        </ul>
    </div>
);

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="/react" component={AcmeReact}/>
            <Route path="/jspm" component={AcmeJspm}/>
            <Route path="/babel" component={AcmeBabel}/>
            <Route path="/nodejs" component={AcmeNodejs}/>
            <Route path="/react-bootstrap" component={AcmeReactBootstrao}/>
            <Route path="/eslint" component={AcmeESlint}/>
        </Route>
    </Router>
    ,
    document.getElementById("app"));
