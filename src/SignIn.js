import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import React from 'react';
import { API } from "./global.js";
import TextField from '@mui/material/TextField';

export function SignIn() {

    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invalid, setInvalid] = useState(false);


    const credentials = {
        color: "red",
        display: invalid ? "block" : "none",
    }

    const forgot = {
        display: "block",
        textDecoration: "underline",
        cursor: "pointer"
    }

    useEffect(() => {
        fetch(`${API}/users/${username}`)
            .then((res) => res.json())
            .then((data) => setUser(data[0]));
    }, [username])

    function check(u) {
        if (password.length === 0 || username.length === 0) {
            return false;
        } else if (user.username === username && user.password === password) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="signup_form_parent">
            <div className="signin_form">
                <p>New User ? <span onClick={() => navigate('/signup')} className="signup_redirect">Sign up</span></p>
                <h4>Login to your account</h4>
                <TextField onChange={(e) => setUsername(e.target.value)} type="email" className="input" placeholder="Enter your username" />
                <TextField onChange={(e) => setPassword(e.target.value)} type="password" className="input" placeholder="Enter your password" />
                <p style={credentials} id="invalid" className="invalid shake">Invalid credentials</p>
                <button
                    className="btn addLead_form_save"
                    onClick={() => {
                        let result = check(user)
                        if (result) {
                            setInvalid(false)
                            navigate(`/${username}/home`);
                        } else {
                            setInvalid(true)
                        }
                    }}
                >Login</button>
                <p
                    onClick={() => navigate('/verifyemail')}
                    style={forgot}
                    id="forgot"
                    className="forgot">
                    Forgot Password ?
                </p>
            </div>

        </div >
    );
}
