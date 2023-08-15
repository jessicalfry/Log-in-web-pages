import React, {useState} from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LogoutPage from "./components/LogoutPage";
import LoginUnsuccessfulpage from "./components/LoginUnsuccessful";
import WelcomePage from "./components/WelcomePage";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        // need logout logic here (like clearing tokens, user data, etc)
    };


    return (
    <Router>
        <Routes>
            <Route path="/" element={loggedIn ? <WelcomePage handleLogout={handleLogout} /> : <LoginPage handleLogin={handleLogin} />} />
            <Route path="/logout" element={<LogoutPage handleLogout={handleLogout} />} />
            <Route path="/login-unsuccessful" element={<LoginUnsuccessfulpage />} />
        </Routes>
    </Router>
    );
};
export default App;
