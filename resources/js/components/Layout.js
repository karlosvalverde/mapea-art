import * as React from "react";

import Header from "./Header/Header";
import Search from "./Search/Search";
import Detail from "./Search/Detail";

export default function Layout() {
    return (
        <div class="container-fluid bg-primary vh-100 overflow-hidden">
            <div class="row h-100">
                <div class="row p-5 h-100">
                    <div class="col col-6 mr-5">
                        <Header/>
                        <Search/>

                    </div>
                    <div class="col col-6 h-100 no-gutters">
                        <div class="container bg-dark shadow h-100 overflow-auto p-5">
                            <Detail/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
