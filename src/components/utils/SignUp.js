import React, { useState } from "react";
import "./LoginComponent";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = () => {
        localStorage.setItem(
            "userDetails",
            JSON.stringify({ name, email, password })
        );
        navigate("/");
    };
    return (
        <div>
            <div className="main-LoginComponent-page">
                <h1 className="LoginComponent-text">Sign Up</h1>
                <div className="email-LoginComponent">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control input-width"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="email-LoginComponent">
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control input-width"
                        placeholder="Enter the email address"
                    />
                </div>
                <div className="password-LoginComponent">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control input-width"
                        placeholder="Enter the password"
                    />
                </div>
                <div>
                    <button
                        onClick={handleSignup}
                        className="LoginComponent-btnn form-control btn btn-info"
                    >
                        Signup here
                    </button>
                </div>
                <p>
                    Already have an account?{" "}
                    <Link to="/" className="router-sign-up">
                        Welcome back.. Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
