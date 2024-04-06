import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function ForgetPass() {


    const[forgetPass,setForgetPass] = useState({ email:"" })

    function forgetPassword(e) {
        e.preventDefault();
        fetch(process.env.REACT_APP_API + "/forget-pass" , {
            method: "post",
            body:JSON.stringify(forgetPass),
            headers: {
                "content-type": "application/json",

            }
        }).then(e => e.json()).then(res => {
            console.log(res);
            if(res.status == true){

                toast.success(res.message)
            }
            else{
                toast.error(res.message)
            }
        }).catch(err => {
            console.log(err);
        })

    }

    return (
        <>
            <section className="bg-f5">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title">
                                <div className="widget-menu-link">
                                    <ul>
                                        <li><a href="home-01.html">Home</a></li>
                                        <li><a href="#">Forget Password</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="account-section">
                <div className="tf-container">
                    <div className="row">
                        <div className="wd-form-login">
                            <h4>Forgot Password</h4>
                            <form onSubmit={forgetPassword}>
                                <div className="ip">
                                    <label>Email address<span>*</span></label>
                                    <input type="text"   placeholder="Enter Your Email" onChange={e => setForgetPass({ ...forgetPass, email: e.target.value })} value={forgetPass.email} />
                                </div>

                                <button type="submit">Get Link</button>
                                <div className="sign-up">Not registered yet? <Link to="/register">Sign Up</Link> </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
