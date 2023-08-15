import React from "react";

const LoginUnsuccessfulpage = ({retryLogin}) => {
    return (
        <div className="container p-5 my-5 bg-dark text-white">
            <h2>Login unsuccessful</h2>
            <p>Your login attempt was not successful. Please check your username and password.</p>
            <button className="btn btn-primary" onClick={retryLogin}>Try Again</button>
        </div>
    );
};

export default LoginUnsuccessfulpage;