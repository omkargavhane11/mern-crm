import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

export function EditService({ setservice_data, service_data }) {

    const navigate = useNavigate();
    const [fname, setFname] = useState("nothing");
    const [lname, setLname] = useState("nothing");
    const [email, setEmail] = useState("nothing");
    const [address, setAddress] = useState("nothing");
    const [contact, setContact] = useState("nothing");
    const [intrest, setIntrest] = useState("nothing");
    const [status, setStatus] = useState("New");


    return (
        <div className="addLead_parent">
            <div className="addLead_form">
                <h3>Edit Service</h3>
                <label className="addLead_label" for="fname">First Name</label>
                <input onChange={(e) => setFname(e.target.value)} className="addLead_input" type="text" id="fname" name="firstname" placeholder="Your firstname.." />
                <label className="addLead_label" for="lname">Last Name</label>
                <input onChange={(e) => setLname(e.target.value)} className="addLead_input" type="text" id="lname" name="lastname" placeholder="Your last name.." />
                <label className="addLead_label" for="Email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} className="addLead_input" type="email" id="Email" name="Email" placeholder="Your address.." />
                <label className="addLead_label" for="Address">Address</label>
                <input onChange={(e) => setAddress(e.target.value)} className="addLead_input" type="text" id="Address" name="Address" placeholder="Address" />
                <label className="addLead_label" for="contactNo">Last Name</label>
                <input onChange={(e) => setContact(e.target.value)} className="addLead_input" type="text" id="contactNo" name="contactNo" placeholder="contactNo" />
                <label className="addLead_label" for="intrest">Intrested in </label>
                <input onChange={(e) => setIntrest(e.target.value)} value={intrest} className="addLead_input" type="text" id="intrest" name="intrest" placeholder="intrest" />
                <label className="addLead_label" for="status">Service Status</label>
                <input onChange={(e) => setIntrest(e.target.value)} value={status} className="addLead_input" type="text" id="status" name="status" placeholder="status" />


                <button
                    onClick={() => {
                        let newLead = {
                            id: Math.floor(Math.random() * 1000),
                            fname: fname,
                            lname: lname,
                            email: email,
                            password: "password1",
                            username: "username1",
                            address: address,
                            contactNo: contact,
                            status: status
                        };
                        let temp = service_data;
                        setservice_data([...temp, newLead]);
                        console.log(newLead.id);
                        navigate('/services');
                    }}
                    className="addLead_form_save" type="submit" value="Submit">Save</button>
            </div>


        </div>
    );
}
