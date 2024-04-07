import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function MyJob() {

    const [myJob, setMyJob] = useState([])
    let { postId } = useParams();
    function myJobList() {
        var token = localStorage.getItem('token')
        axios.get(process.env.REACT_APP_API + "/current-user-post", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            setMyJob(res.data.currentUserPost)
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        myJobList()
    }, [])
    return (
        <>





            <section className="page-title-dashboard">
                <div className="themes-container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 ">
                            <div className="title-dashboard">
                                <div className="title-dash flex2">My Job</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flat-dashboard-myjob flat-dashboard-applicants">
                <div className="themes-container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 ">

                            <div className="applicants bg-white">


                                <div className="table-content">
                                    <div className="wrap-applicants table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>My jobs</th>
                                                    <th>Applicants</th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    myJob.map(e =>

                                                        <tr className="file-delete">
                                                            <td>

                                                                <div className="candidates-wrap flex2">
                                                                    <div className="content">
                                                                        <div className="title-box flex2">
                                                                            <h3>{e.title}</h3>
                                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                                    d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
                                                                                    fill="#504CFE" />
                                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                                    d="M10.9099 3.73218C11.052 3.77687 11.1762 3.86573 11.2643 3.98583C11.3524 4.10593 11.3999 4.25102 11.3999 4.39998V7.89998H14.1999C14.328 7.89992 14.4536 7.93499 14.5631 8.00136C14.6726 8.06773 14.7618 8.16286 14.821 8.2764C14.8801 8.38994 14.9071 8.51754 14.8988 8.64532C14.8905 8.77309 14.8473 8.89614 14.7739 9.00108L9.87392 16.0011C9.78864 16.1233 9.6666 16.215 9.52556 16.2631C9.38452 16.3111 9.23183 16.3129 9.08971 16.2681C8.94759 16.2234 8.82345 16.1344 8.73537 16.0143C8.64728 15.8941 8.59983 15.749 8.59992 15.6V12.1H5.79992C5.67188 12.1 5.54627 12.065 5.43677 11.9986C5.32727 11.9322 5.23808 11.8371 5.17889 11.7236C5.1197 11.61 5.09279 11.4824 5.10108 11.3546C5.10937 11.2269 5.15255 11.1038 5.22592 10.9989L10.1259 3.99888C10.2113 3.87693 10.3334 3.78539 10.4744 3.73755C10.6154 3.68972 10.7679 3.68808 10.9099 3.73288V3.73218Z"
                                                                                    fill="white" />
                                                                            </svg>
                                                                        </div>
                                                                        <div className="now-box flex2">

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <h5>${e.budget}</h5>
                                                            </td>
                                                            {/* <td>
                      <h6 className="fw-5">Created: Oct 18, 2022</h6>
                      <h6 className="fw-5">Expiry date: Sept 5, 2023</h6>
                    </td> */}
                                                            <td>
                                                                {/* <div className="status-wrap">
                        <div className="button-status color-3"> Published </div>
                      </div> */}
                                                            </td>
                                                            <td>
                                                                <div className="action-wrap">
                                                                    <ul className="flex2">
                                                                        {/* <li className="hv-tool" data-tooltip="Lock"><a className="action-icon icon-lock1"></a></li>
                          <li className="hv-tool" data-tooltip="Write"><a className="action-icon icon-write1"></a></li> */}
                                                                        <li><Link to={"/application-job/" + e._id} className="button-cancel fw-7 remove-file me-3">View Application</Link></li>
                                                                        <li>
                                                                           {/* <a className="button-cancel fw-7 remove-file">Cancel</a> */}
                                                                        </li>


                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )}





                                            </tbody>
                                        </table>
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
                            <h5 className="center">©2023 JobPlace. All Rights Reserved.</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
