import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Resume() {

    const [employer, setEmployer] = useState({})
    let { userId } = useParams();


    function getSingleEmployer() {

        fetch(process.env.REACT_APP_API + "/user-by-id/" + userId, {
        }).then(e => e.json()).then(res => {
            setEmployer(res.data)
        })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        getSingleEmployer()
    }, [])
    return (
        <>
            <div className="boxed">


                <section className="bg-f5 breadcrumb-section">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title">
                                    <div className="widget-menu-link">
                                        <ul>
                                            <li><a href="home-01.html">Home</a></li>
                                            <li><a href="#">CV Details</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="candidates-section">
                    <div className="tf-container">


                        <div className="row" >
                            <div className="col-lg-12">
                                <div className="wd-cv-item">
                                    <div className="item-group">
                                        <div className="content-left">
                                            <div className="avatar">
                                                <img src={process.env.REACT_APP_API + employer.img} alt="images" />
                                            </div>
                                            {/* <h6>Expertise</h6> */}
                                        </div>
                                        <div className="content-right">
                                            <div className="profile pb-5">
                                                <h2>{employer.firstName}</h2>
                                                <h4>{employer.email}</h4>
                                                <h6>{employer.title}</h6>
                                                <p className='fs-6'> <span className='fw-bolder' >Address:</span>   {employer.location} </p>
                                                <p className='fs-6'> <span className='fw-bolder' >Phone:</span>   {employer.mobile} </p>
                                            </div>

                                            <h4 className=''>Summary</h4>
                                            <p className='mb-4'>{employer.description}</p>

                                            <h6 className="title-cv mb-1">Skill</h6>
                                            <div className='flex-column'>
                                                {
                                                    employer?.expertise && employer?.expertise?.map(e =>
                                                        <p key={Math.random()} className='btn btn-outline-success rounded-pill m-2'>{e.technology}{console.log(e.technology)}</p>
                                                    )
                                                }
                                            </div>

                                            <h6 className="title-cv mb-3 mt-3">Experience</h6>
                                            <div className="cv-road-map">

                                                {
                                                    employer.workHistory.map(w =>
                                                        <div className="inner">
                                                            <div className="dot-icon"></div>
                                                            <div className="content">
                                                                <h6>{w}</h6>
                                                                {/* <div className="sub-heading">Company name - TOWN</div>
                                                                <ul className="list-dot">
                                                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                                                </ul> */}
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                            </div>

                                        </div>
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
