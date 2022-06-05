import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { API } from "./global.js";
import { OneService } from "./OneService";
import React from 'react';
import { Navbar } from "./Navbar";

export function Services() {
    const { username } = useParams();
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    const [service_data, setservice_data] = useState([]);
    useEffect(() => {
        fetch(`${API}/services`)
            .then((res) => res.json())
            .then((data) => setservice_data(data));
    }, [count])

    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`${API}/users/${username}`)
            .then((res) => res.json())
            .then((data) => setUser(data[0]));
    }, [])

    return (
        <>
            <Navbar />
            <div className="leads_parent">
                <button onClick={() => {
                    if (user.role === 'admin' || user.role === 'manager') {
                        navigate(`/${username}/services/new_service_request`)
                    } else {
                        alert("Not authorized to add new service request")
                    }
                }
                }
                    type="button"
                    className="add_lead_btn">
                    New service request
                </button>
                <div className="lead_display">
                    {service_data.map((mv, index) => <OneService key={index} service={mv} service_data={service_data} setservice_data={setservice_data} count={count} setCount={setCount} />)}
                </div>
            </div>
        </>
    );
}
