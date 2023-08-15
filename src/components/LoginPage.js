import React, {useState} from "react";
import { redirect } from "react-router-dom";
import { authenticateUser } from "./auth"; 
import LogoutPage from "./LogoutPage";
import LoginUnsuccessfulpage from "./LoginUnsuccessful";

const LoginPage = ({handleLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        const user = authenticateUser(username, password);

        if (user) {
            handleLogin();
            setLoggedIn(true);
           
        } else {
            setLoginFailed(true);
        }
    };

    const handleRetryLogin = () => {
        setLoginFailed(false);
        setUsername("");
        setPassword("");
    };

    if (loggedIn) {
        return <LogoutPage handleLogout={handleLogin} />;
    }

    if (loginFailed) {
        return <LoginUnsuccessfulpage retryLogin={handleRetryLogin}/>;
    }
    

    return (
        <div className="container p-5 my-5 bg-dark text-white">
            <h2>Login Page</h2>
            <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                </div>
                <button type="submit"className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
