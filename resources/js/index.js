import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/App";
import TaskEdit from "./components/TaskEdit";

if (document.getElementById("root")) {
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/:id/edit" element={<TaskEdit/>}/>
                    <Route exact path="/home" element={<App/>}/>
                </Routes>

            </div>
        </BrowserRouter>,
        document.getElementById("root")
    );
}
