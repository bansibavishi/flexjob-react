import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgetPass() {
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
                            <h4>Forget pass</h4>
                            <form action="https://themesflat.co/html/jobtex/home-01.html">
                                <div className="ip">
                                    <label>email address<span>*</span></label>
                                    <input type="text" value="" placeholder="Enter Your Email" />
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
