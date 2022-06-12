import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function Navbar() {
    const navigate = useNavigate();
    const { username } = useParams();
    return (
        <div className="navbar">
            <h5 className="navbar_link home_navlink" onClick={() => navigate(`/home`)}>Home</h5>
            <h5 className="navbar_link" onClick={() => navigate(`/leads`)}>Leads</h5>
            <h5 className="navbar_link" onClick={() => navigate(`/services`)}>Services</h5>
            <h5 className="navbar_link contacts" onClick={() => navigate(`/contacts`)}>Contacts</h5>
            <h5 className="navbar_link logout" onClick={() => {
                localStorage.clear()
                navigate('/')
            }
            }>Log Out</h5>
        </div>
    );
}
