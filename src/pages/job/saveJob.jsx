import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function SaveJob() {
    const [jobList, setJobList] = useState([])
    const[saveJob,setSaveJob] = useState([])


    function getJobList() {

        var token = localStorage.getItem('token')
    fetch(process.env.REACT_APP_API + "/save-job-list",  {
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
            headers:{
                Authorization:'Bearer ' + token
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


            <section className="inner-jobs-section mt-5">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12 tf-tab">
                            <div className="wd-meta-select-job">

                                <div className="wd-findjob-filer">
                                    <div className="group-select-display">
                                        {/* <a className="button-filter st2"> <i className="icon-filter"></i> Filters</a> */}
                                        <div className="inner menu-tab">
                                            {/* <a className="btn-display active"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16"
                                                viewBox="0 0 17 16" fill="none">
                                                <path
                                                    d="M4.5 0H0.500478C0.5 0.380952 0.5 0.596931 0.5 1.33333V14.6667C0.5 15.4031 0.500478 16 0.500478 16H4.5C4.5 16 4.5 15.4031 4.5 14.6667V1.33333C4.5 0.596931 4.5 0.380952 4.5 0Z"
                                                    fill="white" />
                                                <path
                                                    d="M10.5 0H6.50048C6.5 0.380952 6.5 0.596931 6.5 1.33333V14.6667C6.5 15.4031 6.50048 16 6.50048 16H10.5C10.5 16 10.5 15.4031 10.5 14.6667V1.33333C10.5 0.596931 10.5 0.380952 10.5 0Z"
                                                    fill="white" />
                                                <path
                                                    d="M16.5 0H12.5005C12.5 0.380952 12.5 0.596931 12.5 1.33333V14.6667C12.5 15.4031 12.5005 16 12.5005 16H16.5C16.5 16 16.5 15.4031 16.5 14.6667V1.33333C16.5 0.596931 16.5 0.380952 16.5 0Z"
                                                    fill="white" />
                                            </svg></a> */}
                                            {/* <a className="btn-display"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16"
                                                viewBox="0 0 17 16" fill="none">
                                                <path
                                                    d="M0.5 12.001L0.5 16.0005C0.880952 16.001 1.09693 16.001 1.83333 16.001L15.1667 16.001C15.9031 16.001 16.5 16.0005 16.5 16.0005L16.5 12.001C16.5 12.001 15.9031 12.001 15.1667 12.001L1.83333 12.001C1.09693 12.001 0.880952 12.001 0.5 12.001Z"
                                                    fill="#A0A0A0" />
                                                <path
                                                    d="M0.5 6.00098L0.5 10.0005C0.880952 10.001 1.09693 10.001 1.83333 10.001L15.1667 10.001C15.9031 10.001 16.5 10.0005 16.5 10.0005L16.5 6.00098C16.5 6.00098 15.9031 6.00098 15.1667 6.00098L1.83333 6.00098C1.09693 6.00098 0.880952 6.00098 0.5 6.00098Z"
                                                    fill="#A0A0A0" />
                                                <path
                                                    d="M0.5 0.000976562L0.5 4.0005C0.880952 4.00098 1.09693 4.00098 1.83333 4.00098L15.1667 4.00098C15.9031 4.00098 16.5 4.0005 16.5 4.0005L16.5 0.000975863C16.5 0.000975863 15.9031 0.000975889 15.1667 0.000975921L1.83333 0.000976504C1.09693 0.000976536 0.880952 0.000976546 0.5 0.000976562Z"
                                                    fill="#A0A0A0" />
                                            </svg></a> */}

                                        </div>
                                        {/* <p className="nofi-job"> <span>1249</span> jobs recommended for you</p> */}
                                    </div>
                                    {/* <div className="group-select">
                                        <select>
                                            <option>12 Per Page</option>
                                            <option>1 Per Page</option>
                                            <option>10 Per Page</option>
                                        </select>
                                        <select>
                                            <option>Sort by (Defaut)</option>
                                            <option>New</option>
                                            <option>Last</option>
                                        </select>
                                    </div> */}
                                </div>
                            </div>
                            <div className="content-tab">
                                <div className="inner">
                                    <div className="group-col-2">
                                        {
                                            jobList.map(e =>

                                                <div className="features-job cl2" key={Math.random()}>
                                                    <div className="job-archive-header">
                                                        <div className="inner-box">
                                                            <div className="logo-company">
                                                                <img src="images/logo-company/cty8.png" alt="images/logo-company/cty8.png" />
                                                            </div>
                                                            <div className="box-content">
                                                                <Link to={'/job/' + e._id} >
                                                                    <h4>
                                                                        {e.user[0].firstName}
                                                                    </h4>
                                                                    <h3>
                                                                        {e.title}
                                                                        <span className="icon-bolt"></span>
                                                                    </h3>
                                                                </Link>
                                                                <ul>
                                                                    <li>
                                                                        <span className="icon-map-pin"></span>
                                                                        {e.description}
                                                                    </li>
                                                                    <li>
                                                                        <span className="icon-calendar"></span>
                                                                        {e.formattedTime}
                                                                    </li>
                                                                </ul>
                                                                <span onClick={(se) => like(e._id, se)} className={"icon-heart" + (e?.liked ? " text-danger" : "")}></span>
                                                                <span onClick={(se) => save(e._id, se)} className={"icon-save-candidate" + (e?.saved ? " text-danger" : "")}></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="job-archive-footer">
                                                        <div className="job-footer-left">
                                                            <ul className="job-tag">

                                                                {e.expertise && e.expertise?.map(i =>
                                                                    <li key={Math.random()}><a>{i.technology}</a></li>
                                                                )}

                                                            </ul>
                                                            <div className="star">
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                            </div>
                                                        </div>
                                                        <div className="job-footer-right">
                                                            <div className="price">
                                                                <span className="icon-dolar1"></span>
                                                                <p>{e.price} <span className="year">/hours</span></p>
                                                            </div>
                                                            <p className="days">{e.validity}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}


                                    </div>

                                    {/* <ul className="pagination-job padding">
                                        <li><a href="#"><i className="icon-keyboard_arrow_left"></i></a></li>
                                        {generateBtn(totalPage)}

                                        <li><a href="#"><i className="icon-keyboard_arrow_right"></i></a></li>
                                    </ul> */}
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
