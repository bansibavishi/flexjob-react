import React from 'react'

export default function Job() {
    return (
        <>
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
                            <span onClick={(se) => save(e._id, se)} className={"border fs-5 p-2 rounded-circle" + (e?.saved ? " icon-save-candidate-green" : " icon-save-candidate")} style={{ position: 'absolute', right: '65px', top: '0px', }}></span>
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
                            <p>{e.budget} <span className="year">/hours</span></p>
                        </div>
                        <p className="days">{e.validity}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
