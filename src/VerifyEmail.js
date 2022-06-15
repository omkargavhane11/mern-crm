import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from "./global.js";
import { send } from 'emailjs-com';
import { TailSpin } from 'react-loader-spinner';
import TextField from '@mui/material/TextField';

export function VerifyEmail() {

    const navigate = useNavigate();
    const name = "admin";

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [load, setLoad] = useState(false);
    const [invalid, setInvalid] = useState(false);

    const credentials = {
        color: "red",
        display: invalid ? "block" : "none",
    }
    const payload = {
        email: email
    };

    async function check(payload) {
        const response = await fetch(`${API}/checkemail`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((data) => data.json())
            .then((data) => validate(data))
    }

    function validate(data) {
        const something = Math.random().toString(36).replace(/[^a-z]+/g, '')
        if (data.msg == "yes") {
            // setUsername(data.username)
            setInvalid(false)
            setLoad(false)
            setTempTokenToDB(something, data.username)
            sendEmail(something)
            localStorage.setItem('username', data.username)
            localStorage.setItem('email', email)
            navigate(`/verifytoken`)
        } else {
            setInvalid(true)
            setLoad(false)
        }
    }


    async function setTempTokenToDB(anything, username) {

        let payload = {
            tempToken: anything
        }
        const response = await fetch(`${API}/users/${username}`, {
            method: "PUT",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((data) => data.json())
        // console.log(username);
    }

    function sendEmail(something) {
        send(
            'service_7jqb24r',
            'template_t26ubhn', // template id of lead mail body
            { name, email, something }, //{sender_name,sender_email,message}
            'lyZGPaZXRsmWLyAOx'  //public key
        ).then((res) => console.log(res, res.message))
            .catch((err) => console.log(err, err.message))
    };

    return (
        <div className="signup_form_parent">
            <div className="verifyemail">
                <h3>Verify account </h3>

                <TextField onChange={(e) => setEmail(e.target.value)} className="input" type="email" id="Email" name="Email" placeholder="Your email.." />
                <p style={credentials} id="invalid" className="invalid shake">Invalid credentials</p>
                <button
                    className="btn addLead_form_save"
                    onClick={() => {
                        if (email.length > 6) {
                            setLoad(true)
                            check(payload)
                        } else {
                            setInvalid(true)
                            setLoad(false)
                        }
                    }}
                >{load ? <TailSpin color="white" height={20} width={20} /> : "Verify email"}</button>
                <p
                    className="signup_redirect"
                    onClick={() => {
                        navigate('/')
                        localStorage.clear()
                    }}
                >Cancel</p>
            </div>

        </div>
    );
}
