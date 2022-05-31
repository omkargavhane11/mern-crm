import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function Navbar() {
    const navigate = useNavigate();
    const { username } = useParams();
    return (
        <div className="navbar">
            <img src="" alt="loading" />
            <h5 className="navbar_link home_navlink" onClick={() => navigate(`/${username}/home`)}>Home</h5>
            <h5 className="navbar_link" onClick={() => navigate(`/${username}/leads`)}>Leads</h5>
            <h5 className="navbar_link" onClick={() => navigate(`/${username}/services`)}>Services</h5>
            <h5 className="navbar_link" onClick={() => navigate(`/${username}/contacts`)}>Contacts</h5>
            <h5 className="navbar_link logout" onClick={() => navigate('/')}>Log Out</h5>
        </div>
    );
}
