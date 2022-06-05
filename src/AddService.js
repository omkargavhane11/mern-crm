import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { API } from "./global.js";
import React from 'react';
// import { send } from 'emailjs-com';
import { Navbar } from "./Navbar";
import TextField from '@mui/material/TextField';
import * as yup from "yup";
import { useFormik } from 'formik';

export function AddService() {

    const navigate = useNavigate();
    const { username } = useParams();

    const formValidationSchema = yup.object({
        fname: yup.string().required("First name required").min(2, "Longer first name needed"),
        lname: yup.string().required("Last name required").min(2, "Longer last name needed"),
        email: yup.string().required("Email required").min(5, "set proper email"),
        address: yup.string().required("address required").min(5, "set proper address"),
        contact: yup.number().required("Contact information required").min(10, "Need proper contact number"),
        intrest: yup.string().required("intrest required").min(4, "Need longer intrest"),
        status: yup.string().required("Username required").min(3, "status invalid"),
    })

    const formik = useFormik({
        initialValues: { fname: "", lname: "", status: "", email: "", password: "", contact: "", address: "", intrest: "" },
        validationSchema: formValidationSchema,
        onSubmit: (newService) => {
            createService(newService)
        }
    });

    function createService(newService) {
        fetch(`${API}/services`, {
            method: "POST",
            body: JSON.stringify(newService),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((data) => data.json())
            .then(() => navigate(`/${username}/services`))
    }

    return (
        <>
            <Navbar />
            <div className="addLead_parent">
                <form onSubmit={formik.handleSubmit} className="addLead_form">
                    <h3>  New Service Request </h3>
                    <TextField id="fname" name="fname" type="text" error={formik.touched.fname && formik.errors.fname} helperText={formik.touched.fname && formik.errors.fname ? formik.errors.fname : ""} value={formik.values.fname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="input" placeholder="First name *" />
                    <TextField id="lname" name="lname" type="text" error={formik.touched.lname && formik.errors.lname} helperText={formik.touched.lname && formik.errors.lname ? formik.errors.lname : ""} value={formik.values.lname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="input" placeholder="Last name *" />
                    <TextField id="email" name="email" type="email" error={formik.touched.email && formik.errors.email} helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ""} value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="input" placeholder="Enter your email *" />
                    <TextField id="address" name="address" type="text" error={formik.touched.address && formik.errors.address} helperText={formik.touched.address && formik.errors.address ? formik.errors.address : ""} value={formik.values.address} onBlur={formik.handleBlur} onChange={formik.handleChange} className="input" placeholder="Set address (min length 4 characters) *" />
                    <TextField id="contact" name="contact" type="text" error={formik.touched.contact && formik.errors.contact} helperText={formik.touched.contact && formik.errors.contact ? formik.errors.contact : ""} value={formik.values.contact} onBlur={formik.handleBlur} onChange={formik.handleChange} className="input" placeholder="Contact number *" />
                    <TextField id="intrest" name="intrest" type="text" error={formik.touched.intrest && formik.errors.intrest} helperText={formik.touched.intrest && formik.errors.intrest ? formik.errors.intrest : ""} value={formik.values.intrest} onBlur={formik.handleBlur} onChange={formik.handleChange} className="input" placeholder="Set intrest (min length 4 characters) *" />
                    <TextField id="status" name="status" type="text" error={formik.touched.status && formik.errors.status} helperText={formik.touched.status && formik.errors.status ? formik.errors.status : ""} value={formik.values.status} onBlur={formik.handleBlur} onChange={formik.handleChange} className="input" placeholder="Set status *" />
                    <button className="addLead_form_save" type="submit" value="Add">Add</button>
                </form>
            </div>
        </>
    );
}
