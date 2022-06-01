import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { API } from "./global.js";

export function PasswordReset() {

    const navigate = useNavigate();
    const [passUpdate, setPassUpdate] = useState(false);

    return (
        passUpdate ? <PassUpdateSuccess setPassUpdate={setPassUpdate} /> : <PasswordResetForm />
    );
}


function PasswordResetForm({ setPassUpdate }) {

    const { username } = useParams();
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [invalid, setInvalid] = useState(false);
    const [resetpass, setResetpass] = useState(false);

    const credentials = {
        color: "red",
        display: invalid ? "block" : "none",
    };
    const reset = {
        color: "green",
        display: resetpass ? "block" : "none",
    };
    const navigatesignin = {
        display: resetpass ? "block" : "none",
        fontSize: "16px"
    };

    return (
        <div className="signup_form_parent">
            <div className="verifyemail">
                <h4>New Password</h4>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="input" placeholder="password" />
                <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="input" placeholder="confirm password" />
                <p style={credentials} id="invalid" className="invalid shake">Password not matched  </p>

                <button

                    className="btn addLead_form_save"
                    onClick={() => {
                        if (password.length > 0 && confirmPassword.length > 0 && password === confirmPassword) {

                            setInvalid(false)
                            setResetpass(true)
                            let newPassword = { password: password };

                            fetch(`${API}/users/${username}`,
                                {
                                    method: "PUT",
                                    body: JSON.stringify(newPassword),
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                })
                                .then((res) => res.json())
                                .then(() => navigate(`/`));
                        } else {
                            setInvalid(true);
                            setResetpass(false)
                            console.log("password mismatch");
                        }
                    }}
                >Save</button>

            </div>

        </div>
    )
}


function PassUpdateSuccess() {

    const navigate = useNavigate();
    const reset = {
        color: "green",
        display: "block"
    };
    const btnStyle = {
        color: "white",
        paddingLeft: "10px"
    }
    return (
        <div className="signup_form_parent">
            <div className="passResetDiv">
                <h3 style={reset} id="reset" className="invalid">Password updated successfully !</h3>
                {/* <p style={reset} id="reset" className="invalid shake">Password Reset Sucessfull !  </p> */}
                <button
                    style={btnStyle}
                    className="btn addLead_form_save"
                    onClick={() => {
                        navigate('/');
                    }}
                >Sign in to continue</button>
            </div>
        </div>
    )
}