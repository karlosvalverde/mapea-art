import * as React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Search from "./Search/Search";
import Detail from "./Search/Detail";
import List from "./Search/List";

export default function Layout() {
    return (
        <div className="container-fluid bg-primary bg-gradient vh-100 overflow-hidden">
            <div className="row h-100">
                <div className="row p-5 h-100">
                    <div className="col col-lg-6 mr-5">
                        <Header/>
                        <Search/>

                    </div>
                    <div className="col col-lg-6 h-100 no-gutters">
                        <div className="container mt-5 mt-lg-0 bg-dark shadow h-100 overflow-auto p-5">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
