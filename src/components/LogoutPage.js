import React, { useEffect } from "react";
import { Redirect } from 'react-router-dom';

const LogoutPage = ({ handleLogout }) => {
    useEffect(() => {
        // call handlelogout funtion
        handleLogout();

    }, [handleLogout]);

    return (
        <div className="container mt-5">
            <h2>Logging Out</h2>
            <p>You have been logged out</p>
        </div>
    );
};

export default LogoutPage;
