import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [activeMenu, setActiveMenu] = useState('home')

    return (
        <header id="header" className="header header-default style-absolute header-fixed is-fixed is-small">
            <div className="tf-container ct2">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sticky-area-wrap">
                            <div className="header-ct-left">
                                <div id="logo" className="logo">
                                    <Link to="/">
                                        <img className="site-logo" id="trans-logo" src="/images/logo-white.png" alt="Image" />
                                    </Link>
                                </div>
                                {/* <div className="categories">
                                    <a href="#"><span className="icon-grid"></span>Categories</a>
                                    <div className="sub-categorie">
                                        <ul className="pop-up">
                                            <li>
                                                <a href="#"><span className="icon-categorie-1"></span>Design & Creative</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
                                                        <ul>
                                                            <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                            <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                            <li><a href="find-jobs-list.html">Development & IT</a></li>
                                                            <li><a href="find-jobs-list.html">Music & Audio</a></li>
                                                            <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                            <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                            <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="menu right">
                                                        <h6>Top Skills</h6>
                                                        <ul>
                                                            <li><a href="jobs-single.html">Adobe Photoshop</a></li>
                                                            <li><a href="jobs-single.html">adobe XD</a></li>
                                                            <li><a href="jobs-single.html">Android Developer</a></li>
                                                            <li><a href="jobs-single.html">Figma</a></li>
                                                            <li><a href="jobs-single.html">CSS, Html</a></li>
                                                            <li><a href="jobs-single.html">BA</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#"><span className="icon-categorie-8"></span>Digital Marketing</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
                                                        <ul>
                                                            <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                            <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                            <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                            <li><a href="find-jobs-list.html">Development & IT</a></li>
                                                            <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="menu right">
                                                        <h6>Top Skills</h6>
                                                        <ul>
                                                            <li><a href="jobs-single.html">adobe XD</a></li>
                                                            <li><a href="jobs-single.html">Figma</a></li>
                                                            <li><a href="jobs-single.html">BA</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#"><span className="icon-categorie-2"></span>Development & IT</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
                                                        <ul>
                                                            <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                            <li><a href="find-jobs-list.html">Development & IT</a></li>
                                                            <li><a href="find-jobs-list.html">Music & Audio</a></li>
                                                            <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                            <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="menu right">
                                                        <h6>Top Skills</h6>
                                                        <ul>
                                                            <li><a href="jobs-single.html">adobe XD</a></li>
                                                            <li><a href="jobs-single.html">Android Developer</a></li>
                                                            <li><a href="jobs-single.html">Adobe Photoshop</a></li>
                                                            <li><a href="jobs-single.html">CSS, Html</a></li>
                                                            <li><a href="jobs-single.html">BA</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#"><span className="icon-categorie-3"></span>Music & Audio</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
                                                        <ul>
                                                            <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                            <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                            <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="menu right">
                                                        <h6>Top Skills</h6>
                                                        <ul>
                                                            <li><a href="jobs-single.html">Android Developer</a></li>
                                                            <li><a href="jobs-single.html">Adobe Photoshop</a></li>
                                                            <li><a href="jobs-single.html">adobe XD</a></li>
                                                            <li><a href="jobs-single.html">Figma</a></li>
                                                            <li><a href="jobs-single.html">BA</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#"><span className="icon-categorie-4"></span>Finance &
                                                    Accounting</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
                                                        <ul>
                                                            <li><a href="find-jobs-list.html">Development & IT</a></li>
                                                            <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                            <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                            <li><a href="find-jobs-list.html">Music & Audio</a></li>
                                                            <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                            <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="menu right">
                                                        <h6>Top Skills</h6>
                                                        <ul>
                                                            <li><a href="jobs-single.html">adobe XD</a></li>
                                                            <li><a href="jobs-single.html">Figma</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#"><span className="icon-categorie-5"></span>Programming & Tech</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
                                                        <ul>
                                                            <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                            <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                            <li><a href="find-jobs-list.html">Music & Audio</a></li>
                                                            <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                            <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                            <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="menu right">
                                                        <h6>Top Skills</h6>
                                                        <ul>
                                                            <li><a href="jobs-single.html">Adobe Photoshop</a></li>
                                                            <li><a href="jobs-single.html">adobe XD</a></li>
                                                            <li><a href="jobs-single.html">Figma</a></li>
                                                            <li><a href="jobs-single.html">CSS, Html</a></li>
                                                            <li><a href="jobs-single.html">BA</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#"><span className="icon-categorie-6"></span>Video & Animation</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
                                                        <ul>
                                                            <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                            <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                            <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                            <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="menu right">
                                                        <h6>Top Skills</h6>
                                                        <ul>
                                                            <li><a href="jobs-single.html">Adobe Photoshop</a></li>
                                                            <li><a href="jobs-single.html">CSS, Html</a></li>
                                                            <li><a href="jobs-single.html">BA</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#"><span className="icon-categorie-7"></span>Writing &
                                                    translation</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
                                                        <ul>
                                                            <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                            <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                            <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="menu right">
                                                        <h6>Top Skills</h6>
                                                        <ul>
                                                            <li><a href="jobs-single.html">Figma</a></li>
                                                            <li><a href="jobs-single.html">CSS, Html</a></li>
                                                            <li><a href="jobs-single.html">BA</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                            <div className="header-ct-center">
                                <div className="nav-wrap">
                                    <nav id="main-nav" className="main-nav">
                                        <ul id="menu-primary-menu" className="menu">
                                            <li className={"menu-item" + (activeMenu == "home" ? " current-item" : "")} onClick={e => setActiveMenu("home")}>
                                                <Link to="/">Home </Link>
                                            </li>
                                            <li className={"menu-item" + (activeMenu == "job" ? " current-item" : "")} onClick={e => setActiveMenu("job")} >
                                                <Link to="/job">JobList </Link>
                                            </li>
                                            <li className={"menu-item" + (activeMenu == "employers" ? " current-item" : "")} onClick={e => setActiveMenu("employers")}>
                                                <Link to="/employers">EmployersSingle</Link>
                                            </li>
                                            <li className={"menu-item" + (activeMenu == "" ? " current-item" : "")}>
                                                <Link to="/employers-review">EmployersReview</Link>
                                            </li>
                                            <li className={"menu-item" + (activeMenu == "" ? " current-item" : "")}>
                                                <a href="#">About</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="header-ct-right">
                                <div className="header-customize-item help">
                                    {/* <a href="term-of-use.html"><span className="icon-help-circle"></span></a> */}
                                </div>

                                <div className="header-customize-item account">
                                    <img src="images/user/avatar/image-01.jpg" alt="" />
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
                                            <a href="dashboard/candidates-resumes.html"><span className="icon-resumes"></span> Resumes</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-my-applied.html"><span className="icon-my-apply"></span> My Applied</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-save-jobs.html"><span className="icon-work"></span> Saved Jobs</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-alerts-jobs.html"><span className="icon-bell1"></span> Candidate Alerts</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-messages.html"><span className="icon-chat"></span> Messages</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-following-employers.html"><span className="icon-following"></span> Following Employers</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-meetings.html"><span className="icon-meeting"></span> Meeting</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-change-passwords.html"><span className="icon-change-passwords"></span> Change
                                                Passwords</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-delete-profile.html"><span className="icon-trash"></span> Delete Profile</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="#"><span className="icon-log-out"></span> Log Out</a>
                                        </div>
                                    </div>
                                </div>
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
