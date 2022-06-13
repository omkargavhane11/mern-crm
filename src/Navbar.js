import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function Navbar() {
    const navigate = useNavigate();
    const { username } = useParams();

    return (
        <div className="navbar">
            <div className="dropdown">
                <div className="navbar_link"
                    onClick={() => {
                        navigate(`/home`)
                    }}
                >Home</div>
                <div className="dropdown_menu">dropdown</div>
            </div>
            <div className="navbar_link" onClick={() => navigate(`/leads`)}>Leads</div>
            <div className="navbar_link" onClick={() => navigate(`/services`)}>Services</div>
            <div className="navbar_link contacts" onClick={() => navigate(`/contacts`)}>Contacts</div>
            <div className="navbar_link logout" onClick={() => {
                localStorage.clear()
                navigate('/')
            }
            }>Log Out</div>
        </div >
    );
}
