import React from 'react'

export default function Footer() {

    return (
        <footer className="footer">
            <div className="top-footer">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-2 col-md-4">
                            <div className="footer-logo">
                                <img src="/images/logo2.png" alt="images" />
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-8">
                            <div className="wd-social d-flex aln-center">
                                <span>Follow Us:</span>
                                <ul className="list-social d-flex aln-center">
                                    <li><a href="#"><i className="icon-facebook"></i></a></li>
                                    <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                                    <li><a href="#"><i className="icon-twitter"></i></a></li>
                                    <li><a href="#"><i className="icon-pinterest"></i></a></li>
                                    <li><a href="#"><i className="icon-instagram1"></i></a></li>
                                    <li><a href="#"><i className="icon-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inner-footer">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-cl-1">
                                <div className="icon-infor d-flex aln-center">
                                    <div className="icon">
                                        <span className="icon-call-calling"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
                                    </div>
                                    <div className="content">
                                        <p>Need help? 24/7</p>
                                        <h6><a href="tel:0123456678">001-1234-88888</a></h6>
                                    </div>
                                </div>
                                <p>Job Searching Just Got Easy. Use Jobtex to run a hiring site and earn money in the process!</p>
                                {/* <div className="ft-icon"> <i className="icon-map-pin"></i> 101 E 129th St, East Chicago, IN 46312, US</div> */}
                                {/* <form action="#" id="subscribe-form">
											<input type="email" placeholder="Your email address" required="" id="subscribe-email" />
											<button className="tf-button" type="submit" id="subscribe-button"><i className="icon-paper-plane-o"></i></button>
										</form> */}
                            </div>
                        </div>


                        {/* <div className="col-lg-2 col-md-4 col-6">
									<div className="footer-cl-5">
										<h6 className="ft-title">
											Download App
										</h6>
										<ul className="ft-download">
											<li> <a href="#"><img src="images/review/btn3.png" alt="images" /></a></li>
											<li> <a href="#"><img src="images/review/btn4.png" alt="images" /></a></li>
										</ul>


									</div>
								</div> */}
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="bt-left">
                                <div className="copyright">©2024 Job Place</div>
                                <span className="select-language">
                                    {/* <select className="image-select">
												<option data-thumbnail="images/review/flag.png">English</option>
												<option data-thumbnail="images/review/flag3.png">USA</option>
												<option data-thumbnail="images/review/flag2.png">VN</option>
											</select> */}
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <ul className="menu-bottom d-flex aln-center">
                                <li><a href="term-of-use.html">Terms Of Services</a> </li>
                                <li><a href="pricing.html">Privacy Policy</a> </li>
                                <li><a href="contact-us.html">Cookie Policy</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
