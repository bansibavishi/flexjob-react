import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

export default function JobSingle() {

    const [job, setJob] = useState({})
    const [modal, setModal] = useState(false)
    const [purposer, setpurposer] = useState([])
    const [activeMenu, setActiveMenu] = useState('About')
    let { postId } = useParams();
    const cUser = useSelector(state => state.user)

    const [applyJob, setApplyJob] = useState(
        {
            postId: postId,
            description: "",
            bidAmount: ""
        }
    )

    function getjob() {
        var token = localStorage.getItem('token')
        fetch(process.env.REACT_APP_API + "/post-by-id/" + postId, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(e => e.json()).then(res => {
            setJob(res.data)
        })
            .catch(err => {
                console.log(err);
            })
    }

    function apply(e) {
        e.preventDefault();
        var token = localStorage.getItem('token')
        fetch(process.env.REACT_APP_API + "/proposal", {
            method: "post",
            body: JSON.stringify(applyJob),
            headers: {
                "content-type": "application/json",
                Authorization: 'Bearer ' + token
            }
        }).then(e => e.json()).then(res => {
            console.log(res);

            if (res.status == true) {
                toast.success(res.message)
                setModal(false)
            }
            else {
                toast.error(res.message)
            }

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
                es.target.classList.add('text-primary')
            } else {
                es.target.classList.remove('text-primary')
            }
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }

    function getpurposer() {
        fetch(process.env.REACT_APP_API + "/proposal-by-post?postId=" + postId, {

        }).then(e => e.json()).then(res => {
            setpurposer(res.data)
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getjob()
        getpurposer()
    }, [])

    return (
        <>
            <div className="boxed">
                <section className="single-job-thumb">
                    <img src="/images/review/singlejob.jpg" alt="images" />
                </section>

                <section className="form-sticky fixed-space">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="wd-job-author2">
                                    <div className="content-left">
                                        <div className="thumb">
                                            <img src={process.env.REACT_APP_API + (job?.user && job?.user[0]?.img)} alt="logo" />
                                        </div>
                                        <div className="content">
                                            <Link to={"/employers/" + (job?.user && job?.user[0]?._id)} className="category">{job?.user && job?.user[0]?.firstName}</Link>
                                            <h6><a href="#">{job.title}<span className="icon-bolt"></span></a></h6>
                                            <ul className="job-info">
                                                <li>
                                                    <span>{job?.user && job?.user[0]?.location}</span></li>
                                                <li><span className="icon-calendar"></span>
                                                    <span>2 days ago</span></li>
                                            </ul>
                                            <ul className="tags">
                                                {job.expertise && job.expertise?.map(i =>
                                                    <li key={Math.random()}><a href="#">{i.technology}</a></li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content-right">
                                        <div className="top">
                                            <span onClick={(se) => save(job._id, se)} className={"icon-save-candidate wishlist" + (job?.saved ? " text-danger" : "")}></span>
                                            <span onClick={(se) => like(job._id, se)} className={"icon-heart wishlist" + (job?.liked ? " text-danger" : "")}></span>
                                                {
                                                    cUser?.type != "employer" && <a className="btn btn-popup" onClick={e => { setModal(true); }}><i className="icon-send"></i>Apply Now</a>
                                                }

                                        </div>
                                        <div className="bottom">


                                            <div className="price">
                                                <span className="icon-dollar"></span>
                                                <p>{job.budget} <span className="year">/hours</span></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="inner-jobs-section">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-8">
                                <article className="job-article tf-tab single-job">
                                    <ul className="menu-tab">
                                        <li className={"ct-tab" + (activeMenu == "About" ? " active" : "")} onClick={e => setActiveMenu("About")}>About</li>


                                    </ul>
                                    <div className="content-tab">
                                        <div className={"inner-content" + (activeMenu == "About" ? " " : " d-none")}>
                                            <h5>Full Job Description</h5>

                                            <p className="mg-19">{job.description}
                                            </p>

                                        </div>
                                        <div className={"inner-content" + (activeMenu == "Reviews" ? " " : " d-none")}>
                                            <h5>Full Reviews</h5>

                                            <div className="job-rating">

                                                <ul className="client-review">
                                                    <li className="client-item">
                                                        <div className="content">
                                                            {
                                                                purposer.map(e =>

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

                                                                                <a href="#" className="date">{e.description}</a>
                                                                                <div>BidAmount:<span>${e.bidAmount}</span></div>


                                                                                <p></p>
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
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.453092836291!2d90.47477022812872!3d23.77494577893369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1627293157601!5m2!1svi!2s"
                                            allowfullscreen="" loading="lazy"></iframe>

                                    </div>
                                    <ul className="list-infor">
                                        <li><div className="category">Title</div><div className="detail">{job?.user && job?.user[0]?.title}</div></li>
                                        <li><div className="category">Email</div><div className="detail"><a href="#">{job?.user && job?.user[0]?.email}</a></div></li>
                                        <li><div className="category">Mobile</div><div className="detail">{job?.user && job?.user[0]?.mobile}</div></li>
                                        <li><div className="category">Location</div><div className="detail">{job?.user && job?.user[0]?.location}</div></li>
                                        <li><div className="category">rate</div><div className="detail">{job?.user && job?.user[0]?.rate}</div></li>
                                    </ul>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <div className={"wd-popup-job-apply" + (modal ? " modal-menu--open" : "")}>
                <div className="modal-menu__backdrop"></div>
                <div className="content">
                    <div className='row'>

                        <h6 className='col-10 text-start' >Apply For This Job</h6>
                        <IoClose className='col-2' fontSize={30} onClick={e => setModal(false)} />
                    </div>

                    <form onSubmit={e => apply(e)}>
                        <div>

                            <label className="label-text">Description<span>*</span></label>
                            <input type="text" placeholder="Description" onChange={e => setApplyJob({ ...applyJob, description: e.target.value })} value={applyJob.description} required="" />
                        </div>
                        <div>

                            <label className="label-text">Bid-Amount<span>*</span></label>
                            <input type="text" placeholder="Bid-Amount" onChange={e => setApplyJob({ ...applyJob, bidAmount: e.target.value })} value={applyJob.bidAmount} required="" />
                        </div>

                        <button>Apply</button>
                    </form>
                </div>
            </div>


        </>
    )
}

