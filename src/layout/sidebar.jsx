import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';


export default function Sidebar() {
    const send = useNavigate();
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

    return (
        <>
            <div className="left-menu">
                <div id="sidebar-menu">

                    <ul className="downmenu list-unstyled" id="side-menu">

                        <li>
                            <Link to="/profile" className="tf-effect">
                                <span className="icon-profile dash-icon"></span>
                                <span className="dash-titles">Profile</span>
                            </Link>

                        </li>
{/*
                        <li>
                            <Link to={"/resume"}>
                                <span className="icon-resumes dash-icon"></span>
                                <span className="dash-titles">Resumes</span>
                            </Link>
                        </li> */}

                        <li>
                            <Link to={"/myjob"}>
                                <span className="icon-my-apply dash-icon"></span>
                                <span className="dash-titles">My Applied</span>
                            </Link>
                        </li>

                        <li>
                            <Link to={"/savejob-list"}>
                                <span className="icon-work dash-icon"></span>
                                <span className="dash-titles">Saved Jobs</span>
                            </Link>
                        </li>



                        <li>
                            <Link to={"/message"} className="tf-effect">
                                <span className="icon-chat dash-icon"></span>
                                <span className="dash-titles">Messages</span>
                            </Link>
                        </li>


                        {/* <li>
                            <a href="#candidates-change-passwords.html" className="tf-effect">
                                <span className="icon-change-passwords dash-icon"></span>
                                <span className="dash-titles">Change passwords</span>
                            </a>
                        </li> */}

                        {/* <li>
                            <a href="#candidates-delete-profile.html" className="tf-effect ">
                                <span className="icon-trash dash-icon"></span>
                                <span className="dash-titles">Delete Profile</span>
                            </a>
                        </li> */}

                        <li>
                            <a className="tf-effect">
                                <span className="icon-log-out dash-icon"></span>
                                <span className="dash-titles" onClick={logout}>Log out</span>
                            </a>
                        </li>


                    </ul>
                </div>
            </div>
        </>
    )
}
