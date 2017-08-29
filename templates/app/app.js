// eslint-disable-next-line
import React from "react";

// eslint-disable-next-line 
import Navbar from "components/nav_bar/nav-bar.js";
// eslint-disable-next-line 
import Body from "components/body/body.js";
// eslint-disable-next-line 
import Footer from "components/footer/footer.js";
// eslint-disable-next-line 
import {render} from "react-dom";
import {
// eslint-disable-next-line no-unused-vars
  Router, Route, IndexRoute, RouteHandler, browserHistory
}
  from "react-router";

const App = ({children}) => (
  <div>
    <Navbar></Navbar>

    <Body></Body>

    {children}

    <Footer></Footer>
  </div>
), Babel = () => (
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
), Docker = () => (
  <div>
    <h2>Docker</h2>

    <ul className="features">
      <li>
        Eliminate once for all ye
        olde 'It works in my computer'
      </li>
    </ul>
  </div>
), ESlint = () => (
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
        <a href="https://goo.gl/YftWzL">
          Fork U!</a>
      </li>
    </ul>
  </div>
), Jspm = () => (
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
), Nodejs = () => (
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
), ReactJS = () => (
  <div>
    <h2>React</h2>

    <ul className="features">
      <li>
        Modern library for developing user
        interfaces based in Javascript entirely
      </li>
    </ul>
  </div>
);

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/docker" component={Docker}/>
      <Route path="/nodejs" component={Nodejs}/>
      <Route path="/jspm" component={Jspm}/>
      <Route path="/react" component={ReactJS}/>
      <Route path="/babel" component={Babel}/>
      <Route path="/eslint" component={ESlint}/>
    </Route>
  </Router>,
  document.getElementById("app"));
