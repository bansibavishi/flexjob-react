import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Login() {

    const send = useNavigate();

    const [showPassword, setShowPassword] = useState(false);


    const [user, setUser] = useState({
        email: "",
        password: ""
    })




    function login(e) {
        e.preventDefault();


        // axios.post(process.env.REACT_APP_API + "/login",user)
        // .then(res => {
        // 	console.log(res.data.userData);
        // }).catch(e => {
        // 	console.log(e)
        // })

        fetch(process.env.REACT_APP_API + "/login", {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            }
        }).then(e => e.json()).then(res => {
            console.log(res);
            if (res.status == true) {
                toast.success(res.message)
                localStorage.setItem('token', res.token)
                send("/profile")
            } else {
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
                                        <li><a href="#">Login</a></li>
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
                            <h4>Log In</h4>

                            <form onSubmit={login}>
                                <div className="ip">
                                    <label>Username or email address<span>*</span></label>
                                    <input type="text" onChange={e => setUser({ ...user, email: e.target.value })} value={user.email} placeholder="Enter Your Email" />
                                </div>
                                <div className="ip">
                                    <label>Password<span>*</span></label>
                                    <div className="inputs-group auth-pass-inputgroup">
                                        <input  className="input-form password-input" type={showPassword ? "text" : "password"} onChange={e => setUser({ ...user, password: e.target.value })} value={user.password} placeholder="Password"
                                            required="" />
                                        <a className="icon-eye-off password-addon" id="password-addon" onClick={e => setShowPassword(!showPassword )} ></a>
                                    </div>
                                </div>
                                <div className="group-ant-choice">
                                    <div className="sub-ip"><input type="checkbox" />Remember me</div>
                                    <Link to="/forget-pass" className="forgot">Forgot password?</Link>
                                </div>

                                <button type="submit">Login</button>
                                <div className="sign-up">Not registered yet? <Link to={"/register"} >Sign Up</Link></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
