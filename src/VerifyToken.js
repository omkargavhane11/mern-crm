import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from "./global.js";
import TextField from '@mui/material/TextField';
import { TailSpin } from 'react-loader-spinner';

export function VerifyToken() {

    const navigate = useNavigate();
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [code, setCode] = useState("");
    const [load, setLoad] = useState(false);
    const [invalid, setInvalid] = useState(false);
    // const [tempToken, setTempToken] = useState(localStorage.getItem('tempToken'));


    const credentials = {
        color: "red",
        display: invalid ? "block" : "none",
    }

    async function getTokenFromDB() {
        let payload = {
            email: email
        }
        await fetch(`${API}/verifytoken`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((data) => data.json()).then((data) => verifyToken(data))
    }

    function verifyToken(data) {
        if (code == data.token) {
            setLoad(false)
            setInvalid(false)
            navigate(`/passwordreset`)
        } else {
            setLoad(false)
            setInvalid(true)
            console.log("not matched", data);
        }
    }


    return (
        <div className="signup_form_parent">
            <div className="verifyemail">
                <p>Enter the code sent to your e-mail</p>

                <TextField onChange={(e) => setCode(e.target.value)} className="addLead_input" type="text" id="text" name="text" placeholder="Mailed code" />
                <p style={credentials} id="invalid" className="invalid shake">Invalid code</p>

                <button
                    className="btn addLead_form_save"
                    onClick={() => {
                        setLoad(true)
                        getTokenFromDB()
                        // if (result) {
                        // setInvalid(false)
                        // navigate(`/passwordreset`)
                        // } else {
                        //     setInvalid(true)
                        // }
                    }}
                >{load ? <TailSpin color="white" height={20} width={20} /> : "Verify"}</button>
                <button
                    className="btn addLead_form_save"
                    onClick={() => {
                        navigate('/')
                        localStorage.clear()
                    }}
                >Cancel</button>
            </div>

        </div>
    );
}
