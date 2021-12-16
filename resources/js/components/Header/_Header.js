import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
         this.state = {
            user: props.userData,
            isLoggedIn: props.userIsLoggedIn
         };
         this.logOut = this.logOut.bind(this);
    }

    logOut() {
        let appState = {
            isLoggedIn: false,
            user: {}
        };
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
        this.props.history.push("/login");
    }

    render() {
        return (
            <div class="row">
                <h1><Link to="/">Mapeamento de pesquisadores em arte no contexto brasilero</Link></h1>
                { this.state.isLoggedIn ?
                    <button className="button btn-outline-primary"><Link to="/dashboard">Dashboard</Link></button>
                    : ""
                }
                { !this.state.isLoggedIn ?
                    <button className="button btn-outline-primary"><Link to="/login">Login</Link></button>
                    : ""
                }
            </div>
        );
    }
}

export default useNavigate(Header)
