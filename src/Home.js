import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { API } from "./global.js";
import React from 'react';
import { Navbar } from "./Navbar";

export function Home() {
    const navigate = useNavigate();
    const { username } = useParams();

    const [lead_data, setlead_data] = useState([]);
    const [service_data, setservice_data] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`${API}/login`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem('token')
            },
        }).then((data) => data.json())
            .then((data) => setDataToLocalStorage(data))
    }, [])

    function setDataToLocalStorage(data) {
        localStorage.setItem('username', data.username)
        localStorage.setItem('fname', data.fname)
        localStorage.setItem('role', data.role)

    }

    useEffect(() => {
        fetch(`${API}/leads`)
            .then((res) => res.json())
            .then((data) => setlead_data(data));
    }, [])
    useEffect(() => {
        fetch(`${API}/services`)
            .then((res) => res.json())
            .then((data) => setservice_data(data));
    }, [])


    return (
        <>
            <Navbar />
            <div className="home_parent">
                <div className="home">
                    <h2>Welcome {user.fname} !</h2>
                    {/* <h4>Your one stop solution to get services to manage operations</h4> */}
                </div>
                <div className="dashboard">
                    <div className="dashboard_content leads" onClick={() => {
                        navigate(`/${user.username}/leads`);
                    }}>
                        <p className="count">{lead_data.length}</p>
                        <p className="h6_custom">Leads</p>
                    </div>
                    <div className="dashboard_content sales" onClick={() => {
                        navigate(`/${user.username}/services`);
                    }}>
                        <p className="count">{service_data.length}</p>
                        <p className="h6_custom">Services</p>
                    </div>

                </div>
            </div>
        </>
    );
}
