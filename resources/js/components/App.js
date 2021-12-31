import React, { useState, useEffect } from "react";
import { ResearchersContext, ResearchersContextProvider } from "../context";
import { Routes, Route, Link } from "react-router-dom";

import Layout from "./Layout";
import List from "./Search/List";
import Searched from "./Search/Searched";
import Detail from "./Search/Detail";
import Dashboard from "./User/Dashboard";
import Login from "./User/Login";
import Test from "./Search/Test";

export default function App() {
    // const [researchers, setResearchers] = useState([]);
    // const [name, setName] = useState("");
    // const [keywords, setKeywords] = useState("");
    // const [estado, setEstado] = useState("");
    // const [university, setUniversity] = useState("");
    // const [role, setRole] = useState("");
    // const [researchField, setResearchField] = useState("");
    // let filteredData = [...researchers];




    return (
        <ResearchersContextProvider>
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<List />} />
                <Route path="researcher/:id" element={<Detail />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/test" element={<Test />} />
        </Routes>
        </ResearchersContextProvider>

    );
}
