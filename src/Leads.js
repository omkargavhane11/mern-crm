import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { OneLead } from "./OneLead";

export function Leads({ lead, lead_data, setlead_data }) {

    const navigate = useNavigate();

    return (
        <div className="leads_parent">
            <button onClick={() => navigate('/leads/add_lead_request')} type="button" className="add_lead_btn">Add new Lead</button>
            <div className="lead_display">
                {lead_data.map((mv, index) => <OneLead key={index} lead={mv} lead_data={lead_data} setlead_data={setlead_data} />)}
            </div>
        </div>
    );
}
