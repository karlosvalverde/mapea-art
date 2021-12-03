import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";

const Main = props => (

    <Routes>
        {/*User might LogIn*/}
        <Route exact path='/' component={Home}/>

        {/*User will LogIn*/}
        {/* <Route path='/login' component={Login}/> */}

        {/* User is LoggedIn*/}
        {/* <PrivateRoute path='/dashboard' component={Dashboard}/>   */}

        {/*Page Not Found*/}
        {/* <Route component={NotFound}/> */}
    </Routes>
);

export default Main;
