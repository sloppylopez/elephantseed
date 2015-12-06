import React, { Component } from 'react'
import { render } from 'react-dom'

export default
class AcmeFooter extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <p className="text-muted">sloppy@sloppylopez.com</p>
                </div>
            </footer>
        )
    }
}