import React, { Component } from "react";

class Search extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            user: {}
        }
    }


    // check if user is authenticated and storing authentication data as states if true
    componentWillMount() {
        let state = localStorage["appState"];
        if (state) {
        let AppState = JSON.parse(state);
        this.setState({
            isLoggedIn: AppState.isLoggedIn,
            user: AppState.user
            });
        }
    }

    render() {
        return (
            <div class="container bg-warning">
                <h2>Es un Test!</h2>
            </div>
        );

    }

}

export default Search;
