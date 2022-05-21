import { useNavigate } from 'react-router-dom';

export function SignIn() {
    const navigate = useNavigate();
    return (
        <div className="signup_form_parent">
            <div className="signup_form">
                <p>New User ? <span onClick={() => navigate('/signup')} className="signup_redirect">Sign up</span></p>
                <h4>Login to your account</h4>
                <input type="email" className="input" placeholder="Enter your username" />
                <input type="password" className="input" placeholder="Enter your password" />
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
