import React, { Component, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ResearchersContext } from "../../context";

export default function RequireAuth({ children }) {
    const researchersContext = useContext(ResearchersContext);
    const { authed } = researchersContext;

    return authed ? children : <Navigate to="/login" replace />;
}
