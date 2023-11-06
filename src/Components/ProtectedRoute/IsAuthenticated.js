import React, { useSelector } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

function IsAuthenticated({ children }) {
    // const { user } = useSelector((state) => state.user);
    const isAuthenticated = localStorage.getItem('token');

    if(!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default IsAuthenticated;