import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
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
                      <li><a href="#">Login</a></li>
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
                <h4>Log In</h4>
                <div className="nofi-form">
                  <p>Username: <span>candidate</span> or <span>employer</span> </p>
                  <p>Password: <span>jobtex</span></p>
                </div>
                <form action="https://themesflat.co/html/jobtex/home-01.html">
                  <div className="ip">
                    <label>Username or email address<span>*</span></label>
                    <input type="text" value="" placeholder="Enter Your Email" />
                  </div>
                  <div className="ip">
                    <label>Password<span>*</span></label>
                    <div className="inputs-group auth-pass-inputgroup">
                      <input type="password" className="input-form password-input" placeholder="Password" id="password-input"
                        required="" />
                      <a className="icon-eye-off password-addon" id="password-addon"></a>
                    </div>
                  </div>
                  <div className="group-ant-choice">
                    <div className="sub-ip"><input type="checkbox" />Remember me</div>
                    <Link to="/forgetpass" className="forgot">Fogot password?</Link>
                  </div>
                  
                  <button type="submit">Login</button>
                  <div className="sign-up">Not registered yet? <Link to={"/register"} >Sign Up</Link></div>
                </form>
              </div>
            </div>
          </div>
        </section>

    
    </>
  )
}
