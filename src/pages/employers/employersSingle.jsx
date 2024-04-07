import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/navbar'
import Footer from '../../layout/footer'
import { Link, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import e from 'cors';

export default function EmployersSingle() {

    document.getElementById('heades')

    const [employer, setEmployer] = useState({})
    let { userId } = useParams();
    const [activeMenu, setActiveMenu] = useState('About')

    const [review, setReview] = useState([])
    const [jobList, setJobList] = useState([])

    function getSingleEmployer() {

        fetch(process.env.REACT_APP_API + "/user-by-id/" + userId, {
        }).then(e => e.json()).then(res => {
            setEmployer(res.data)
        })
            .catch(err => {
                console.log(err);
            })
    }

    function reviewList() {
        var token = localStorage.getItem('token')
        fetch(process.env.REACT_APP_API + "/review-list?id=" + userId, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(e => e.json()).then(res => {
            setReview(res.userReview)
        }).catch(err => {
            console.log(err);
        })
    }

    function getList() {
        var token = localStorage.getItem('token')
        fetch(process.env.REACT_APP_API + "/post-list-by-user-id/" + userId, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(e => e.json()).then(res => {
            console.log(res.userData);
            setJobList(res.data)
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        getSingleEmployer()
    }, [])
    useEffect(() => {
        reviewList()
        getList()
    }, [])
    return (
        <>
            <div className="wd-popup-job-apply style2">
                <div className="modal-menu__backdrop"></div>
                <div className="content">
                    <h6>Apply For This Job</h6>
                    <p>Select A Your CV</p>
                    <form >
                        <div className="group-seclect-file">
                            <div className="group-file">
                                <div className="inner left">
                                    <input className="custom-file" type="file" name="profile" required="" />
                                    <i className="icon-file-pdf"></i>
                                </div>
                                <div className="inner right">
                                    <input className="custom-file" type="file" name="profile" required="" />
                                    <i className="icon-file-doc"></i>
                                </div>
                            </div>
                        </div>
                        <textarea placeholder="Message"></textarea>
                        <div className="group-radio">
                            <input type="radio" /><label>You accept our <a href="#">Terms</a> and <a href="#">Conditions</a> and <a
                                href="#">Privacy Policy</a> </label>
                        </div>
                        <button>Apply Job</button>
                    </form>
                </div>
            </div>
            <div className="menu-mobile-popup">
                <div className="modal-menu__backdrop"></div>
                <div className="widget-filter">


                    <div className="mobile-header">
                        <div id="logo" className="logo">
                            <a href="home-01.html">
                                <img className="site-logo" src="/images/logo.png" alt="Image" />
                            </a>
                        </div>
                        <a className="title-button-group"><i className="icon-close"></i></a>

                    </div>

                    <div className="tf-tab">
                        <div className="menu-tab">
                            <div className="user-tag active">Menu</div>
                            <div className="user-tag">Categories</div>
                        </div>

                        <div className="content-tab">


                            <div className="categories">
                                <div className="sub-categorie-mobile">
                                    <ul className="pop-up">
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-1"></span>Design & Creative</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
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
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-8"></span>Digital Marketing</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
                                                    <ul>
                                                        <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                        <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                        <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                        <li><a href="find-jobs-list.html">Development & IT</a></li>
                                                        <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                    </ul>
                                                </div>
                                                <div className="menu right">
                                                    <ul>
                                                        <li><a href="jobs-single.html">adobe XD</a></li>
                                                        <li><a href="jobs-single.html">Figma</a></li>
                                                        <li><a href="jobs-single.html">BA</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-2"></span>Development & IT</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
                                                    <ul>
                                                        <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                        <li><a href="find-jobs-list.html">Development & IT</a></li>
                                                        <li><a href="find-jobs-list.html">Music & Audio</a></li>
                                                        <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                        <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                    </ul>
                                                </div>
                                                <div className="menu right">
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
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-3"></span>Music & Audio</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
                                                    <ul>
                                                        <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                        <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                        <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                    </ul>
                                                </div>
                                                <div className="menu right">
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
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-4"></span>Finance &
                                                Accounting</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
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
                                                    <ul>
                                                        <li><a href="jobs-single.html">adobe XD</a></li>
                                                        <li><a href="jobs-single.html">Figma</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-5"></span>Programming & Tech</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
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
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-6"></span>Video & Animation</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
                                                    <ul>
                                                        <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                        <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                        <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                        <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                    </ul>
                                                </div>
                                                <div className="menu right">
                                                    <ul>
                                                        <li><a href="jobs-single.html">Adobe Photoshop</a></li>
                                                        <li><a href="jobs-single.html">CSS, Html</a></li>
                                                        <li><a href="jobs-single.html">BA</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-7"></span>Writing &
                                                translation</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
                                                    <ul>
                                                        <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                        <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                        <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                    </ul>
                                                </div>
                                                <div className="menu right">
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

                            </div>


                        </div>

                    </div>



                    {/* <div className="header-customize-item button">
                        <a href="dashboard/candidates-resumes.html">Upload Resume</a>
                    </div> */}

                    <div className="mobile-footer">
                        <div className="icon-infor d-flex aln-center">
                            <div className="icon">
                                <span className="icon-call-calling"><span className="path1"></span><span className="path2"></span><span
                                    className="path3"></span><span className="path4"></span></span>
                            </div>
                            <div className="content">
                                <p>Need help? 24/7</p>
                                <h6><a href="tel:0123456678">001-1234-88888</a></h6>
                            </div>
                        </div>
                        <div className="wd-social d-flex aln-center">
                            <ul className="list-social d-flex aln-center">
                                <li><a href="#"><i className="icon-facebook"></i></a></li>
                                <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                                <li><a href="#"><i className="icon-twitter"></i></a></li>
                                <li><a href="#"><i className="icon-pinterest"></i></a></li>
                                <li><a href="#"><i className="icon-instagram1"></i></a></li>
                                <li><a href="#"><i className="icon-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="boxed">

                <section className="single-job-thumb">
                    <img src="/images/review/singlejob.jpg" alt="images" />
                </section>

                <section className="form-sticky fixed-space">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="wd-job-author stc-em">
                                    <div className="inner-job-left">
                                        <img src={process.env.REACT_APP_API + employer?.img} alt="" className="logo-company" />
                                        <div className="content">
                                            <h3><a href="#">{employer?.title}</a><span className="icon-bolt ms-2"></span></h3>
                                            <div className="job-info">
                                                <span className="icon-map-pin me-2"></span>
                                                <span>{employer?.location}</span>
                                            </div>
                                            <div className="group-btn">


                                            </div>
                                        </div>
                                    </div>
                                    <div className="inner-job-right">

                                        <div className="group-btn">
                                            <Link to={"/employers-review/" + userId}>
                                                <button className="tf-btn-submit btn-popup">Write a review</button>
                                            </Link>
                                            <Link to={'/message?id=' + employer?._id} className="tf-btn">Message</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="inner-employer-section">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-8">
                                <article className="job-article tf-tab single-job single-employer">
                                    <ul className="menu-tab">
                                        <li className={"ct-tab" + (activeMenu == "About" ? " active" : "")} onClick={e => setActiveMenu("About")}>About</li>
                                        <li className={"ct-tab " + (activeMenu == "Jobs" ? " active" : "")} onClick={e => setActiveMenu("Jobs")}>Jobs (2)</li>
                                        <li className={"ct-tab" + (activeMenu == "Reviews" ? " active" : "")} onClick={e => setActiveMenu("Reviews")}>Reviews</li>
                                    </ul>
                                    <div className="content-tab">
                                        <div className={"inner-content" + (activeMenu == "About" ? " " : " d-none")}>
                                            <h5 className='fw-bolder'>About Company</h5>
                                            <h6 className='fw-bold'>Company Name: <span className='fw-light ms-2'>{employer?.title}</span></h6>
                                            {/* <div>{employer?.title}</div> */}
                                            <h6 className='fw-bold'>Description:
                                                <span className='fw-light ms-2'>{employer?.description}</span>
                                            </h6>
                                            <h6 className='fw-bold'>Expertise:
                                                {
                                                    employer?.expertise && employer?.expertise?.map(e =>
                                                        <p key={Math.random()} className='btn btn-outline-success px-4 rounded-pill mx-2'>{e.technology}{console.log(e.technology)}</p>
                                                    )
                                                }
                                                {/* {e.expertise && e.expertise?.map(i =>
                                                                    <li key={Math.random()}><a>{i.technology}</a></li>
                                                                )} */}
                                            </h6>

                                        </div>
                                        <div className={"inner-content" + (activeMenu == "Jobs" ? " " : " d-none")}>
                                            <h5>Job List</h5>

                                            <div className="related-job">
                                                {
                                                    jobList.map(e =>
                                                        <div className="features-job mg-bt-0" key={Math.random()}>
                                                            <div className="job-archive-header">
                                                                <div className="inner-box">
                                                                    <div className="logo-company">
                                                                        <img src="http://127.0.0.1:4000/avtar.jpg" alt="avtar" />
                                                                    </div>
                                                                    <div className="box-content">
                                                                        <Link to={'/job/' + e._id}>
                                                                        <h4><a>{e._id}</a></h4>
                                                                        <h3>
                                                                            <a>{e.title}</a>
                                                                            <span className="icon-bolt"></span>
                                                                        </h3>
                                                                        </Link>
                                                                        <ul>
                                                                            <li><span className="icon-map-pin"></span>Las Vegas, NV 89107, USA</li>
                                                                            <li><span className="icon-calendar"></span>2 days ago</li>
                                                                        </ul>
                                                                        <span className="icon-heart"></span>
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

                                                                </div>
                                                                <div className="job-footer-right">
                                                                    <div className="price">
                                                                        <span className="icon-dolar1"></span>
                                                                        <p>{e.budget} <span className="year">/month</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                            </div>

                                        </div>
                                        <div className={"inner-content" + (activeMenu == "Reviews" ? " " : " d-none")}>


                                            <div className="job-rating">
                                                <h6>reviews</h6>

                                                <ul className="client-review">
                                                    <li className="client-item">
                                                        <div className="content">
                                                            {
                                                                review.map(e =>

                                                                    <div className="top-content" key={Math.random()}>
                                                                        <div className="avatar">
                                                                            <div className="avt">
                                                                                <img src="http://127.0.0.1:4000/avatar.jpg" alt="images" />
                                                                            </div>
                                                                            <div className="infor">
                                                                                <h5><a href="#">{e.user[0]?.firstName}</a><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10Z" fill="#37B853" />
                                                                                    <path d="M8.89644 13.8429L5.64644 10.3563C5.45119 10.1468 5.45119 9.80718 5.64644 9.59769L6.35353 8.8391C6.54879 8.62961 6.86539 8.62961 7.06064 8.8391L9.25 11.1878L13.9394 6.1571C14.1346 5.94763 14.4512 5.94763 14.6465 6.1571L15.3536 6.91569C15.5488 7.12516 15.5488 7.46479 15.3536 7.67428L9.60355 13.8429C9.40828 14.0524 9.0917 14.0524 8.89644 13.8429Z" fill="white" />
                                                                                </svg></h5>
                                                                                <a href="#" className="date">August 13, 2023</a>
                                                                                <ReactStars
                                                                                    value={e.star}
                                                                                    count={5}
                                                                                    activeColor="#ffd700"
                                                                                />
                                                                                <p>{e.feedBack}</p>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                )}
                                                            <a href="#" className="btn-like">Was this helpful? <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                                <path d="M14.0625 5H9.5V2.40625C9.54167 0.802083 9.05208 0 8.03125 0C7.65625 0 7.33333 0.09375 7.0625 0.28125C6.8125 0.447917 6.65625 0.625 6.59375 0.8125L6.5 1.0625C6.45833 1.77083 6.29167 2.42708 6 3.03125C5.70833 3.61458 5.375 4.08333 5 4.4375C4.625 4.79167 4.23958 5.09375 3.84375 5.34375C3.44792 5.59375 3.125 5.77083 2.875 5.875C2.64583 5.95833 2.52083 6 2.5 6V14L3.96875 14.0625C4.65625 14.0625 5.19792 14.1354 5.59375 14.2812C6.01042 14.4062 6.33333 14.5625 6.5625 14.75C6.79167 14.9375 7.05208 15.125 7.34375 15.3125C7.65625 15.5 8.16667 15.6562 8.875 15.7812C9.60417 15.9271 10.5417 16 11.6875 16C12.3333 16 12.9167 15.9167 13.4375 15.75C13.9583 15.5833 14.3854 15.375 14.7188 15.125C15.0521 14.875 15.3333 14.5417 15.5625 14.125C15.7917 13.7083 15.9688 13.3229 16.0938 12.9688C16.2188 12.6146 16.3125 12.1667 16.375 11.625C16.4375 11.0833 16.4688 10.6458 16.4688 10.3125C16.4896 9.95833 16.5 9.52083 16.5 9C16.5 7.6875 16.25 6.69792 15.75 6.03125C15.2708 5.34375 14.7083 5 14.0625 5ZM11.6875 15C10.7083 15 9.89583 14.9479 9.25 14.8438C8.625 14.7188 8.20833 14.6042 8 14.5C7.79167 14.3958 7.55208 14.25 7.28125 14.0625C6.82292 13.7292 6.36458 13.4792 5.90625 13.3125C5.46875 13.1458 4.83333 13.0625 4 13.0625L3.5 13.0312V6.6875C3.89583 6.5 4.27083 6.28125 4.625 6.03125C5 5.76042 5.40625 5.41667 5.84375 5C6.28125 4.5625 6.64583 4.02083 6.9375 3.375C7.25 2.72917 7.4375 2.02083 7.5 1.25C7.58333 1.08333 7.76042 1 8.03125 1C8.15625 1 8.23958 1.02083 8.28125 1.0625C8.44792 1.22917 8.52083 1.67708 8.5 2.40625V5V6H9.5H14.0625C14.4375 6 14.7708 6.27083 15.0625 6.8125C15.3542 7.33333 15.5 8.0625 15.5 9C15.5 11.1042 15.2396 12.6354 14.7188 13.5938C14.2188 14.5312 13.2083 15 11.6875 15ZM0.625 14.875C0.729167 14.9583 0.854167 15 1 15C1.14583 15 1.26042 14.9583 1.34375 14.875C1.44792 14.7708 1.5 14.6458 1.5 14.5V5.53125C1.5 5.40625 1.44792 5.29167 1.34375 5.1875C1.26042 5.08333 1.14583 5.03125 1 5.03125C0.854167 5.03125 0.729167 5.08333 0.625 5.1875C0.541667 5.29167 0.5 5.40625 0.5 5.53125V14.5C0.5 14.6458 0.541667 14.7708 0.625 14.875Z" fill="#6A6A6A" />
                                                            </svg></a>
                                                        </div>
                                                    </li>


                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                </article>

                            </div>
                            <div className="col-lg-4">
                                <div className="cv-form-details po-sticky job-sg">
                                    <div className="map-content">
                                        <iframe className="map-box"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0803768630963!2d72.89526667436085!3d21.228661080884436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa077b7e6b92acf11%3A0xf9e448da46c6d42e!2sFuture%20way%20Institute%20of%20Multimedia!5e0!3m2!1sen!2sin!4v1710497299201!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                    <ul className="list-infor">
                                        <li>
                                            <div className="category">Email</div>
                                            <div className="detail"><a href="#" className="__cf_email__">{employer?.email}</a></div>
                                        </li>
                                        <li>
                                            <div className="category">Mobile</div>
                                            <div className="detail"><a href="#">{employer?.mobile}</a></div>
                                        </li>
                                        <li>
                                            <div className="category">Location</div>
                                            <div className="detail">{employer?.location}</div>
                                        </li>
                                        <li>
                                            <div className="category">Rate</div>
                                            <div className="detail">${employer?.rate}</div>
                                        </li>

                                    </ul>

                                    <div className="wd-social d-flex aln-center">
                                        <span>Socials:</span>
                                        <ul className="list-social d-flex aln-center">
                                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                                            <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                                            <li><a href="#"><i className="icon-twitter"></i></a></li>
                                            <li><a href="#"><i className="icon-pinterest"></i></a></li>
                                            <li><a href="#"><i className="icon-instagram1"></i></a></li>
                                            <li><a href="#"><i className="icon-youtube"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}
