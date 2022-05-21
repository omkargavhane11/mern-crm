import { useNavigate } from 'react-router-dom';

export function Signup() {
    const navigate = useNavigate();
    return (
        <div className="signup_form_parent">
            <div className="signup_form">
                <h4>Sign Up</h4>
                <input type="text" className="input" placeholder="first name" />
                <input type="text" className="input" placeholder="last name" />
                <input type="text" className="input" placeholder="set username" />
                <input type="email" className="input" placeholder="Enter your email" />
                <input type="password" className="input" placeholder="Enter your password" />
                <input type="number" className="input btn " placeholder="contact number" />
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
