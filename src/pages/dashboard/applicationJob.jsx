import axios from 'axios';
import e from 'cors';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useRazorpay from "react-razorpay";
import { toast } from 'react-toastify';

export default function ApplicationJob() {
    let { postId } = useParams();
    const [proposal, setProposal] = useState([])
    const [Razorpay] = useRazorpay();


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
        }).then(res => {
            getProposal()
            console.log(res);
        }).catch(err => {
            console.log(err);
        })

    }

    async function paymentMethod(proposalId) {

        var token = localStorage.getItem('token')

        var order = await axios.post(process.env.REACT_APP_API + "/create-order", { proposalId: proposalId }, { headers: { Authorization: 'Bearer ' + token } })
            .catch(err => { console.log(err); })
        console.log(order);

        if (order.data.status !== "created") return toast.error(order.data?.error?.description);

        const options = {
            key: "rzp_test_GFjWtFrV9orbTZ", // Enter the Key ID generated from the Dashboard
            amount: order.data.amount,
            amount_due: order.data.amount_due,
            amount_paid: order.data.amount_paid,
            attempts: order.data.attempts,
            currency: order.data.currency,
            entity: order.data.entity,
            name: "Job Place",
            description: "Test Transaction",
            image: "/images/logo.png",
            order_id: order.data.id,
            handler:  async function (response) {
                console.log(response.razorpay_payment_id);
                console.log(response.razorpay_order_id);
                console.log(response.razorpay_signature);
                axios.post(process.env.REACT_APP_API + "/verify-order", {
                    payment_id:response.razorpay_payment_id,
                    order_id:response.razorpay_order_id,
                    razorpay_signature:response.razorpay_signature
                }
                ).then(res => {
                    if(res.data.success == true)
                    {
                        toast.success(res.data.message)
                    }
                    else {
                        toast.error(res.data.message)
                    }
                }).catch(err => {
                    console.log(err);
                })

            },
            prefill: {
                name: "Piyush Garg",
                email: "youremail@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzpay = new Razorpay(options);
        rzpay.open();

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
                                                                    </td> : <td> <button type='submit' className="button-status color-3 mt-5">{e.status}</button></td>
                                                            }
                                                            {
                                                              e.status == "approved" ?

                                                            <td>

                                                                <div className="status-wrap col">
                                                                    <button type='submit' className="button-status color-3" onClick={() => paymentMethod(e._id)}> Payment</button>
                                                                </div>
                                                            </td> :""
                                                            }

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
                            <h5 className="center">©2023 JobPlace. All Rights Reserved.</h5>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
