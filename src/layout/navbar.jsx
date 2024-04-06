import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setUser } from '../helper/slice';
// import icon from '/images/icon.png'
import { useLocation } from 'react-router-dom';
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';

export default function Navbar() {

    const [activeMenu, setActiveMenu] = useState('home')
    const send = useNavigate();

    const run = useDispatch();
    const cUser = useSelector(state => state.user)



    const [notification, setNotification] = useState([])
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

    function getnotification() {
        fetch(process.env.REACT_APP_API + "/notification-list?" + cUser?._id, {

        }).then(e => e.json()).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getUser()
        getnotification()
    }, [])

    const location = useLocation();

    console.log(location);

    function headClass() {
        const path = location.pathname

        if (
            path.startsWith("/job/") || path.startsWith("/employers/")
        ) {
            return "header header-default"
        } else {
            return "header header-default style-absolute header-fixed is-fixed is-small"
        }
    }

    return (

        <header id="header" className={headClass()}>

            <div className='d-none'>
                {cUser && <SendbirdProvider
                    appId={process.env.REACT_APP_SBID}
                    userId={cUser._id}
                    profileUrl={cUser.link}
                    nickname={cUser?.type == 'employer' ? cUser.title : cUser.firstName + " " + cUser.lastName}
                />}

            </div>

            <div className="tf-container ct2">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sticky-area-wrap">
                            <div className="header-ct-left">
                                <div id="logo" className="logo">
                                    <Link to="/">
                                        <img className="site-logo" id="trans-logo" src="/images/logo2.png" alt="Image" />
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
                                            <li className={"menu-item" + (activeMenu == "candidate" ? " current-item" : "")} onClick={e => setActiveMenu("candidate")}>
                                                <Link to="/candidate-list">Candidate</Link>
                                            </li>

                                            <li className={"menu-item" + (activeMenu == "about-us" ? " current-item" : "")} onClick={e => setActiveMenu("about-us")}>
                                                <Link to="/about-us">About</Link>
                                            </li>
                                            <li className={"menu-item" + (activeMenu == "contact-us" ? " current-item" : "")} onClick={e => setActiveMenu("contact-us")}>
                                                <Link to="/contact-us">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="header-ct-right">
                                <div className="header-customize-item bell">
                                    <span className="icon-bell"></span>
                                    <div className="sub-notification">
                                        <div className="sub-notification-heading">
                                            <div className="sub-notification-title">Notification</div>
                                            <span>5 New</span>
                                        </div>
                                        <div className="sub-notification-content">
                                            <div className="sub-notification-item icon-plus">
                                                <div className="time">Last day</div>
                                                <div className="content">
                                                    Your submit job <span className="name">Graphic Design</span> is
                                                    <span className="status">Success</span>
                                                </div>
                                            </div>
                                            <div className="sub-notification-item icon-plus">
                                                <div className="time">5 Day ago</div>
                                                <div className="content">
                                                    A new application is submitted on your job
                                                    <span className="name">Graphic Design</span> by
                                                    <span className="name">Maverick Nguyen</span>
                                                </div>
                                            </div>
                                            <div className="sub-notification-item icon-plus">
                                                <div className="time">5 Day ago</div>
                                                <div className="content">
                                                    A new application is submitted on your job
                                                    <span className="name">Graphic Design</span> by
                                                    <span className="name">Maverick Nguyen</span>
                                                </div>
                                            </div>
                                            <div className="sub-notification-item icon-plus">
                                                <div className="time">Last day</div>
                                                <div className="content">
                                                    Your submit job <span className="name">Graphic Design</span> is
                                                    <span className="status">Success</span>
                                                </div>
                                            </div>
                                            <div className="sub-notification-item icon-plus">
                                                <div className="time">5 Day ago</div>
                                                <div className="content">
                                                    A new application is submitted on your job
                                                    <span className="name">Graphic Design</span> by
                                                    <span className="name">Maverick Nguyen</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sub-notification-button">
                                            <a href="#">Read All</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-customize-item help">
                                    {/* <a href="term-of-use.html"><span className="icon-help-circle"></span></a> */}
                                </div>

                                {cUser == null ? '' :
                                    <div className="header-customize-item account">
                                        <img src={cUser?.link} alt="" />
                                        <div className="name">
                                            {cUser?.firstName}
                                        </div>
                                        <div className="sub-account">
                                            {/* <div className="sub-account-item">
                                                <a href="dashboard/candidates-dashboard.html"><span className="icon-dashboard"></span>Dashboard</a>
                                            </div> */}
                                            <div className="sub-account-item">
                                                <Link to="/profile"><span className="icon-profile"></span> Profile</Link>
                                            </div>
                                            {
                                                cUser.type == "employer" ?
                                                    <div className="sub-account-item">
                                                        <Link to="/job/create"><span className="icon-plus"></span>Create Job</Link>
                                                    </div> : ""
                                            }
                                            {/* <div className="sub-account-item">
                                                <a href="dashboard/candidates-resumes.html"><span className="icon-resumes"></span> Resumes</a>
                                            </div> */}
                                            <div className="sub-account-item">
                                                <Link to={"/myjob"}><span className="icon-my-apply"></span> My Applied</Link>
                                            </div>
                                            <div className="sub-account-item">
                                                <Link to={"/savejob-list"}><span className="icon-work"></span> Saved Jobs</Link>
                                            </div>
                                            <div className="sub-account-item">
                                                <Link to={"/message"}><span className="icon-chat"></span> Messages</Link>
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
                                    <Link to={"/resume"}>Upload Resume</Link>
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
