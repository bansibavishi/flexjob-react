import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function ResetPass() {
    const[resetPass,setResetPass] = useState({
        password:""
    })
    let { userId,token } = useParams();

    function resetPassword(e) {
        e.preventDefault();
        fetch(process.env.REACT_APP_API + "/reset/" + userId  + "/" + token, {
            method:"post",
            body:JSON.stringify(resetPass),
            headers: {
                "content-type": "application/json"
            }
        }).then(e => e.json()).then(res => {
            console.log(res);
            if(res.status == true)
            {
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
<section className="bg-f5">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title">
                                <div className="widget-menu-link">
                                    <ul>
                                        <li><a href="home-01.html">Home</a></li>
                                        <li><a href="#">Forget Password</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="account-section">
                <div className="tf-container">
                    <div className="row">
                        <div className="wd-form-login">
                            <h4>ResetPassword</h4>
                            <form onSubmit={resetPassword} >
                                <div className="ip">
                                    <label>Reset Password<span>*</span></label>
                                    <input type="Password"  placeholder="Enter Your Password"  onChange={e => setResetPass({ ...resetPass, password: e.target.value })} value={resetPass.password} />
                                </div>
                                <div className="ip">
                                    <label>Confirm Password<span>*</span></label>
                                    <input type="Password"  placeholder="Enter Your Password"  />
                                </div>

                                <button type="submit">Submit</button>
                                <div className="sign-In">Not login yet? <Link to="/login">Sign In</Link> </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


    </>
  )
}
