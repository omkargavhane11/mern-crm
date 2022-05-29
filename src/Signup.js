import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'


export function Signup({ users, setUsers }) {
    const navigate = useNavigate();

    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [contact, setContact] = useState();

    return (
        <div className="signup_form_parent">
            <div className="signup_form">
                <h4>Sign Up</h4>
                <input required type="text" onChange={(e) => setFname(e.target.value)} className="input" placeholder="First name" />
                <input required type="text" onChange={(e) => setLname(e.target.value)} className="input" placeholder="Last name" />
                <input required type="text" onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Set username" />
                <input required type="email" onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Enter your email" />
                <input required type="text" onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Enter your password" />
                <input required type="number" onChange={(e) => setContact(e.target.value)} className="input" placeholder="Contact number" />
                <button
                    className="btn addLead_form_save"
                    onClick={() => {
                        let newUser = {
                            fname: fname,
                            lname: lname,
                            username: username,
                            email: email,
                            password: password,
                            contact: contact,
                            role: "admin"
                        }
                        let temp = users;
                        setUsers([...temp, newUser])
                        // console.log(newUser);
                        navigate('/')
                    }}
                >Sign Up</button>
                <p><span onClick={() => navigate('/')} className="signup_redirect">Sign In</span></p>
            </div>

        </div >
    );
}
