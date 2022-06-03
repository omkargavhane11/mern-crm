import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import React from 'react';
import { API } from "./global.js";
import { useFormik } from 'formik';
import * as yup from "yup";
import TextField from '@mui/material/TextField';

export function Signup({ users, setUsers }) {
    const navigate = useNavigate();

    const formValidationSchema = yup.object({
        fname: yup.string().required("First name required").min(2, "Longer first name needed"),
        lname: yup.string().required("Last name required").min(2, "Longer last name needed"),
        username: yup.string().required("Username required").min(4, "set proper username"),
        email: yup.string().required("Email required").min(5, "set proper email"),
        password: yup.string().required("Password required").min(4, "Need longer password"),
        contact: yup.number().required("Contact information required").min(10, "Need proper contact number"),
    })

    const formik = useFormik({
        initialValues: { fname: "", lname: "", username: "", email: "", password: "", contact: "" },
        validationSchema: formValidationSchema,
        onSubmit: (newUser) => {
            createMovie(newUser)
        }
    });

    const createMovie = (newUser) => {
        fetch(`${API}/users`, {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((data) => data.json())
            .then(() => navigate('/'));

        console.log(newUser);
    }


    return (
        <div className="signup_form_parent">
            <form onSubmit={formik.handleSubmit} id="submit" className="signup_form">
                <h3>Sign Up form</h3>

                <TextField id="fname" name="fname" type="text" error={formik.touched.fname && formik.errors.fname} helperText={formik.touched.fname && formik.errors.fname ? formik.errors.fname : ""} value={formik.values.fname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="input" placeholder="First name *" />

                <TextField id="lname" name="lname" type="text" error={formik.touched.lname && formik.errors.lname} helperText={formik.touched.lname && formik.errors.lname ? formik.errors.lname : ""} value={formik.values.lname} onBlur={formik.handleBlur} onChange={formik.handleChange} className="input" placeholder="Last name *" />

                <TextField id="username" name="username" type="text" error={formik.touched.username && formik.errors.username} helperText={formik.touched.username && formik.errors.username ? formik.errors.username : ""} value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange} className="input" placeholder="Set username *" />

                <TextField id="email" name="email" type="email" error={formik.touched.email && formik.errors.email} helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ""} value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} className="input" placeholder="Enter your email *" />

                <TextField id="password" name="password" type="text" error={formik.touched.password && formik.errors.password} helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ""} value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} className="input" placeholder="Set password (min length 4 characters) *" />

                <TextField id="contact" name="contact" type="text" error={formik.touched.contact && formik.errors.contact} helperText={formik.touched.contact && formik.errors.contact ? formik.errors.contact : ""} value={formik.values.contact} onBlur={formik.handleBlur} onChange={formik.handleChange} className="input" placeholder="Contact number *" />

                <button
                    id="submitbutton"
                    type="submit"
                    className="btn addLead_form_save"
                    onClick={() => {
                        // let newUser = {
                        //     fname: fname,
                        //     lname: lname,
                        //     username: username,
                        //     email: email,
                        //     password: password,
                        //     contact: contact,
                        //     role: "manager"
                        // }
                        // fetch(`${API}/users`, {
                        //     method: "POST",
                        //     body: JSON.stringify(newUser),
                        //     headers: {
                        //         "Content-Type": "application/json",
                        //     },
                        // }).then((data) => data.json())
                        //     .then(() => navigate('/'));
                    }}
                >Sign Up</button>
                <p><span onClick={() => navigate('/')} className="signup_redirect">cancel</span></p>
            </form>

        </div >
    );
}
