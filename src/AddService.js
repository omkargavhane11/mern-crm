import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function AddService({ service_data, setservice_data }) {
    const navigate = useNavigate();
    const [fname, setFname] = useState("nothing");
    const [lname, setLname] = useState("nothing");
    const [email, setEmail] = useState("nothing");
    const [address, setAddress] = useState("nothing");
    const [contact, setContact] = useState("nothing");
    const [intrest, setIntrest] = useState("nothing");

    return (
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
                            id: Math.floor(Math.random() * 1000),
                            fname: fname,
                            lname: lname,
                            email: email,
                            address: address,
                            contactNo: contact,
                            intrest: intrest,
                            status: "new"
                        }
                        let temp = service_data;
                        setservice_data([...temp, newService])
                        // console.log(newService.id);
                        navigate('/services')
                        console.log(document.getElementById('Lead').value);
                    }}
                    className="addLead_form_save" type="submit" value="Add">Save</button>
            </div>


        </div>
    );
}
