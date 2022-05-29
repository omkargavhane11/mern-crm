import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { API } from "./global.js";
import { OneLead } from "./OneLead";
import React from 'react';

export function Leads() {

    const navigate = useNavigate();
    const [lead_data, setlead_data] = useState([]);

    useEffect(() => {
        fetch(`${API}/leads`)
            .then((res) => res.json())
            .then((data) => setlead_data(data));
    }, [])

    return (
        <div className="leads_parent">
            <button onClick={() => navigate('/leads/add_lead_request')} type="button" className="add_lead_btn">Add new Lead</button>
            <div className="lead_display">
                {lead_data.map((mv, index) => <OneLead key={index} lead={mv} id={mv._id} lead_data={lead_data} setlead_data={setlead_data} />)}
            </div>
        </div>
    );
}
