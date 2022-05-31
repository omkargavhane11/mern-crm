import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { API } from "./global.js";
import React from 'react';
// import { send } from 'emailjs-com';
import { Navbar } from "./Navbar";

export function AddService() {

    const navigate = useNavigate();
    const { username } = useParams();
    const [fname, setFname] = useState("nothing");
    const [lname, setLname] = useState("nothing");
    const [email, setEmail] = useState("nothing");
    const [address, setAddress] = useState("nothing");
    const [contact, setContact] = useState("nothing");
    const [intrest, setIntrest] = useState("nothing");

    // function sendEmail(a) {
    //     send(
    //         'service_7jqb24r',
    //         'template_o2rtfcj', // template id of service request mail body
    //         { fname, email, a }, //{sender_name,sender_email,message}
    //         'lyZGPaZXRsmWLyAOx'
    //     ).then((res) => console.log(res, res.message))
    //         .catch((err) => console.log(err, err.message))
    // };

    return (
        <>
            <Navbar />
            <div className="addLead_parent">

                <div className="addLead_form">
                    <h3>  New Service Request </h3>
                    <label className="addLead_label" for="fname">First Name</label>
                    <input onChange={(e) => setFname(e.target.value)} className="addLead_input" type="text" id="fname" name="firstname" placeholder="Your firstname.." />

                    <label className="addLead_label" for="lname">Last Name</label>
                    <input onChange={(e) => setLname(e.target.value)} className="addLead_input" type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label className="addLead_label" for="Email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className="addLead_input" type="email" id="Email" name="Email" placeholder="Your email.." />

                    <label className="addLead_label" for="Address">Address</label>
                    <input onChange={(e) => setAddress(e.target.value)} className="addLead_input" type="text" id="Address" name="Address" placeholder="Address" />

                    <label className="addLead_label" for="contactNo">Contact No</label>
                    <input onChange={(e) => setContact(e.target.value)} className="addLead_input" type="number" id="contactNo" name="contactNo" placeholder="contactNo" />

                    <label className="addLead_label" for="intrest">Intrested in </label>
                    <input onChange={(e) => setIntrest(e.target.value)} className="addLead_input" type="text" id="intrest" name="intrest" placeholder="intrest" />



                    <button
                        onClick={() => {
                            let newService = {
                                fname: fname,
                                lname: lname,
                                email: email,
                                address: address,
                                contactNo: contact,
                                intrest: intrest,
                                status: "new"
                            }
                            fetch(`${API}/services`, {
                                method: "POST",
                                body: JSON.stringify(newService),
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            }).then((data) => data.json())
                                .then(() => navigate(`/${username}/services`))

                            // sendEmail(newService)
                        }}
                        className="addLead_form_save" type="submit" value="Add">Save</button>
                </div>


            </div>
        </>
    );
}
