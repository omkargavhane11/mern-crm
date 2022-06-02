import React from 'react';
import { Navbar } from "./Navbar";
import { useFormik } from 'formik';

export function Contacts() {

    const formik = useFormik({
        initialValues: {
            email: "something@gmail.com",
            password: "somepassword"
        }
    })

    return (
        <>
            <Navbar />
            {/* <div className="contactsdiv">Customer data will be displayed here</div> */}
            <form className="form" onSubmit={formik.handleSubmit}>
                <input type="email" className="input" placeholder="Enter your username" />
                <input type="password" className="input" placeholder="Enter your password" />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}
