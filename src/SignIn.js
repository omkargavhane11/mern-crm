import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
export function SignIn({ users, serUsers }) {
    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();



    return (
        <div className="signup_form_parent">
            <div className="signup_form">
                <p>New User ? <span onClick={() => navigate('/signup')} className="signup_redirect">Sign up</span></p>
                <h4>Login to your account</h4>
                <input onChange={(e) => setUsername(e.target.value)} type="email" className="input" placeholder="Enter your username" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="input" placeholder="Enter your password" />
                <button
                    className="btn addLead_form_save"
                    onClick={() => {
                        navigate('/home');
                    }}
                >Login</button>
            </div>

        </div>
    );
}
