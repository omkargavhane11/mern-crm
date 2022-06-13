import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from "./global.js";
import { send } from 'emailjs-com';
import { TailSpin } from 'react-loader-spinner';

export function VerifyEmail() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [verifyEmail, setVerifyEmail] = useState();
    const name = "admin";
    const [load, setLoad] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const credentials = {
        color: "red",
        display: invalid ? "block" : "none",
    }

    async function check(email) {
        const response = await fetch(`${API}/verifyemail`, {
            method: "POST",
            body: JSON.stringify(email),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((data) => data.json())
            .then((data) => validate(data))
    }

    function validate(data) {
        const something = (Math.random().toString(36).replace(/[^a-z]+/g, ''))
        if (data == true) {
            setInvalid(false)
            setLoad(false)
            sendEmail(something)
            localStorage.setItem('tempToken', something)
            navigate(`/verifytoken`)
        } else {
            setInvalid(true)
            setLoad(false)
        }
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
                <h4>Verify account </h4>

                <input onChange={(e) => setEmail(e.target.value)} className="input" type="email" id="Email" name="Email" placeholder="Your email.." />
                <p style={credentials} id="invalid" className="invalid shake">Invalid credentials</p>
                <button
                    className="btn addLead_form_save"
                    onClick={() => {


                        if (email.length > 6) {
                            setLoad(true)
                            check(email)
                            // if (verifyEmail.message == true) {
                            //     setInvalid(false)
                            //     setLoad(false)
                            //     sendEmail(something)
                            //     localStorage.setItem('tempToken', something)
                            //     navigate(`/verifytoken`)
                            // } else {
                            //     setInvalid(true)
                            //     setLoad(false)
                            // }

                        } else {
                            setInvalid(true)
                            setLoad(false)
                        }
                    }}
                >{load ? <TailSpin color="white" height={20} width={20} /> : "Verify email"}</button>
                <p
                    className="signup_redirect"
                    onClick={() => navigate('/')}
                >Cancel</p>
            </div>

        </div>
    );
}
