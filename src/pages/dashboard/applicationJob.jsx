import axios from 'axios';
import e from 'cors';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ApplicationJob() {
    let { postId } = useParams();
    const [proposal, setProposal] = useState([])


    function getProposal() {
        fetch(process.env.REACT_APP_API + "/proposal-by-post?postId=" + postId, {

        }).then(e => e.json()).then(res => {
            setProposal(res.data)
            console.log(e);
        }).catch(err => {
            console.log(err);
        })
    }
    function proposalStatus(id, status) {
        axios.post(process.env.REACT_APP_API + "/proposal-accept-reject", {
            id: id,
            status: status
        }).then(e => e.json()).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }
    useEffect(() => {
        getProposal()
    }, [])
    return (
        <>
            <section className="page-title-dashboard">
                <div className="themes-container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 ">
                            <div className="title-dashboard">
                                <div className="title-dash flex2">Applicants Jobs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flat-dashboard-applicants">
                <div className="themes-container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 ">

                            <div className="applicants bg-white">

                                <h3 className="title-appli">Recent Applicants</h3>
                                <div className="table-content">
                                    <div className="wrap-applicants table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Candidates</th>
                                                    <th>BidAmount</th>
                                                    <th>Status</th>
                                                    <th>Payment</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    proposal.map(e =>

                                                        <tr className="file-delete">
                                                            <td>

                                                                <div className="candidates-wrap flex2">
                                                                    <div className="images">
                                                                        <img src="http://127.0.0.1:4000/avatar.jpg" alt="" />
                                                                    </div>
                                                                    <div className="content">
                                                                        <h5 className="fw-6 color-3">{e.user[0].firstName}</h5>
                                                                        <h3>{e.user[0].title}</h3>
                                                                        <div className="now-box flex2">
                                                                            {/* <div className="button-now"><a className="#"> Available now </a></div> */}

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <h5>${e.bidAmount}</h5>
                                                            </td>
                                                            {
                                                                e?.status == "pending" || !e?.status ?
                                                                    <td className='row'>
                                                                        <div className="status-wrap col">
                                                                            <button type='submit' className="button-status color-3" onClick={() => proposalStatus(e._id, "approved")}> Approved</button>
                                                                        </div>
                                                                        <div className="status-wrap col">
                                                                            <button type='submit' className="button-status color-3" onClick={() => proposalStatus(e._id, "rejected")}> Rejected</button>
                                                                        </div>
                                                                    </td> : <td>{e.status}</td>
                                                            }
                                                            <td>

                                                            <div className="status-wrap col">
                                                                <button type='submit' className="button-status color-3"> Payment</button>
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
                            <h5 className="center">©2023 Jobtex. All Rights Reserved.</h5>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
