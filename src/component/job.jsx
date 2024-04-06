import React from 'react'
import { Link } from 'react-router-dom'



export default function JobCmp({ e }) {


    function like(likeId, es) {
        // console.log(es);
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
            // console.log(es.target);
            if (res.save == true) {
                es.target.classList.add('icon-save-candidate-green')
                es.target.classList.remove('icon-save-candidate')
            } else {
                es.target.classList.add('icon-save-candidate')
                es.target.classList.remove('icon-save-candidate-green')
            }
        }).catch(err => {
            console.log(err);
        })

    }


    return (
        <>
            <div className="features-job cl2" key={Math.random()}>
                <div className="job-archive-header">
                    <div className="inner-box">
                        <div className="logo-company">
                            <img src={process.env.REACT_APP_API + e.user[0].img} alt="avtar" />
                        </div>
                        <div className="box-content">
                            <Link to={"/employers/" +( e?.user &&  e?.user[0]?._id) }>

                                <h4>
                                    {e.user[0].firstName}
                                </h4>
                            </Link>
                            <Link to={'/job/' + e._id} >
                                <h3>
                                    {e.title}
                                    <span className="icon-bolt ms-2"></span>
                                </h3>
                            </Link>
                            <ul>
                                <li>
                                    <span className="icon-map-pin me-2"></span>
                                    {e.description}
                                </li>
                                <li>
                                    <span className="icon-calendar me-2"></span>
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

                    </div>
                    <div className="job-footer-right">
                        <div className="price">
                            <span className="icon-dolar1"></span>
                            <p>{e.budget} <span className="year">/Month</span></p>
                        </div>
                        <p className="days">{e.validity}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
