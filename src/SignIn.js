import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'



export function SignIn({ users, setUsers, lead_data }) {

    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    // const check = (array) => {
    //     for (let i = 0; i <= array.length; i++) {
    //         if (array[i].fname === username && array[i].password === password) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    // }

    const [invalid, setInvalid] = useState(false);

    const credentials = {
        color: "red",
        display: invalid ? "block" : "none",
    }

    // function wrongAnswer() {
    //     document.getElementById("invalid").style.className = "shake";
    // }


    return (
        <div className="signup_form_parent">
            <div className="signup_form">
                <p>New User ? <span onClick={() => navigate('/signup')} className="signup_redirect">Sign up</span></p>
                <h4>Login to your account</h4>
                <input onChange={(e) => setUsername(e.target.value)} type="email" className="input" placeholder="Enter your username" />
                <input onChange={(e) => setPassword(e.target.value)} type="text" className="input" placeholder="Enter your password" />
                <p style={credentials} id="invalid" className="invalid shake">Invalid credentials</p>
                <button
                    className="btn addLead_form_save"
                    onClick={() => {
                        // function check(users) {
                        //     for (let i = 0; i <= users.length; i++) {
                        //         if (users[i].fname === username && users[i].password === password) {
                        //             return true;
                        //         } else {
                        //             return false;
                        //         }
                        //     }
                        // }

                        // let result = check(users);
                        // console.log(result);
                        // if (result) {
                        //     setInvalid(false)
                        //     navigate('/home');
                        // } else {
                        //     setInvalid(true)
                        //     document.getElementById("invalid").style.className = "shake";
                        // }

                        console.log(users);
                    }}
                >Login</button>
            </div>

        </div >
    );
}
