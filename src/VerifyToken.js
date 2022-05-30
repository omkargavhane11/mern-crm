import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from "./global.js";

export function VerifyToken() {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [users, setUsers] = useState();
    useEffect(() => {
        fetch(`${API}/users`)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    function check(u) {
        return u.find((m) => m.email === email);
    }

    return (
        <div className="signup_form_parent">
            <div className="verifyemail">
                <p>Enter the code sent to your e-mail</p>

                <input onChange={(e) => setEmail(e.target.value)} className="addLead_input" type="email" id="Email" name="Email" placeholder="Mailed code" />

                <button
                    className="btn addLead_form_save"
                    onClick={() => {
                        navigate('/passwordreset')
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
