import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react'
import { API } from "./global.js";
import { OneLead } from "./OneLead";
import { Navbar } from "./Navbar";

export function Leads() {
    const { username } = useParams();
    const navigate = useNavigate();
    const [lead_data, setlead_data] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`${API}/leads`)
            .then((res) => res.json())
            .then((data) => setlead_data(data));
    }, [lead_data])

    useEffect(() => {
        fetch(`${API}/users/${username}`)
            .then((res) => res.json())
            .then((data) => setUser(data[0]));
    }, [])



    return (
        <>
            <Navbar />
            <div className="leads_parent">
                <button
                    onClick={() => {
                        if (user.role === 'admin' || user.role === 'manager') {
                            navigate(`/${username}/leads/add_lead_request`)
                        } else {
                            alert("Not authorized to add new lead")
                        }
                    }}
                    type="button"
                    className="add_lead_btn">
                    Add new Lead
                </button>

                <div className="lead_display">
                    {lead_data.map((mv, index) => <OneLead key={index} lead={mv} id={mv._id} lead_data={lead_data} setlead_data={setlead_data} />)}
                </div>

            </div>
        </>
    );
}
