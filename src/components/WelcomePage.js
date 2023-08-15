import React from "react";

const WelcomePage = ({handleLogout}) => {
    return (
        <div className="container p-5 my-5 bg-dark text-white">
            <h2>Welcome to My App!</h2>
            <p>You are loggen in.</p>
            <button className="btn btn-primary" onClick={handleLogout}>Sign Out</button>
        </div>
    );
};

export default WelcomePage;