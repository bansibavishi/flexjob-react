import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function Register() {


    const send = useNavigate();

    const [user, setUser] = useState({
        type: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: "1234567890",
        expertise: ["communication skills", "DSA"],
        title: "qwertyuiop",
        description: "qwtdycvbhdhhd",
        workHistory: ["fdfdfdf", "fdfdffdff"],
        location: "fdfgdf",
        savedJob: ["sdd", "sff"],
        rate: "8"
    })
    const [showPassword, setShowPassword] = useState(false);

    function register(e) {
        e.preventDefault();

        // axios.post()
        if (user.type === '') {
            return toast.error('Please select account type.')
        }


        fetch(process.env.REACT_APP_API + "/register", {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            }
        }).then(e => e.json()).then(res => {
            console.log(res);
            if (res.status === true) {
                toast.success(res.message)
                send("/login")
            } else {
                toast.error(res.message)
            }
        })
            .catch(err => {
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
                                        <li><a href="#">Create Account</a></li>
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
                        <div className="wd-form-login tf-tab">
                            <h4>Create a free account</h4>
                            <ul className="menu-tab">
                                <li className={"ct-tab" + (user.type === "candidate" ? ' active' : '')} onClick={e => setUser({ ...user, type: "candidate" })}>Employee</li>
                                <li className={"ct-tab" + (user.type === "employer" ? ' active' : '')} onClick={e => setUser({ ...user, type: "employer" })}>Employer</li>
                            </ul>
                            <div className="content-tab">
                                <div className="inner">
                                    <form onSubmit={register} >
                                        <div className="ip">
                                            <label >First Name<span>*</span></label>
                                            <input type="text" onChange={e => setUser({ ...user, firstName: e.target.value })} value={user.firstName} />
                                        </div>
                                        <div className="ip">
                                            <label >Last Name<span>*</span></label>
                                            <input type="text" onChange={e => setUser({ ...user, lastName: e.target.value })} value={user.lastName} />
                                        </div>
                                        <div className="ip">
                                            <label >Username or email address<span>*</span></label>
                                            <input type="text" onChange={e => setUser({ ...user, email: e.target.value })} value={user.email} />
                                        </div>
                                        {/* <div className="ip">
                                            <label >Password<span>*</span></label>
                                            <div className="inputs-group auth-pass-inputgroup">
                                                <input type="password" className="input-form password-input" onChange={e => setUser({ ...user, password: e.target.value })} value={user.password} placeholder="Password" required="" />
                                                <a className="icon-eye-off password-addon"></a>
                                            </div>
                                        </div> */}
                                        <div className="ip">
                                            <label>Password<span>*</span></label>
                                            <div className="inputs-group auth-pass-inputgroup">
                                                <input className="input-form password-input" type={showPassword ? "text" : "password"} onChange={e => setUser({ ...user, password: e.target.value })} value={user.password} placeholder="Password"
                                                    required="" />

                                                <a className={"password-addon " + (showPassword ? "icon-eye" : "icon-eye-off")} id="password-addon" onClick={e => setShowPassword(!showPassword)} >

                                                </a>
                                            </div>
                                        </div>
                                        <div className="group-ant-choice st">
                                            <div className="sub-ip"><input type="checkbox" />I agree to the <a href="#">Terms of User</a></div>
                                        </div>
                                        <button type="submit">Register</button>
                                        <div className="sign-up">Already have an account ?<Link to={"/login"}>Login Here</Link></div>
                                    </form>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
