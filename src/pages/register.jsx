import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
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
                            <li><a href="#">Create Account</a></li>
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
              <div className="wd-form-login tf-tab">
                    <h4>Create a free account</h4>
                    <ul className="menu-tab">
                        <li className="ct-tab active">Candidate</li>
                        <li className="ct-tab">Employer</li>
                    </ul>
                    <div className="content-tab">
                        <div className="inner">
                            <form action="https://themesflat.co/html/jobtex/home-01.html">
                                <div className="ip">
                                    <label >Username or email address<span>*</span></label>
                                    <input type="text"   value="" placeholder="Enter Your Email"/>
                                </div>
                                <div className="ip">
                                    <label >Password<span>*</span></label>
                                    <div className="inputs-group auth-pass-inputgroup">
                                        <input type="password" className="input-form password-input" value="userabcdefg123" placeholder="Password" required=""/>
                                        <a className="icon-eye-off password-addon"></a>
                                    </div>
                                </div>
                                <div className="ip">
                                    <label >Confirm Password<span>*</span></label>
                                    <div className="inputs-group auth-pass-inputgroup">
                                        <input type="password" className="input-form password-input" value="userabcdefg123" placeholder="Password" required=""/>
                                        <a className="icon-eye-off password-addon"></a>
                                    </div>
                                </div>
                                <div className="group-ant-choice st">
                                  <div className="sub-ip"><input type="checkbox"/>I agree to the <a href="#">Terms of User</a></div>
                                </div>
                                <button type="submit">Register</button>
                                <div className="sign-up">Already have an account ?<Link to={"/login"}>Login Here</Link></div>
                            </form>
                        </div>
                        {/* <div className="inner">
                            <form action="https://themesflat.co/html/jobtex/get">
                                <div className="ip">
                                    <label >Username or email address<span>*</span></label>
                                    <input type="text"   value="Tony Nguyen" placeholder="Name"/>
                                </div>
                                <div className="ip">
                                    <label >Password<span>*</span></label>
                                    <div className="inputs-group auth-pass-inputgroup">
                                        <input type="password" className="input-form password-input" value="userabcdefg123" placeholder="Password" required=""/>
                                        <a className="icon-eye-off password-addon"></a>
                                    </div>
                                </div>
                                <div className="ip">
                                    <label >Confirm Password<span>*</span></label>
                                    <div className="inputs-group auth-pass-inputgroup">
                                        <input type="password" className="input-form password-input" value="userabcdefg123" placeholder="Password" required=""/>
                                        <a className="icon-eye-off password-addon"></a>
                                    </div>
                                </div>
                                <div className="group-ant-choice st">
                                  <div className="sub-ip"><input type="checkbox"/>I agree to the <a href="#">Terms of User</a></div>
                                </div>
                                <button>Register</button>
                                <div className="sign-up">Already have an account?<a href="#">Login Here</a></div>
                            </form>
                        </div> */}
                    </div>
                   
              </div>
            </div>
        </div>
  </section>


   </>
  )
}
