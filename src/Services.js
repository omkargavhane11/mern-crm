import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { API } from "./global.js";
import { OneService } from "./OneService";

export function Services() {

    const navigate = useNavigate();
    const [service_data, setservice_data] = useState([]);
    useEffect(() => {
        fetch(`${API}/services`)
            .then((res) => res.json())
            .then((data) => setservice_data(data));
    }, [])

    return (
        <div className="leads_parent">
            <button onClick={() => navigate('/services/new_service_request')} type="button" className="add_lead_btn">New service request</button>
            <div className="lead_display">
                {service_data.map((mv, index) => <OneService key={index} service={mv} service_data={service_data} setservice_data={setservice_data} />)}
            </div>
        </div>
    );
}
