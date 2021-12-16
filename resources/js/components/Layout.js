import * as React from "react";

import Header from "./Header/Header";
import Example from "./Example";

export default function Layout() {
    return (
        <div class="container-fluid bg-primary vh-100 overflow-hidden">
            <div class="row h-100">
                <div class="row p-5 h-100">
                    <div class="col col-6 mr-5">
                        <Header/>

                    </div>
                    <div class="col col-6 h-100 no-gutters">
                        <div class="container bg-dark shadow h-100 overflow-auto p-5">
                            <Example/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
