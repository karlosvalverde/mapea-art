import React from "react";
import { ResearchersContextProvider } from "../context";
import { Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "./Auth/RequireAuth";

import Layout from "./Layout";
import List from "./Search/List";
import Detail from "./Search/Detail";
import Dashboard from "./User/Dashboard";
import Signup from "./User/Signup";
import Login from "./User/Login";
import ResearcherEdit from "./Edit/ResearcherEdit";
import Test from "./Search/Test";

export default function App() {

    return (
        <ResearchersContextProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<List />} />
                    <Route path="researcher/:id" element={<Detail />} />
                </Route>
                {/* TO DO - Signup component*/}
                {/* <Route path="/signup" element={
                    <RequireAuth>
                        <Signup />
                    </RequireAuth>
                    }
                /> */}
                <Route path="/dracula" element={<Login />}/> {/* TO DO - Login component*/}
                <Route path="/dashboard" element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                    }
                />
                <Route path="/:id/edit" element={
                    <RequireAuth>
                        <ResearcherEdit />
                    </RequireAuth>
                    } exact={true}
                />
                <Route path="/test" element={
                    <RequireAuth>
                        <Test />
                    </RequireAuth>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </ResearchersContextProvider>

    );
}
