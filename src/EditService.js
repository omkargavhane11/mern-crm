import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import { API } from "./global.js";
import TextField from '@mui/material/TextField';

export function EditService() {

    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`${API}/services/edit/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data[0]));
    }, [])

    return (
        data ? <EditServiceForm data={data} /> : "Loading..."
    )
}


function EditServiceForm({ data }) {

    const navigate = useNavigate();
    const [fname, setFname] = useState(data.fname);
    const [lname, setLname] = useState(data.lname);
    const [email, setEmail] = useState(data.email);
    const [address, setAddress] = useState(data.address);
    const [contact, setContact] = useState(data.contactNo);
    const [intrest, setIntrest] = useState(data.intrest);
    const [status, setStatus] = useState(data.status);

    return (
        <div className="addLead_parent">
            <div className="addLead_form">
                <h3>Edit Service</h3>
                <TextField onChange={(e) => setFname(e.target.value)} value={fname} className="addLead_input" type="text" id="fname" label="firstname" placeholder="Your firstname.." />
                <TextField onChange={(e) => setLname(e.target.value)} value={lname} className="addLead_input" type="text" id="lname" label="lastname" placeholder="Your last name.." />
                <TextField onChange={(e) => setEmail(e.target.value)} value={email} className="addLead_input" type="email" id="Email" label="Email" placeholder="Your address.." />
                <TextField onChange={(e) => setAddress(e.target.value)} value={address} className="addLead_input" type="text" id="Address" label="Address" placeholder="Address" />
                <TextField onChange={(e) => setContact(e.target.value)} value={contact} className="addLead_input" type="number" id="contactNo" label="contactNo" placeholder="contactNo" />
                <TextField onChange={(e) => setIntrest(e.target.value)} value={intrest} className="addLead_input" type="text" id="intrest" label="intrest" />
                <TextField onChange={(e) => setStatus(e.target.value)} value={status} className="addLead_input" type="text" id="status" label="status" placeholder="status" />


                <button
                    onClick={() => {
                        let newLead = {
                            fname: fname,
                            lname: lname,
                            email: email,
                            address: address,
                            contactNo: contact,
                            status: status
                        };
                        fetch(`${API}/services/edit/${data._id}`,
                            {
                                method: "PUT",
                                body: JSON.stringify(newLead),
                                headers: {
                                    "Content-Type": "application/json"
                                },
                            })
                            .then((res) => res.json())
                            .then(() => navigate(`/services`));
                    }}
                    className="addLead_form_save" type="submit" value="Submit">
                    Save
                </button>
                <button
                    onClick={() => {
                        navigate(`/services`);
                    }}
                    className="addLead_form_save" type="submit" value="Cancel">
                    Cancel
                </button>
            </div>


        </div>
    );
}