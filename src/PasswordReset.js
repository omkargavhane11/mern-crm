import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function PasswordReset() {

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
                <p style={reset} id="reset" className="invalid shake">Password Reset Sucessfull !  </p>
                <button

                    className="btn addLead_form_save"
                    onClick={() => {
                        if (password.length > 0 && confirmPassword.length > 0 && password === confirmPassword) {
                            setInvalid(false);
                            setResetpass(true);
                            console.log("Matched");
                        } else {
                            setInvalid(true);
                            console.log("password mismatch");
                        }
                        // console.log(password.length);
                    }}
                >Save</button>
                <button
                    style={navigatesignin}
                    className="btn addLead_form_save"
                    onClick={() => {
                        navigate('/');
                    }}
                >Sign in to continue</button>
            </div>

        </div>
    );
}
