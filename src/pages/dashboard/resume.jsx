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
                                            <div className="profile">
                                                <h2>{employer.firstName}</h2>
                                                <h4>{employer.email}</h4>
                                                <h6>{employer.title}</h6>
                                                <p>{employer.description}</p>
                                            </div>
                                            <h6 className="title-cv">Experience</h6>
                                            
                                            <div className='d-flex flex-column'>
                                                {
                                                    employer?.expertise && employer?.expertise?.map(e =>
                                                        <p key={Math.random()} className='btn btn-outline-success rounded-pill m-2'>{e.technology}{console.log(e.technology)}</p>
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
