import React, { useState } from "react";
import "./LoginComponent.css";
import { Link, useNavigate } from "react-router-dom";

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        // For the sake of example, using local storage to store user details
        const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"));

        if (
            storedUserDetails &&
            email === storedUserDetails.email &&
            password === storedUserDetails.password
        ) {
            navigate("/dashboard");
        } else {
            navigate("/sign-up");
        }
    };

    return (
        <div className="main-login-component-page">
            <h1 className="login-component-text">Login</h1>
            <div className="email-login-component">
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control input-width"
                    placeholder="Enter your email address"
                />
            </div>
            <div className="password-login-component">
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control input-width"
                    placeholder="Enter your password"
                />
            </div>
            <div>
                <button
                    onClick={handleLogin}
                    className="login-component-btn form-control btn btn-info"
                >
                    Login
                </button>
                <p>
                    Don't have an account?{" "}
                    <Link to="/sign-up" className="router-sign-up">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginComponent;
