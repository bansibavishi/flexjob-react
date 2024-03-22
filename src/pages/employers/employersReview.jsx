import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/navbar'
import Footer from '../../layout/footer'
import ReactStars from "react-rating-stars-component";
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

export default function EmployersReview() {


    let { userId } = useParams();
    const [review, setReview] = useState({
        userId: userId,
        feedBack: "",
        star: ""
    })

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };


    function candidateReview(e) {
        e.preventDefault();
        var token = localStorage.getItem('token')
        console.log(review);
        fetch(process.env.REACT_APP_API + "/reviews" ,{
            method: "post",
            headers: {
                "content-type": "application/json",
                Authorization: ' Bearer ' + token
            },
            body: JSON.stringify(review)

        }).then(e => e.json()).then(res => {
            console.log(res);
            if(res.status == true){
                toast.success(res.message)
            }
            else{
                toast.error(res.message)
            }

        }).catch(err => {
            console.log(err);
        })


    }


    return (
        <>


            <div className="boxed">

                <Navbar />
                <section>
                    <div className="wrap-form-rating-page">

                        <div className="wd-form-rating-page">
                            <form onSubmit={candidateReview}>
                                <div className="form-title">
                                    <h1>Please help answer these questions about your employer</h1>
                                    <h4>Your honest responses help other job seekers and it’s anonymous</h4>
                                </div>
                                <div className="form-company">
                                    <img src="http://127.0.0.1:4000/avatar.jpg" alt="" className="logo-company" />
                                    <div className="inner-company-right">
                                        <h3>What is the company name?</h3>
                                        <input type="text"  />
                                    </div>
                                </div>
                                <div className="form-rating">
                                    <h3>Please rate your overall interview experience at the company</h3>
                                    <ReactStars
                                        onChange={e => setReview({ ...review, star: e })} value={review.value}
                                        // onChange={ratingChanged}
                                            count = {5}
                                            size = {24}
                                            activeColor = "#ffd700"
                                                />


                                            {/* <div className="list-rating">
                                        <input type="radio" id="star5" name="rate" value="5" />
                                        <label for="star5" title="text"></label>
                                        <input type="radio" id="star4" name="rate" value="4" />
                                        <label for="star4" title="text"></label>
                                        <input type="radio" id="star3" name="rate" value="3" />
                                        <label for="star3" title="text"></label>
                                        <input type="radio" id="star2" name="rate" value="2" />
                                        <label for="star2" title="text"></label>
                                        <input type="radio" id="star1" name="rate" value="1" />
                                        <label for="star1" title="text"></label>
                                    </div> */}
                                </div>
                                <div className="form-notes">
                                    <h3>What is the best or worst thing about tyhe benefits package at this company?</h3>

                                    <textarea cols="30" rows="10" onChange={e => setReview({ ...review, feedBack: e.target.value })} value={review.feedBack}
                                        placeholder="Tell us abou thing like company perks"></textarea>
                                </div>
                                <button className="tf-btn-submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>

                                    
            </div>
        </>
    )
}
