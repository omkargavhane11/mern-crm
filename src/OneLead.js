import { useNavigate, useParams } from 'react-router-dom';
import { API } from "./global.js";
import React, { useEffect, useState } from 'react';

export function OneLead({ lead }) {
    const { username } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`${API}/users/${username}`)
            .then((res) => res.json())
            .then((data) => setUser(data[0]));
    }, [])

    return (
        <div className="oneLead">
            <div className="content">
                <p className="h6_custom bold">First Name :</p>
                <p className="h6_custom">{lead.fname}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Last Name :</p>
                <p className="h6_custom">{lead.lname}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Email :</p>
                <p className="h6_custom">{lead.email}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Address :</p>
                <p className="h6_custom">{lead.address}</p>
            </div>
            <div className="content">

                <p className="h6_custom bold">Contact No :</p>
                <p className="h6_custom">{lead.contactNo}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Intrested In :</p>
                <p className="h6_custom">{lead.intrest}</p>
            </div>
            <div className="content">
                <p className="h6_custom bold">Lead Status :</p>
                <p className="h6_custom">{lead.status}</p>
            </div>

            <br />
            <div className="button_div">
                <button
                    type="button"
                    className="save_changes"
                    onClick={() => {
                        if (user.role === 'admin' || user.role === 'manager') {
                            navigate(`/${username}/leads/edit/${lead._id}`)
                        } else {
                            alert("Not authorized to edit lead")
                        }
                    }}
                >Edit</button>
                <button
                    type="button"
                    className="save_changes"
                    onClick={() => {
                        if (user.role === 'admin' || user.role === 'manager') {
                            fetch(`${API}/leads/edit/${lead._id}`, { method: "DELETE" }).then(() => navigate(`/${username}/leads`))
                        } else {
                            alert("Not authorized to delete lead")
                        }
                    }}
                >Delete</button>
            </div>

        </div>
    );
}
