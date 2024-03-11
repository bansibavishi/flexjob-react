import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/navbar'
import Footer from '../../layout/footer'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function JobList() {


    const [jobList, setJobList] = useState([])

    const [page, setPage] = useState(1) // current page
    const [totalPage, setTotalPage] = useState(1)



    console.log(jobList);
    function getJobList() {

        var token = localStorage.getItem('token')
        fetch(process.env.REACT_APP_API + "/post-list?page=" + page, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(e => e.json()).then(res => {
            setJobList(res.data)
            setPage(res.currentPage)
            setTotalPage(res.totalPages)
        })
            .catch(err => {
                console.log(err);
            })

    }

    function generateBtn(pageNo) {
        console.log(pageNo, "asfasd");
        var arr = Array.from({ length: pageNo }, (_, i) => i + 1) // [1,2]
        return arr.map((n) => <li className={n == page ? 'current' : ''}><a onClick={() => setPage(n)} href="#">{n}</a></li>)
    }




    useEffect(() => {
        getJobList()
    }, [page])
    useEffect(() => {
        getJobList()
    }, [])

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


            <section className="form-sticky stc1">
                <div className="tf-container">
                    <div className="job-search-form inner-form-map st1">
                        <form method="post">
                            <div className="row-group-search">
                                <div className="form-group-1">
                                    <input type="text" className="input-filter-search" placeholder="Job title, key words or company" />
                                    <span className="icon-search search-job"></span>
                                </div>
                                <div className="form-group-2">
                                    <span className="icon-map-pin"></span>
                                    <select className="select-location" style={{ display: 'none' }}>
                                        <option value="">All Location</option>
                                        <option value="">All Location 1</option>
                                        <option value="">All Location 2</option>
                                        <option value="">All Location 3</option>
                                    </select>
                                    <div className="nice-select select-location" tabIndex="0">
                                        <span className="current">All Location</span>
                                        <ul className="list">
                                            <li data-value="" className="option selected focus">All Location</li>
                                            <li data-value="" className="option">Singapore</li>
                                            <li data-value="" className="option">Japan</li>
                                            <li data-value="" className="option">Korea</li>
                                            <li data-value="" className="option">Italia</li>
                                            <li data-value="" className="option">Canada</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="form-group-3">
                                    <span className="icon-filter"></span>
                                    <select id="select-location" className="select-location filter-radio" style={{ display: 'none' }}>
                                        <option value="">Filter More</option>
                                    </select>
                                </div>
                                <div className="wd-filter-radio">
                                    <div className="content">
                                        <div className="fl-cl lc1">
                                            <h6>On-site/Remote</h6>
                                            <ul>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-1" /><label htmlFor="checkbox-1"></label></div>
                                                    <label>On-site (1,675)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-2" /><label htmlFor="checkbox-2"></label></div>
                                                    <label>Remote (5,675)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-3" /><label htmlFor="checkbox-3"></label></div>
                                                    <label>Hybrid (6,675)</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="fl-cl lc2">
                                            <h6>All Job Types</h6>
                                            <ul>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-4" /><label htmlFor="checkbox-4"></label></div>
                                                    <label>All Job Types (1,675)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-5" /><label htmlFor="checkbox-5"></label></div>
                                                    <label>Full-time (623)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-6" /><label htmlFor="checkbox-6"></label></div>
                                                    <label>Part-time (45)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-7" /><label htmlFor="checkbox-7"></label></div>
                                                    <label>Contract (65)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-8" /><label htmlFor="checkbox-8"></label></div>
                                                    <label>Internship (9)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-9" /><label htmlFor="checkbox-9"></label></div>
                                                    <label>Temporary (4)</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="fl-cl lc3">
                                            <h6>All Salary</h6>
                                            <ul>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-10" /><label htmlFor="checkbox-10"></label>
                                                    </div><label>All Salaries (6,277)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-11" /><label htmlFor="checkbox-11"></label>
                                                    </div><label>$50,000+ (2,277)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-12" /><label htmlFor="checkbox-12"></label>
                                                    </div><label>$70,000+ (1,627)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-13" /><label htmlFor="checkbox-13"></label>
                                                    </div><label>$90,000+ (7,627)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-14" /><label htmlFor="checkbox-14"></label>
                                                    </div><label>$110,000+ (227)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-15" /><label htmlFor="checkbox-15"></label>
                                                    </div><label>$130,000+ (527)</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="fl-cl lc4">
                                            <h6>Any Distance</h6>
                                            <ul>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-16" /><label htmlFor="checkbox-16"></label>
                                                    </div><label>Any Distance (227)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-17" /><label htmlFor="checkbox-17"></label>
                                                    </div><label>within 5 miles (227)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-18" /><label htmlFor="checkbox-18"></label>
                                                    </div><label>within 10 miles (227)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-19" /><label htmlFor="checkbox-19"></label>
                                                    </div><label>within 25 miles (227)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-20" /><label htmlFor="checkbox-20"></label>
                                                    </div><label>within 50 miles (227)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-21" /><label htmlFor="checkbox-21"></label>
                                                    </div><label>within 100 miles (227)</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="fl-cl lc5">
                                            <h6>Posted Anytime</h6>
                                            <ul>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-22" /><label htmlFor="checkbox-22"></label>
                                                    </div><label>Posted Anytime</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-23" /><label htmlFor="checkbox-23"></label>
                                                    </div><label>Last 1 days (227)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-24" /><label htmlFor="checkbox-24"></label>
                                                    </div><label>Last 3 days (227)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-25" /><label htmlFor="checkbox-25"></label>
                                                    </div><label>Last 7 days (227)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-26" /><label htmlFor="checkbox-26"></label>
                                                    </div><label>Last 14 days (227)</label>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="fl-cl lc6">
                                            <h6>All Seniority Levels</h6>
                                            <ul>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-27" /><label htmlFor="checkbox-27"></label>
                                                    </div><label>All Seniority Levels</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-28" /><label htmlFor="checkbox-28"></label>
                                                    </div><label>Entry Level (24)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-29" /><label htmlFor="checkbox-29"></label>
                                                    </div><label>Mid Senior Level (34)</label>
                                                </li>
                                                <li>
                                                    <div className="round"><input type="checkbox" id="checkbox-30" /><label htmlFor="checkbox-30"></label>
                                                    </div><label>Executive (12)</label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group-4">
                                    <button className="btn btn-find">Find Jobs</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </section>

            <section className="inner-jobs-section">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12 tf-tab">
                            <div className="wd-meta-select-job">

                                <div className="wd-findjob-filer">
                                    <div className="group-select-display">
                                        <a className="button-filter st2"> <i className="icon-filter"></i> Filters</a>
                                        <div className="inner menu-tab">
                                            <a className="btn-display active"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16"
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
                                            </svg></a>
                                            <a className="btn-display"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16"
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
                                            </svg></a>

                                        </div>
                                        <p className="nofi-job"> <span>1249</span> jobs recommended for you</p>
                                    </div>
                                    <div className="group-select">
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
                                    </div>
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
                                                                        {e.userId}
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
                                                                    <li key={Math.random()}><a href="#">{i.technology}</a></li>
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
                                                                <p>{e.price} <span className="year">/year</span></p>
                                                            </div>
                                                            <p className="days">{e.validity}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}


                                    </div>

                                    <ul className="pagination-job padding">
                                        <li><a href="#"><i className="icon-keyboard_arrow_left"></i></a></li>
                                        {generateBtn(totalPage)}
                                        {/* <li><a href="#">1</a></li>
                                        <li className="current"><a href="#">2</a></li>
                                        <li><a href="#">3</a></li> */}
                                        <li><a href="#"><i className="icon-keyboard_arrow_right"></i></a></li>
                                    </ul>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
