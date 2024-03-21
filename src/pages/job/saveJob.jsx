import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import JobCmp from '../../component/job'


export default function SaveJob() {
    const [jobList, setJobList] = useState([])
    const [saveJob, setSaveJob] = useState([])


    function getJobList() {

        var token = localStorage.getItem('token')
        fetch(process.env.REACT_APP_API + "/save-job-list", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(e => e.json()).then(res => {
            setJobList(res.savedPost)

        })
            .catch(err => {
                console.log(err);
            })

    }

    function like(likeId, es) {
        console.log(es);
        var token = localStorage.getItem('token')
        fetch(process.env.REACT_APP_API + "/like", {
            method: "post",
            headers: {
                "content-type": "application/json",
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify({ postId: likeId })
        }).then(e => e.json()).then(res => {
            if (res.like == true) {
                es.target.classList.add('text-danger')
            } else {
                es.target.classList.remove('text-danger')
            }
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }

    function save(saveId, es) {
        console.log(es);

        var token = localStorage.getItem('token')
        fetch(process.env.REACT_APP_API + "/save-post", {
            method: "post",
            headers: {
                "content-type": "application/json",
                Authorization: 'Bearer ' + token
            },
            body: JSON.stringify({ postId: saveId })
        }).then(e => e.json()).then(res => {
            console.log(es.target);
            if (res.save == true) {
                es.target.classList.add('text-success')
            } else {
                es.target.classList.remove('text-success')
            }
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }
    function saveJobList() {
        var token = localStorage.getItem('token')
        fetch(process.env.REACT_APP_API + "/save-job-list", {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(e => e.json()).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getJobList()
        // saveJobList()
    }, [])

    return (
        <>

            <section className="bg-f5 breadcrumb-section">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title">
                                <div className="widget-menu-link">
                                    <ul>
                                        <li><a href="home-01.html">Home</a></li>
                                        <li><a href="#">Find Jobs</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="inner-jobs-section mt-5">
                <div className="tf-container">
                    <h5>Saved Jobs</h5>
                    <div className="row">
                        <div className="col-lg-12 tf-tab">
                            <div className="wd-meta-select-job">

                                <div className="wd-findjob-filer">
                                    <div className="group-select-display">
                                        {/* <a className="button-filter st2"> <i className="icon-filter"></i> Filters</a> */}
                                        <div className="inner menu-tab">


                                        </div>
                                        {/* <p className="nofi-job"> <span>1249</span> jobs recommended for you</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="content-tab">
                                <div className="inner">
                                    <div className="group-col-2">
                                        {
                                            jobList.map(e =>

                                                <JobCmp e={e} />
                                            )}


                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
