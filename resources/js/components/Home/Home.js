import React, { Component } from "react";

import Header from "../Header/Header";
import Search from "../Search/Search";

class Home extends Component {
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
        // <body>
            <div class="container-fluid bg-primary vh-100 overflow-hidden">
                <div class="row h-100">
                    <div class="row p-5 h-100">
                        <div class="col-6 mr-5">
                            <div class="row">
                                <Header userData={this.state.user} userIsLoggedIn={this.state.isLoggedIn}/>
                            </div>
                            <div class="row">
                                <Search/>
                            </div>
                        </div>
                        <div class="col-6 h-100 no-gutters">
                            <div class="container bg-secondary shadow h-100 overflow-auto p-5">
                                {/* <div class="bg-secondary w-100 sticky-top d-flex justify-content-center align-self-center p-2">
                                    {{ $researchers->links("pagination::bootstrap-4") }}
                                </div> */}
                                <div class="row h-100 mb-5">
                                    {/* List */}
                                    <div class="col-6">
                                        List!
                                    </div>
                                    {/* Detail */}
                                    <div class="col-6">
                                        Detail!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Home;
