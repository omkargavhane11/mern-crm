import { useNavigate, useParams } from 'react-router-dom';
import { API } from "./global.js";
import React, { useEffect, useState } from 'react';

export function OneService({ service, count, setCount }) {

    const [role, setRole] = useState(localStorage.getItem('role'));
    const navigate = useNavigate();


    return (
        <div className="oneLead">
            <div className="content">
                <p className="h6_custom bold">First Name :</p>
                <p className="h6_custom">{service.fname}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Last Name :</p>
                <p className="h6_custom">{service.lname}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Email :</p>
                <p className="h6_custom">{service.email}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Address :</p>
                <p className="h6_custom">{service.address}</p>
            </div>
            <div className="content">

                <p className="h6_custom bold">Contact No :</p>
                <p className="h6_custom">{service.contactNo}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Intrested In :</p>
                <p className="h6_custom">{service.intrest}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Service Status :</p>
                <p className="h6_custom">{service.status}</p>
            </div>

            <br />
            <div className="button_div">
                <button type="button" className="save_changes" onClick={() => {
                    if (role === 'admin' || role === 'manager') {
                        navigate(`/services/edit/${service._id}`)
                    } else {
                        alert("Not authorized to edit service")
                    }

                }}>Edit</button>
                <button type="button" className="save_changes"
                    onClick={() => {
                        if (role === 'admin' || role === 'manager') {
                            fetch(`${API}/services/edit/${service._id}`, { method: "DELETE" }).then(() => navigate(`/services`)).then(() => setCount(count + 1))
                        } else {
                            alert("Not authorized to delete lead")
                        }
                    }}
                >Delete</button>
            </div>

        </div>
    );
}
