import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import { API } from "./global.js";

export function EditLead({ lead_data, setlead_data }) {
    const { id } = useParams();

    const [data, setData] = useState();
    useEffect(() => {
        fetch(`${API}/leads/edit/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data[0]));
    }, [])


    return (
        data ? <EditLeadForm data={data} /> : "Loading..."
    )

}


function EditLeadForm({ data }) {

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
                <h3>Edit Lead </h3>
                <label className="addLead_label" for="fname">First Name</label>
                <input onChange={(e) => setFname(e.target.value)} value={fname} className="addLead_input" type="text" id="fname" name="firstname" placeholder="Your firstname.." />
                <label className="addLead_label" for="lname">Last Name</label>
                <input onChange={(e) => setLname(e.target.value)} value={lname} className="addLead_input" type="text" id="lname" name="lastname" placeholder="Your last name.." />
                <label className="addLead_label" for="Email">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className="addLead_input" type="email" id="Email" name="Email" placeholder="Your address.." />
                <label className="addLead_label" for="Address">Address</label>
                <input onChange={(e) => setAddress(e.target.value)} value={address} className="addLead_input" type="text" id="Address" name="Address" placeholder="Address" />
                <label className="addLead_label" for="contactNo">Contact No</label>
                <input onChange={(e) => setContact(e.target.value)} value={contact} className="addLead_input" type="number" id="contactNo" name="contactNo" placeholder="contactNo" />
                <label className="addLead_label" for="intrest">Intrested in </label>
                <input onChange={(e) => setIntrest(e.target.value)} value={intrest} className="addLead_input" type="text" id="intrest" name="intrest" />
                <label className="addLead_label" for="status">Lead Status</label>
                <input onChange={(e) => setStatus(e.target.value)} value={status} className="addLead_input" type="text" id="status" name="status" placeholder="status" />


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
                        fetch(`${API}/leads/edit/${data._id}`,
                            {
                                method: "PUT",
                                body: JSON.stringify(newLead),
                                headers: {
                                    "Content-Type": "application/json"
                                },
                            })
                            .then((res) => res.json())
                            .then(() => navigate(`/leads`));

                    }}
                    className="addLead_form_save" type="submit" value="Submit">
                    Save
                </button>
            </div>


        </div>
    );
}