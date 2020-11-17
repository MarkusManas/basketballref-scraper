import React, {Component} from 'react';

export default class NavBar extends Component {
    render() {
        return(
            <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                    <a className="navbar-brand" href="#">{this.props.title}</a>
                </div>
            </nav>
        )
    }
}