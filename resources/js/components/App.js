import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import List from "./Search/List";
import Searched from "./Search/Searched";
import Detail from "./Search/Detail";
import Dashboard from "./User/Dashboard";
import Login from "./User/Login";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<List />} />
                <Route path="/:search" element={<Searched />} />
                <Route path="/researcher/:id" element={<Detail />} />
                {/* <Route path="dashboard" element={<Dashboard />} /> */}

                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for.
                {/* <Route path="*" element={<NoMatch />} />  */}
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}
