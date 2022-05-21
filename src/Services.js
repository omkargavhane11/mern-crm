import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { OneService } from "./OneService";

export function Services({ service_data, setservice_data }) {

    const navigate = useNavigate();

    return (
        <div className="leads_parent">
            <button onClick={() => navigate('/services/new_service_request')} type="button" className="add_lead_btn">New service request</button>
            <div className="lead_display">
                {service_data.map((mv, index) => <OneService key={index} service={mv} service_data={service_data} setservice_data={setservice_data} />)}
            </div>
        </div>
    );
}
