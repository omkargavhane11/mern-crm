import React, { useState } from 'react';
import { Navbar } from "./Navbar";
import { useFormik } from 'formik';

export function Contacts() {

    const formik = useFormik({
        initialValues: {
            email: "something@gmail.com",
            password: "somepassword"
        }
    })

    const other_content = {
        // position: "relative",
        zIndex: 2,
        backgroundColor: "red",
        padding: "10px"
    }

    const [open, setOpen] = useState(false);

    return (
        <>
            <Navbar />
            <button onClick={() => setOpen(true)} className="add_lead_btn">open modal</button>
            <Modal open={open} setOpen={setOpen}>Some modal data</Modal>
            <div style={other_content} onClick={() => console.log("other content")}>Other extra content</div>
        </>
    );
}

const modal_styles = {
    position: "fixed",
    zIndex: 1000,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "10px",
    backgroundColor: "#FFFFFF",
    borderRadius: "5px",
}

const overlay_styles = {
    position: "fixed",
    zIndex: 1000,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
}

function Modal({ open, children, setOpen }) {
    if (!open) return null

    return (
        <>
            <div style={overlay_styles}></div>
            <div style={modal_styles} className="modal_parent">
                {children}
                <button onClick={() => setOpen(false)} className="add_lead_btn"> Close </button>
            </div>
        </>
    )
}