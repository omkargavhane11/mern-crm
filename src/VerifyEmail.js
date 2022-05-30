import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from "./global.js";
import { send } from 'emailjs-com';

export function VerifyEmail() {
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [users, setUsers] = useState();
    const name = "admin";
    const [something, setSomething] = useState("lkhbbhvdbhdvb");
    // Math.random().toString(36).replace(/[^a-z]+/g, '')

    useEffect(() => {
        fetch(`${API}/users`)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    function check(u) {
        return u.find((m) => m.email === email);
    }

    function sendEmail(code) {
        send(
            'service_7jqb24r',
            'template_t26ubhn', // template id of lead mail body
            { name, email, code }, //{sender_name,sender_email,message}
            'lyZGPaZXRsmWLyAOx'  //public key
        ).then((res) => console.log(res, res.message))
            .catch((err) => console.log(err, err.message))
    };

    return (
        <div className="signup_form_parent">
            <div className="verifyemail">
                <h4>Verify account </h4>

                <input onChange={(e) => setEmail(e.target.value)} className="addLead_input" type="email" id="Email" name="Email" placeholder="Your email.." />

                <button
                    className="btn addLead_form_save"
                    onClick={() => {
                        // (Math.random().toString(36).replace(/[^a-z]+/g, ''))

                        let result = check(users);
                        if (result) {

                            navigate(`${email}/verifytoken`)

                            fetch(`${API}/leads/edit`,
                                {
                                    method: "PUT",
                                    body: JSON.stringify(newLead),
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                })
                                .then((res) => res.json())
                                .then(() => navigate(`/${username}/leads`));
                        } else {
                            alert("Email address not registered");
                        }
                        // console.log(randomString);
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
