import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import React from 'react';


export function SignIn({ users }) {

    const navigate = useNavigate();
    // const [users, setUsers] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [invalid, setInvalid] = useState(false);

    const credentials = {
        color: "red",
        display: invalid ? "block" : "none",
    }

    const forgot = {
        display: invalid ? "block" : "none",
        textDecoration: "underline",
        cursor: "pointer"
    }

    function check(u) {
        return u.find((m) => m.username === username && m.password === password)
    }

    return (
        <div className="signup_form_parent">
            <div className="signin_form">
                <p>New User ? <span onClick={() => navigate('/signup')} className="signup_redirect">Sign up</span></p>
                <h4>Login to your account</h4>
                <input onChange={(e) => setUsername(e.target.value)} type="email" className="input" placeholder="Enter your username" />
                <input onChange={(e) => setPassword(e.target.value)} type="text" className="input" placeholder="Enter your password" />
                <p style={credentials} id="invalid" className="invalid shake">Invalid credentials</p>
                <button
                    className="btn addLead_form_save"
                    onClick={() => {
                        let result = check(users);
                        if (result) {
                            setInvalid(false)
                            navigate(`/${username}/home`);
                        } else {
                            setInvalid(true)
                            document.getElementById("invalid").style.className = "shake";
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
