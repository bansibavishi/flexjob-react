import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/navbar'
import Footer from '../../layout/footer'
import { Helmet } from 'react-helmet'
import axios from 'axios'
axios.defaults.withCredentials = true

export default function Profilesetting() {

const [user, setUser] = useState({
    type: "employeer",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    expertise: ["communication skills", "DSA"],
    title: "qwertyuiop",
    description: "qwtdycvbhdhhd",
    workHistory: ["fdfdfdf", "fdfdffdff"],
    location: "fdfgdf",
    savedJob: ["sdd", "sff"],
    rate: "8"
})
    function getUser() {


        // axios.get(process.env.REACT_APP_API + "/profile")
        axios.get("/profile")
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }


    useEffect(() => {
        getUser()


    }, [])


    return (
        <>

            <Helmet>
                <body className='dashboard show' />
                <title>Profile Setting</title>
            </Helmet>

            <div className="left-menu">
                <div id="sidebar-menu">

                    <ul className="downmenu list-unstyled" id="side-menu">

                        <li>
                            <a href="candidates-dashboard.html" className="tf-effect">
                                <span className="icon-dashboard dash-icon"></span>
                                <span className="dash-titles">Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a className="has-arrow tf-effect">
                                <span className="icon-profile dash-icon"></span>
                                <span className="dash-titles">Profile</span>
                            </a>
                            <ul className="sub-menu2" aria-expanded="false">
                                <li><a href="candidates-overview.html">Overview</a></li>
                                <li><a href="candidates-profile-setting.html">Profile Setting</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="candidates-resumes.html" className="tf-effect">
                                <span className="icon-resumes dash-icon"></span>
                                <span className="dash-titles">Resumes</span>
                            </a>
                        </li>

                        <li>
                            <a href="candidates-my-applied.html" className="tf-effect">
                                <span className="icon-my-apply dash-icon"></span>
                                <span className="dash-titles">My Applied</span>
                            </a>
                        </li>

                        <li>
                            <a href="candidates-save-jobs.html" className="tf-effect">
                                <span className="icon-work dash-icon"></span>
                                <span className="dash-titles">Saved Jobs</span>
                            </a>
                        </li>

                        <li>
                            <a href="candidates-alerts-jobs.html" className="tf-effect">
                                <span className="icon-bell1 dash-icon"></span>
                                <span className="dash-titles">Alerts Jobs</span>
                            </a>
                        </li>

                        <li>
                            <a href="candidates-messages.html" className="tf-effect">
                                <span className="icon-chat dash-icon"></span>
                                <span className="dash-titles">Messages</span>
                            </a>
                        </li>

                        <li>
                            <a href="candidates-following-employers.html" className="tf-effect">
                                <span className="icon-following dash-icon"></span>
                                <span className="dash-titles">Following Employers</span>
                            </a>
                        </li>

                        <li>
                            <a href="candidates-meetings.html" className="tf-effect">
                                <span className="icon-meeting dash-icon"></span>
                                <span className="dash-titles">Meeting</span>
                            </a>
                        </li>

                        <li>
                            <a href="candidates-change-passwords.html" className="tf-effect">
                                <span className="icon-change-passwords dash-icon"></span>
                                <span className="dash-titles">Change passwords</span>
                            </a>
                        </li>

                        <li>
                            <a href="candidates-delete-profile.html" className="tf-effect ">
                                <span className="icon-trash dash-icon"></span>
                                <span className="dash-titles">Delete Profile</span>
                            </a>
                        </li>

                        <li>
                            <a href="../home-01.html" className="tf-effect">
                                <span className="icon-log-out dash-icon"></span>
                                <span className="dash-titles">Log out</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>


            <div className="dashboard__content">
                <section className="page-title-dashboard">
                    <div className="themes-container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 ">
                                <div className="title-dashboard">
                                    <div className="title-dash flex2">Profile Setting</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flat-dashboard-setting flat-dashboard-setting2">
                    <div className="themes-container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 ">
                                <div className="profile-setting bg-white">
                                    <div className="author-profile flex2 border-bt">

                                        <div className="wrap-img flex2">
                                            <div className="img-box relative">
                                                <img className="avatar " id="profileimg" src="../images/dashboard/image-up.jpg" alt="" />
                                            </div>
                                            <div id="upload-profile">
                                                <h5 className="fw-6">Upload a new avatar: </h5>
                                                <h6>JPG 80x80px</h6>
                                                <input className="up-file" id="tf-upload-img" type="file" name="profile" required="" />
                                            </div>
                                        </div>

                                        <div className="tt-button button-style">
                                            <a href="#" className="btn-3">Save Profile</a>
                                        </div>
                                    </div>


                                    <div className="form-infor-profile">
                                        <h3 className="title-info">Information</h3>
                                        <div className="form-infor flex flat-form">
                                            <div className="info-box info-wd">
                                                <fieldset>
                                                    <label className="title-user fw-7">Full Name</label>
                                                    <input type="text" className="input-form"   required />
                                                </fieldset>
                                                <fieldset>
                                                    <label className="title-user fw-7">Phone Number</label>
                                                    <input type="tel" className="input-form"  required />
                                                </fieldset>
                                                <div id="item_date" className="dropdown titles-dropdown">
                                                    <label className="title-user fw-7">Gender</label>
                                                    <a className="btn-selector nolink input-form"> Male</a>
                                                    <ul>
                                                        <li><span>Male</span></li>
                                                        <li><span>Female</span></li>
                                                    </ul>
                                                </div>
                                                <fieldset>
                                                    <label className="title-user fw-7">Offered Salary ($)</label>
                                                    <input type="text" className="input-form"  required />
                                                </fieldset>
                                                <div id="item_1" className="dropdown titles-dropdown">
                                                    <label className="title-user fw-7">Experience time</label>
                                                    <a className="btn-selector nolink input-form">5 Years</a>
                                                    <ul>
                                                        <li><span>1 Years</span></li>
                                                        <li><span>3 Years</span></li>
                                                        <li><span>5 Years</span></li>
                                                        <li><span>8 Years</span></li>
                                                    </ul>
                                                </div>
                                                <fieldset>
                                                    <label className="title-user fw-7">Location</label>
                                                    <input type="text" className="input-form" required />
                                                </fieldset>
                                                <fieldset>
                                                    <label className="title-user fw-7">Job Title</label>
                                                    <input type="text" className="input-form"  required />
                                                </fieldset>
                                            </div>
                                            <div className="info-box info-wd">
                                                <fieldset>
                                                    <label className="title-user fw-7">Date Of Birth</label>
                                                    <input type="text" className="input-form"  required />
                                                </fieldset>
                                                <fieldset>
                                                    <label className="title-user fw-7">Email</label>
                                                    <input type="email" className="input-form"  required />
                                                </fieldset>

                                                <div id="item_size" className="dropdown titles-dropdown ">
                                                    <label className="title-user fw-7">Age</label>
                                                    <a className="btn-selector nolink input-form"> 18 - 24</a>
                                                    <ul>
                                                        <li><span>18 - 24</span></li>
                                                        <li><span>24 - 30</span></li>
                                                        <li><span>30 - 40</span></li>
                                                    </ul>
                                                </div>
                                                <div id="item_2" className="dropdown titles-dropdown">
                                                    <label className="title-user fw-7">Salary Type</label>
                                                    <a className="btn-selector nolink input-form">Month</a>
                                                    <ul>
                                                        <li><span>1</span></li>
                                                        <li><span>6</span></li>
                                                        <li><span>12</span></li>
                                                    </ul>
                                                </div>

                                                <div id="item_3" className="dropdown titles-dropdown">
                                                    <label className="title-user fw-7">Qualification</label>
                                                    <a className="btn-selector nolink input-form">Master Degree</a>
                                                    <ul>
                                                        <li><span>Master Bachelor</span></li>
                                                        <li><span>Master Degree</span></li>
                                                    </ul>
                                                </div>
                                                <div id="item_4" className="dropdown titles-dropdown">
                                                    <label className="title-user fw-7">Language</label>
                                                    <a className="btn-selector nolink input-form">English</a>
                                                    <ul>
                                                        <li><span>English</span></li>
                                                        <li><span>Vietnamese</span></li>
                                                        <li><span>French</span></li>
                                                        <li><span>Japanese</span></li>
                                                    </ul>
                                                </div>
                                                <fieldset>
                                                    <label className="title-user fw-7">Categories</label>
                                                    <input type="text" className="input-form"  required />
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="show-wrap ">
                                            <h5 className=" fw-7">Show my profile</h5>
                                            <div className="show-box flex">
                                                <div className="show-inner flex2">
                                                    <input type="radio" id="r1" name="rr" />
                                                    <label for="r1"><span></span>Show</label>
                                                </div>
                                                <div className="show-inner flex2">
                                                    <input type="radio" id="r2" name="rr" />
                                                    <label for="r2"><span></span>Hidden</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tag-wrap border-bt">
                                            <h5 className="title-tag fw-7">Tag Skill </h5>
                                            <div className="tag-area">
                                                <ul>
                                                    <li className="tag"></li>
                                                    <li><input type="text" className="tag-input" /></li>

                                                </ul>
                                            </div>
                                        </div>

                                        <div className="text-editor-wrap border-bt">
                                            <h3>About Company</h3>
                                            <div className="text-editor-main">
                                                <div className="options">
                                                    <button className="my-text-btn" data-command="undo"><i className="fas fa-undo"></i></button>
                                                    <button className="my-text-btn" data-command="redo"><i className="fas fa-redo"></i></button>
                                                    <button className="my-text-btn" data-command="bold"><i className="fas fa-bold"></i></button>
                                                    <button className="my-text-btn" data-command="italic"><i className="fas fa-italic"></i></button>
                                                    <button className="my-text-btn" data-command="underline"><i className="fas fa-underline"></i></button>
                                                    <button className="my-text-btn" data-command="strikeThrough"><i
                                                        className="fas fa-strikethrough"></i></button>
                                                    <button className="my-text-btn" data-command="formatBlock" data-block="H1">H1</button>
                                                    <button className="my-text-btn" data-command="formatBlock" data-block="H2">H2</button>
                                                    <button className="my-text-btn" data-command="formatBlock" data-block="H3">H3</button>
                                                    <button className="my-text-btn" data-command="justifyLeft"><i className="fas fa-align-left"></i></button>
                                                    <button className="my-text-btn" data-command="justifyCenter"><i
                                                        className="fas fa-align-center"></i></button>
                                                    <button className="my-text-btn" data-command="justifyRight"><i
                                                        className="fas fa-align-right"></i></button>
                                                    <button className="my-text-btn" data-command="justifyFull"><i
                                                        className="fas fa-align-justify"></i></button>
                                                    <button className="my-text-btn" data-command="insertImage"><i className="fas fa-images"></i></button>
                                                    <button className="my-text-btn" data-command="createLink"><i className="fas fa-link"></i></button>
                                                </div>
                                                <div className="contentOutput" contenteditable="true"></div>

                                            </div>
                                        </div>

                                        <div className="social-wrap border-bt">
                                            <h3>Social Network</h3>
                                            <div className="form-social form-wg flex flat-form">
                                                <div className="form-box info-wd wg-box">
                                                    <fieldset className="flex2">
                                                        <span className="icon-facebook"></span>
                                                        <input type="url" className="input-form" value="http://www.facebook.com/avitex" />
                                                    </fieldset>
                                                    <fieldset className="flex2">
                                                        <span className="icon-twitter"></span>
                                                        <input type="url" className="input-form2" placeholder="URL" required />
                                                    </fieldset>
                                                    <fieldset className="flex2">
                                                        <span className="icon-instagram1"></span>
                                                        <input type="url" className="input-form2" placeholder="URL" required />
                                                    </fieldset>
                                                </div>
                                                <div className="form-box info-wd wg-box">
                                                    <fieldset className="flex2">
                                                        <span className="icon-linkedin2"></span>
                                                        <input type="url" className="input-form2" placeholder="URL" required />
                                                    </fieldset>
                                                    <fieldset className="flex2">
                                                        <span className="icon-pinterest"></span>
                                                        <input type="url" className="input-form2" placeholder="URL" required />
                                                    </fieldset>
                                                    <fieldset className="flex2">
                                                        <span className="icon-youtube"></span>
                                                        <input type="url" className="input-form2" placeholder="URL" required />
                                                    </fieldset>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="contact-wrap info-wd">
                                            <h3>Contact Information</h3>

                                            <fieldset className="address-box">
                                                <label className="title-user fw-7">Address</label>
                                                <input type="text" className="input-form input-style" value="71  St. Takayamio, Tokyo" />
                                            </fieldset>
                                            <div className="form-social form-wg flex flat-form">
                                                <div className="form-box  wg-box">
                                                    <div id="item_category2" className="dropdown titles-dropdow">
                                                        <label className="title-user color-1 fw-7">Location</label>
                                                        <a className="btn-selector nolink input-form"> Tokyo </a>
                                                        <ul>
                                                            <li><span>VietNam</span></li>
                                                            <li><span>Tokyo</span></li>
                                                            <li><span>USA</span></li>
                                                            <li><span>England</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="form-box  wg-box">
                                                    <fieldset className="">
                                                        <label className="title-user fw-7">Map Location</label>
                                                        <input type="text" className="input-form input-style" value="243- 235  St. Takayamio, Tokyo" />
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="map-content">
                                            <iframe className="map-box"
                                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.453092836291!2d90.47477022812872!3d23.77494577893369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1627293157601!5m2!1svi!2s"
                                                allowfullscreen="" loading="lazy"></iframe>
                                        </div>
                                        <div className="area-wrap info-wd">
                                            <div className="form-social form-wg flex flat-form">
                                                <div className="form-box  wg-box">
                                                    <fieldset className="">
                                                        <input type="text" className="input-form " value="40.69499198068389" />
                                                    </fieldset>
                                                </div>
                                                <div className="form-box  wg-box">
                                                    <fieldset className="">
                                                        <input type="text" className="input-form " value="-73.9959976171989" />
                                                    </fieldset>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wrap-video">
                                            <fieldset className="info-wd">
                                                <label className="title-url fw-7">Introduction Video</label>
                                                <input type="url" className="input-form input-style"
                                                    value="https://www.youtube.com/watch?v=I6ZLgk_bq90" />
                                            </fieldset>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <section className="flat-dashboard-bottom">
                    <div className="themes-container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 ">
                                <h5 className="center">©2023 Jobtex. All Rights Reserved.</h5>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        </>
    )
}
