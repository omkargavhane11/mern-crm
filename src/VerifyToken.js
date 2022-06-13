import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from "./global.js";
import TextField from '@mui/material/TextField';

export function VerifyToken() {

    const navigate = useNavigate();
    const { username } = useParams();
    const [code, setCode] = useState();
    const [users, setUsers] = useState();
    const [invalid, setInvalid] = useState(false);
    const [tempToken, setTempToken] = useState(localStorage.getItem('tempToken'));


    const credentials = {
        color: "red",
        display: invalid ? "block" : "none",
    }

    useEffect(() => {
        fetch(`${API}/users`)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    function passwordMatch(u) {
        let getUser = u.find((m) => m.username === username);
        let getUserToken = getUser.tempToken;
        // console.log(getUserToken);
        if (getUserToken === code) {
            return true;
        } else {
            return false;
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
                        let result = passwordMatch(users)
                        if (result) {
                            setInvalid(false)
                            navigate(`/passwordreset`)
                        } else {
                            setInvalid(true)
                        }
                    }}
                >Verify</button>
                <button
                    className="btn addLead_form_save"
                    onClick={() => navigate('/')}
                >Cancel</button>
            </div>

        </div>
    );
}
