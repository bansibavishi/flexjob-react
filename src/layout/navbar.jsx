import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { setUser } from '../helper/slice';
// import icon from '/images/icon.png'

export default function Navbar() {

    const [activeMenu, setActiveMenu] = useState('home')
    const send = useNavigate();

    const run = useDispatch();
    const cUser = useSelector(state => state.user)
    // console.log(cUser);

    function logout() {
        var token = localStorage.getItem('token')
        fetch(process.env.REACT_APP_API + "/logout", {
            method: "post",
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(e => e.json()).then(res => {
            if (res.status == true) {
                localStorage.removeItem('token')
                toast.success(res.message)
                send("/login")
            }
            console.log(res);
        })
            .catch(err => {
                console.log(err);
            })
    }

    function getUser() {

        var token = localStorage.getItem('token')
        fetch(process.env.REACT_APP_API + "/profile", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(e => e.json()).then(res => {
            console.log(res);
            if (res.status.message === 'Unauthorized: Invalid or expired token') {
                run(setUser(null))
                localStorage.setItem('token', null)
            }
            run(setUser(res.userData))
        }).catch(err => {
            // localStorage.setItem('token', null)
            console.log(err);
        })
    }

    useEffect(() => {
        getUser()
    }, [])

    return (

        <header id="header" className="header header-default style-absolute header-fixed is-fixed is-small">
            <div className="tf-container ct2">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sticky-area-wrap">
                            <div className="header-ct-left">
                                <div id="logo" className="logo">
                                    <Link to="/">
                                        <img className="site-logo" id="trans-logo" src="/images/logo.png" alt="Image" />
                                    </Link>
                                </div>

                            </div>
                            <div className="header-ct-center">
                                <div className="nav-wrap">
                                    <nav id="main-nav" className="main-nav">
                                        <ul id="menu-primary-menu" className="menu">
                                            <li className={"menu-item" + (activeMenu == "home" ? " current-item" : "")} onClick={e => setActiveMenu("home")}>
                                                <Link to="/">Home </Link>
                                            </li>
                                            <li className={"menu-item" + (activeMenu == "job" ? " current-item" : "")} onClick={e => setActiveMenu("job")} >
                                                <Link to="/job">Job </Link>
                                            </li>
                                            <li className={"menu-item" + (activeMenu == "employers" ? " current-item" : "")} onClick={e => setActiveMenu("employers")}>
                                                <Link to="/employers-list">Employers</Link>
                                            </li>

                                            <li className={"menu-item" + (activeMenu == "" ? " current-item" : "")} onClick={e => setActiveMenu("about-us")}>
                                                <Link to="/about-us">About</Link>
                                            </li>
                                            <li className={"menu-item" + (activeMenu == "" ? " current-item" : "")} onClick={e => setActiveMenu("contact-us")}>
                                                <Link to="/contact-us">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="header-ct-right">
                                <div className="header-customize-item help">
                                    {/* <a href="term-of-use.html"><span className="icon-help-circle"></span></a> */}
                                </div>

                                {cUser == null ? '' :
                                    <div className="header-customize-item account">
                                        <img src={cUser?.link} alt="" />
                                        <div className="name">
                                            Candidates<span className="icon-keyboard_arrow_down"></span>
                                        </div>
                                        <div className="sub-account">
                                            <div className="sub-account-item">
                                                <a href="dashboard/candidates-dashboard.html"><span className="icon-dashboard"></span>Dashboard</a>
                                            </div>
                                            <div className="sub-account-item">
                                                <Link to="/profile"><span className="icon-profile"></span> Profile</Link>
                                            </div>
                                            <div className="sub-account-item">
                                                <Link to="/job/create"><span className="icon-plus"></span>Create Job</Link>
                                            </div>
                                            <div className="sub-account-item">
                                                <a href="dashboard/candidates-resumes.html"><span className="icon-resumes"></span> Resumes</a>
                                            </div>
                                            <div className="sub-account-item">
                                                <a href="dashboard/candidates-my-applied.html"><span className="icon-my-apply"></span> My Applied</a>
                                            </div>
                                            <div className="sub-account-item">
                                                <Link to={"/savejob-list"}><span className="icon-work"></span> Saved Jobs</Link>
                                            </div>
                                            <div className="sub-account-item">
                                                <a href="dashboard/candidates-messages.html"><span className="icon-chat"></span> Messages</a>
                                            </div>

                                            <div className="sub-account-item">
                                                <a><span className="icon-change-passwords"></span><Link to={"/forget-pass"}>Change Passwords</Link></a>
                                            </div>
                                            <div className="sub-account-item">
                                                <a href="#" onClick={logout}><span className="icon-log-out"></span> Log Out</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {/* <div className="header-customize-item button">
                                    <a href="dashboard/candidates-resumes.html">Upload Resume</a>
                                </div> */}
                            </div>
                            <div className="nav-filter">
                                <div className="nav-mobile"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
