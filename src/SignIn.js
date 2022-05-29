import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import React from 'react';
import { API } from "./global.js";


export function SignIn() {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [invalid, setInvalid] = useState(false);

    const credentials = {
        color: "red",
        display: invalid ? "block" : "none",
    }

    useEffect(() => {
        fetch(`${API}/users`)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, [])
    // console.log(users);
    return (
        <div className="signup_form_parent">
            <div className="signup_form">
                <p>New User ? <span onClick={() => navigate('/signup')} className="signup_redirect">Sign up</span></p>
                <h4>Login to your account</h4>
                <input onChange={(e) => setUsername(e.target.value)} type="email" className="input" placeholder="Enter your username" />
                <input onChange={(e) => setPassword(e.target.value)} type="text" className="input" placeholder="Enter your password" />
                <p style={credentials} id="invalid" className="invalid shake">Invalid credentials</p>
                <button
                    className="btn addLead_form_save"
                    onClick={() => {
                        function check(users) {
                            for (let i = 0; i <= users.length; i++) {
                                if (users[i].username === username && users[i].password === password) {
                                    return true;
                                } else {

                                }
                            }
                        }

                        let result = check(users);
                        if (result) {
                            setInvalid(false)
                            navigate('/home');
                        } else {
                            setInvalid(true)
                            document.getElementById("invalid").style.className = "shake";
                        }
                        // console.log(users[0].password, users[0].username);

                    }}
                >Login</button>
            </div>

        </div >
    );
}
