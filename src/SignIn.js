import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import React from 'react';
import { API } from "./global.js";
import TextField from '@mui/material/TextField';
import { Audio, Circles, TailSpin } from 'react-loader-spinner';




export function SignIn() {

    const navigate = useNavigate();
    const [user, setUser] = useState();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invalid, setInvalid] = useState(false);
    const [load, setLoad] = useState(false);


    const credentials = {
        color: "red",
        display: invalid ? "block" : "none",
    }

    function validate(abc) {
        setUser(abc)
        if (abc && abc.password === password) {
            setInvalid(false)
            setLoad(false)
            navigate(`/${username}/home`)
            console.log("login successfull");
        } else {
            setInvalid(true)
            setLoad(false)
        }
    }
    async function LoginUser(credentials) {
        const response = await fetch(`${API}/users/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((data) => data.json())
            .then((abc) => validate(abc))
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
                        setLoad(true)

                        let credentials = {
                            username: username,
                            password: password
                        }
                        LoginUser(credentials)
                    }}
                >{load ? <TailSpin color="white" height={20} width={20} /> : "Login"}</button>
                {/* <p
                    onClick={() => navigate('/verifyemail')}
                    class="forgot"
                    id="forgot"
                    className="forgot">
                    Forgot username ?
                </p> */}
                <p
                    onClick={() => navigate('/verifyemail')}
                    class="forgot"
                    id="forgot"
                    className="forgot">
                    Forgot Password ?
                </p>
            </div>

        </div >
    );
}


function Loader() {
    return (
        <Audio
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'
        />
    )
}

