import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import List from "./Search/List";
import Searched from "./Search/Searched";
import Detail from "./Search/Detail";
import Dashboard from "./User/Dashboard";
import Login from "./User/Login";
import Test from "./Search/Test";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<List />} />
                <Route path="search/:search" element={<Searched />} />
                <Route path="researcher/:id" element={<Detail />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/test" element={<Test />} />
        </Routes>
    );
}
