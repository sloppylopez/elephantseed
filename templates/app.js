import Jquery from 'jquery'
import React from 'react'

import AcmeNavbar from 'components/acme_nav_bar/acme-nav-bar.js'
import AcmeBody from 'components/acme_body/acme-body.js'
import AcmeFooter from 'components/acme_footer/acme-footer.js'

import BootstrapCss from 'bootstrap/css/bootstrap.css!css'
import BootstrapCss2 from 'bootstrap/css/bootstrap.css!css'

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
            <div>
                <h2>Index!</h2>
            </div>
        )
    }
}

class Users extends React.Component {
    render() {
        return (
            <div>
                <h2>Users</h2>
            </div>
        )
    }
}

class UsersIndex extends React.Component {
    render() {
        return (
            <div>
                <h3>UsersIndex</h3>
            </div>
        )
    }
}

class User extends React.Component {
    render() {
        return (
            <div>
                <h3>User {this.props.params.id}</h3>
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About</h2>
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
            <Route path="/about" component={About}/>
            <Route path="users" component={Users}>
                <IndexRoute component={UsersIndex}/>
                <Route path=":id" component={User}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));