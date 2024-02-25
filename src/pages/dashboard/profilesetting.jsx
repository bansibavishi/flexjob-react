import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/navbar'
import Footer from '../../layout/footer'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import react from 'react'
import Select from 'react-select'
import { toast } from 'react-toastify'
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
    const [expertise, setExpertise] = useState([])
    const options = [
        { value: 'Communication Skills', label: 'Communication Skills' },
        { value: 'DSA', label: 'DSA' }
    ]
    function getUser() {

        var token = localStorage.getItem('token')

        fetch(process.env.REACT_APP_API + "/profile", {
            // method: "post",
            // body: JSON.stringify(user),
            headers: {
                Authorization: 'Bearer ' + token
                // "content-type": "application/json"
            }
        }).then(e => e.json()).then(res => {
            console.log(res);
            setUser(res.userData)
        })
            .catch(err => {
                console.log(err);
            })
    }

    function exper() {
        fetch(process.env.REACT_APP_API + "/expertise-data", {

        }).then(e => e.json()).then(res => {
            if (res.data.length) {
                var ex = res.data.map(e => {
                    return {
                        value: e.technology,
                        label: e.technology
                    }
                })
                // console.log(ex); 
                setExpertise(ex)
            }
            console.log(res);

        })

            .catch(err => {
                console.log(err);
            })

    }

    function update(e) {
        e.preventDefault();



        var token = localStorage.getItem('token')

        fetch(process.env.REACT_APP_API + "/profile-update", {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json",
                Authorization: 'Bearer ' + token
            }
        }).then(e => e.json()).then(res => {
            console.log(res);
            if (res?.status) {
                toast.success(res?.message)
            }
            if (res?.error) {
                toast.error(res?.error)
            }

        })
            .catch(err => {
                console.log(err);
            })
    }


    useEffect(() => {
        getUser()
        exper()

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
                                        <form onSubmit={update}>
                                            <div className="form-infor flex flat-form">
                                                <div className="info-box info-wd">
                                                    <fieldset>
                                                        <label className="title-user fw-7">First Name</label>
                                                        <input type="text" className="input-form" onChange={e => setUser({ ...user, firstName: e.target.value })} value={user.firstName} required />
                                                    </fieldset>
                                                    <fieldset>
                                                        <label className="title-user fw-7">Phone Number</label>
                                                        <input type="text" className="input-form" onChange={e => setUser({ ...user, mobile: e.target.value })} value={user.mobile} required />
                                                    </fieldset>
                                                    <div id="item_date" >
                                                        <label className="title-user fw-7">Title</label>
                                                        <input type='text' className='input-form' onChange={e => setUser({ ...user, title: e.target.value })} value={user.title} required />
                                                        {/* <a className="btn-selector nolink input-form"> Male</a> */}

                                                    </div>
                                                    <fieldset>
                                                        <label className="title-user fw-7">Offered Salary ($)</label>
                                                        <input type="text" className="input-form" required />
                                                    </fieldset>
                                                    <div id="item_1" className="dropdown titles-dropdown">
                                                        <label className="title-user fw-7">Expertise</label>

                                                        <Select
                                                            defaultValue={{ value: 'Communication Skills', label: 'Communication Skills' }}
                                                            isMulti
                                                            options={expertise} />

                                                        {/* <select multiple>
                                                    <option>communication skills</option>
                                                    <option>DSA</option>
                                                   </select> */}

                                                    </div>
                                                    <fieldset>
                                                        <label className="title-user fw-7">Location</label>
                                                        <input type="text" className="input-form" onChange={e => setUser({ ...user, location: e.target.value })} value={user.location} required />
                                                    </fieldset>
                                                    <fieldset>
                                                        <label className="title-user fw-7">Job Title</label>
                                                        <input type="text" className="input-form" required />
                                                    </fieldset>
                                                </div>
                                                <div className="info-box info-wd">
                                                    <fieldset>
                                                        <label className="title-user fw-7">LastName</label>
                                                        <input type="text" className="input-form" onChange={e => setUser({ ...user, lastName: e.target.value })} value={user.lastName} required />
                                                    </fieldset>
                                                    <fieldset>
                                                        <label className="title-user fw-7">Email</label>
                                                        <input type="email" className="input-form" onChange={e => setUser({ ...user, email: e.target.value })} value={user.email} required />
                                                    </fieldset>
                                                    {/* 
                                                <div id="item_size" className="dropdown titles-dropdown ">
                                                    <label className="title-user fw-7">WorkHistory</label>

                                                    <select>
                                                        <option>abc</option>
                                                        <option>xyz</option>

                                                    </select>
                                                </div> */}
                                                    {/* <div id="item_2" className="dropdown titles-dropdown">
                                                    <label className="title-user fw-7">Save Job</label>


                                                    <select>
                                                        <option>aaa</option>
                                                        <option>bbb</option>
                                                    </select>
                                                </div> */}


                                                    <fieldset>
                                                        <label className="title-user fw-7">Rate</label>
                                                        <input type="number" className="input-form" onChange={e => setUser({ ...user, rate: e.target.value })} value={user.rate} required />
                                                    </fieldset>
                                                </div>
                                            </div>

                                            <div className="tag-wrap border-bt">
                                                <h5 className="title-tag fw-7">Description </h5>
                                                <div className="tag-area " >
                                                    <ul>
                                                        <li className="tag"></li>
                                                        <li><input type="text" className="tag-input" onChange={e => setUser({ ...user, description: e.target.value })} value={user.description} required /></li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <button type='submit'>Submit</button>
                                        </form>
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
