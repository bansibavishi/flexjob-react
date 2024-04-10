import React from 'react'
import Navbar from '../layout/navbar'
import Footer from '../layout/footer'

export default function Candidate() {
    return (
        <>

           
            <div className="boxed">
                <Navbar />

                <section className="bg-f5 breadcrumb-section">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title">
                                    <div className="widget-menu-link">
                                        <ul>
                                            <li><a href="home-01.html">Home</a></li>
                                            <li><a href="#">Find Candidates</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="form-sticky stc2">
                    <div className="tf-container">
                        <div className="candidate-form job-search-form inner-form-map style2">
                            <form method="post">
                                <div className="row-group-search">
                                    <div className="form-group">
                                        <input type="text" className="input-filter-search" placeholder="Keywords" />
                                        <span className="icon-search search-job icon"></span>
                                    </div>
                                    <div className="form-group location">
                                        <span className="icon-map-pin icon"></span>
                                        <select id="select-location" className="select-location">
                                            <option value="">Location</option>
                                            <option value="">Singapore</option>
                                            <option value="">Japan</option>
                                            <option value="">Korea</option>
                                            <option value="">Italia</option>
                                            <option value="">Canada</option>
                                        </select>
                                    </div>
                                    <div className="form-group st">
                                        <select >
                                            <option value="">Job Title</option>
                                            <option value="">Ux/Ui</option>
                                            <option value="">Designer</option>
                                        </select>
                                    </div>
                                    <div className="form-group st">
                                        <select >
                                            <option value="">Age</option>
                                            <option value="">20</option>
                                            <option value="">30</option>
                                        </select>
                                    </div>
                                    <div className="form-group st">
                                        <select >
                                            <option value="">Salary Estimate</option>
                                            <option value="">Salary Estimate 1</option>
                                            <option value="">Salary Estimate 2</option>
                                        </select>
                                    </div>
                                    <div className="form-group st">
                                        <select >
                                            <option value="">Experience</option>
                                            <option value="">Experience 1</option>
                                            <option value="">Experience 2</option>
                                        </select>
                                    </div>
                                    <div className="form-group-btn">
                                        <button className="btn btn-find">Find Candidates</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>

                <section className="candidates-section">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12 tf-tab">
                                <div className="wd-meta-select-job">

                                    <div className="wd-findjob-filer">
                                        <div className="group-select-display">
                                            <div className="inner menu-tab">
                                                <a className="btn-display active"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path d="M4.5 0H0.500478C0.5 0.380952 0.5 0.596931 0.5 1.33333V14.6667C0.5 15.4031 0.500478 16 0.500478 16H4.5C4.5 16 4.5 15.4031 4.5 14.6667V1.33333C4.5 0.596931 4.5 0.380952 4.5 0Z" fill="white" />
                                                    <path d="M10.5 0H6.50048C6.5 0.380952 6.5 0.596931 6.5 1.33333V14.6667C6.5 15.4031 6.50048 16 6.50048 16H10.5C10.5 16 10.5 15.4031 10.5 14.6667V1.33333C10.5 0.596931 10.5 0.380952 10.5 0Z" fill="white" />
                                                    <path d="M16.5 0H12.5005C12.5 0.380952 12.5 0.596931 12.5 1.33333V14.6667C12.5 15.4031 12.5005 16 12.5005 16H16.5C16.5 16 16.5 15.4031 16.5 14.6667V1.33333C16.5 0.596931 16.5 0.380952 16.5 0Z" fill="white" />
                                                </svg></a>
                                                <a className="btn-display"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path d="M0.5 12.001L0.5 16.0005C0.880952 16.001 1.09693 16.001 1.83333 16.001L15.1667 16.001C15.9031 16.001 16.5 16.0005 16.5 16.0005L16.5 12.001C16.5 12.001 15.9031 12.001 15.1667 12.001L1.83333 12.001C1.09693 12.001 0.880952 12.001 0.5 12.001Z" fill="#A0A0A0" />
                                                    <path d="M0.5 6.00098L0.5 10.0005C0.880952 10.001 1.09693 10.001 1.83333 10.001L15.1667 10.001C15.9031 10.001 16.5 10.0005 16.5 10.0005L16.5 6.00098C16.5 6.00098 15.9031 6.00098 15.1667 6.00098L1.83333 6.00098C1.09693 6.00098 0.880952 6.00098 0.5 6.00098Z" fill="#A0A0A0" />
                                                    <path d="M0.5 0.000976562L0.5 4.0005C0.880952 4.00098 1.09693 4.00098 1.83333 4.00098L15.1667 4.00098C15.9031 4.00098 16.5 4.0005 16.5 4.0005L16.5 0.000975863C16.5 0.000975863 15.9031 0.000975889 15.1667 0.000975921L1.83333 0.000976504C1.09693 0.000976536 0.880952 0.000976546 0.5 0.000976562Z" fill="#A0A0A0" />
                                                </svg></a>

                                            </div>
                                            <p className="nofi-job"> <span>1249</span> candidates recommended for you</p>
                                        </div>
                                        <div className="group-select">
                                            <select>
                                                <option>12 Per Page</option>
                                                <option>1 Per Page</option>
                                                <option>10 Per Page</option>
                                            </select>
                                            <select>
                                                <option>Sort by (Defaut)</option>
                                                <option>New</option>
                                                <option>Last</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-tab">
                                    <div className="inner">
                                        <div className="group-col-2">
                                            <div className="features-job wd-thum-career cl2">
                                                <div className="job-archive-header">
                                                    <div className="career-header-left">
                                                        <img src="images/user/avatar/avt-thumb-01.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                        <div className="career-left-inner">
                                                            <h4>
                                                                <a href="candidate-single.html">Entry Level Network Administrator</a>
                                                            </h4>
                                                            <h3>
                                                                <a href="candidate-single.html">Marvin McKinney</a>
                                                                <span className="icon-bolt"></span>
                                                            </h3>
                                                            <ul className="career-info">
                                                                <li>
                                                                    Available now
                                                                </li>
                                                                <li>
                                                                    <span className="icon-map-pin"></span>
                                                                    New York
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div className="career-header-right">
                                                        <span className="icon-heart"></span>
                                                        <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                    </div>
                                                </div>
                                                <div className="job-archive-footer">
                                                    <div className="career-footer-left">
                                                        <ul className="career-tag">
                                                            <li><a href="#">Blender</a></li>
                                                            <li><a href="#">Sketch</a></li>
                                                            <li><a href="#">Adobe XD</a></li>
                                                            <li><a href="#">Figma</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="carrer-footer-right">

                                                        <span className="icon-dolar1"></span>
                                                        <p>$8000/month</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="features-job wd-thum-career cl2">
                                                <div className="job-archive-header">
                                                    <div className="career-header-left">
                                                        <img src="images/review/can1.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                        <div className="career-left-inner">
                                                            <h4>
                                                                <a href="candidate-single.html">Computational Wizard</a>
                                                            </h4>
                                                            <h3>
                                                                <a href="candidate-single.html">Arlene McCoy</a>
                                                                <span className="icon-bolt"></span>
                                                            </h3>
                                                            <ul className="career-info">
                                                                <li>
                                                                    Available now
                                                                </li>
                                                                <li>
                                                                    <span className="icon-map-pin"></span>
                                                                    Tokyo, Japan
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div className="career-header-right">
                                                        <span className="icon-heart"></span>
                                                        <a href="candidate-single.html" className="tf-btn">View Profile</a>
                                                    </div>
                                                </div>
                                                <div className="job-archive-footer">
                                                    <div className="career-footer-left">
                                                        <ul className="career-tag">
                                                            <li><a href="#">Blender</a></li>
                                                            <li><a href="#">Sketch</a></li>
                                                            <li><a href="#">Adobe XD</a></li>
                                                            <li><a href="#">Figma</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="carrer-footer-right">

                                                        <span className="icon-dolar1"></span>
                                                        <p>$40/hour</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="features-job wd-thum-career cl2">
                                                <div className="job-archive-header">
                                                    <div className="career-header-left">
                                                        <img src="images/review/can2.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                        <div className="career-left-inner">
                                                            <h4>
                                                                <a href="candidate-single.html">Computer Support Specialist</a>
                                                            </h4>
                                                            <h3>
                                                                <a href="candidate-single.html">Floyd Miles</a>
                                                                <span className="icon-bolt"></span>
                                                            </h3>
                                                            <ul className="career-info">
                                                                <li>
                                                                    Available now
                                                                </li>
                                                                <li>
                                                                    <span className="icon-map-pin"></span>
                                                                    Tokyo, Japan
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div className="career-header-right">
                                                        <span className="icon-heart"></span>
                                                        <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                    </div>
                                                </div>
                                                <div className="job-archive-footer">
                                                    <div className="career-footer-left">
                                                        <ul className="career-tag">
                                                            <li><a href="#">Blender</a></li>
                                                            <li><a href="#">Sketch</a></li>
                                                            <li><a href="#">Adobe XD</a></li>
                                                            <li><a href="#">Figma</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="carrer-footer-right">

                                                        <span className="icon-dolar1"></span>
                                                        <p>$300/hour</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="features-job wd-thum-career cl2">
                                                <div className="job-archive-header">
                                                    <div className="career-header-left">
                                                        <img src="images/review/can3.png" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                        <div className="career-left-inner">
                                                            <h4>
                                                                <a href="candidate-single.html">Computer Support Specialist</a>
                                                            </h4>
                                                            <h3>
                                                                <a href="candidate-single.html">Annette Black</a>
                                                                <span className="icon-bolt"></span>
                                                            </h3>
                                                            <ul className="career-info">
                                                                <li>
                                                                    Available now
                                                                </li>
                                                                <li>
                                                                    <span className="icon-map-pin"></span>
                                                                    Tokyo, Japan
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div className="career-header-right">
                                                        <span className="icon-heart"></span>
                                                        <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                    </div>
                                                </div>
                                                <div className="job-archive-footer">
                                                    <div className="career-footer-left">
                                                        <ul className="career-tag">
                                                            <li><a href="#">Blender</a></li>
                                                            <li><a href="#">Sketch</a></li>
                                                            <li><a href="#">Adobe XD</a></li>
                                                            <li><a href="#">Figma</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="carrer-footer-right">

                                                        <span className="icon-dolar1"></span>
                                                        <p>$500/hour</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="features-job wd-thum-career cl2">
                                                <div className="job-archive-header">
                                                    <div className="career-header-left">
                                                        <img src="images/review/can4.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                        <div className="career-left-inner">
                                                            <h4>
                                                                <a href="candidate-single.html">Digital Overlord</a>
                                                            </h4>
                                                            <h3>
                                                                <a href="candidate-single.html">Maverick Nguyen</a>
                                                                <span className="icon-bolt"></span>
                                                            </h3>
                                                            <ul className="career-info">
                                                                <li>
                                                                    Available now
                                                                </li>
                                                                <li>
                                                                    <span className="icon-map-pin"></span>
                                                                    Tokyo, Japan
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div className="career-header-right">
                                                        <span className="icon-heart"></span>
                                                        <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                    </div>
                                                </div>
                                                <div className="job-archive-footer">
                                                    <div className="career-footer-left">
                                                        <ul className="career-tag">
                                                            <li><a href="#">Blender</a></li>
                                                            <li><a href="#">Sketch</a></li>
                                                            <li><a href="#">Adobe XD</a></li>
                                                            <li><a href="#">Figma</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="carrer-footer-right">

                                                        <span className="icon-dolar1"></span>
                                                        <p>$5000/month</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="features-job wd-thum-career cl2">
                                                <div className="job-archive-header">
                                                    <div className="career-header-left">
                                                        <img src="images/review/can5.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                        <div className="career-left-inner">
                                                            <h4>
                                                                <a href="candidate-single.html">Computer Hardware Engineer</a>
                                                            </h4>
                                                            <h3>
                                                                <a href="candidate-single.html">Kathryn Murphy</a>
                                                                <span className="icon-bolt"></span>
                                                            </h3>
                                                            <ul className="career-info">
                                                                <li>
                                                                    Available now
                                                                </li>
                                                                <li>
                                                                    <span className="icon-map-pin"></span>
                                                                    Tokyo, Japan
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div className="career-header-right">
                                                        <span className="icon-heart"></span>
                                                        <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                    </div>
                                                </div>
                                                <div className="job-archive-footer">
                                                    <div className="career-footer-left">
                                                        <ul className="career-tag">
                                                            <li><a href="#">Blender</a></li>
                                                            <li><a href="#">Sketch</a></li>
                                                            <li><a href="#">Adobe XD</a></li>
                                                            <li><a href="#">Figma</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="carrer-footer-right">

                                                        <span className="icon-dolar1"></span>
                                                        <p>$400/day</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="features-job wd-thum-career cl2">
                                                <div className="job-archive-header">
                                                    <div className="career-header-left">
                                                        <img src="images/review/can6.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                        <div className="career-left-inner">
                                                            <h4>
                                                                <a href="candidate-single.html">C3PO – Chief Power Plugs & Patches Officer</a>
                                                            </h4>
                                                            <h3>
                                                                <a href="candidate-single.html">Guy Hawkins</a>
                                                                <span className="icon-bolt"></span>
                                                            </h3>
                                                            <ul className="career-info">
                                                                <li>
                                                                    Available now
                                                                </li>
                                                                <li>
                                                                    <span className="icon-map-pin"></span>
                                                                    Tokyo, Japan
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div className="career-header-right">
                                                        <span className="icon-heart"></span>
                                                        <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                    </div>
                                                </div>
                                                <div className="job-archive-footer">
                                                    <div className="career-footer-left">
                                                        <ul className="career-tag">
                                                            <li><a href="#">Blender</a></li>
                                                            <li><a href="#">Sketch</a></li>
                                                            <li><a href="#">Adobe XD</a></li>
                                                            <li><a href="#">Figma</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="carrer-footer-right">

                                                        <span className="icon-dolar1"></span>
                                                        <p>$300/hour</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="features-job wd-thum-career cl2">
                                                <div className="job-archive-header">
                                                    <div className="career-header-left">
                                                        <img src="images/review/can7.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                        <div className="career-left-inner">
                                                            <h4>
                                                                <a href="candidate-single.html">Database Administrator</a>
                                                            </h4>
                                                            <h3>
                                                                <a href="candidate-single.html">Courtney Henry</a>
                                                                <span className="icon-bolt"></span>
                                                            </h3>
                                                            <ul className="career-info">
                                                                <li>
                                                                    Available now
                                                                </li>
                                                                <li>
                                                                    <span className="icon-map-pin"></span>
                                                                    Tokyo, Japan
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div className="career-header-right">
                                                        <span className="icon-heart"></span>
                                                        <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                    </div>
                                                </div>
                                                <div className="job-archive-footer">
                                                    <div className="career-footer-left">
                                                        <ul className="career-tag">
                                                            <li><a href="#">Blender</a></li>
                                                            <li><a href="#">Sketch</a></li>
                                                            <li><a href="#">Adobe XD</a></li>
                                                            <li><a href="#">Figma</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="carrer-footer-right">

                                                        <span className="icon-dolar1"></span>
                                                        <p>$400/day</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="features-job wd-thum-career cl2">
                                                <div className="job-archive-header">
                                                    <div className="career-header-left">
                                                        <img src="images/review/can8.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                        <div className="career-left-inner">
                                                            <h4>
                                                                <a href="candidate-single.html">Sales Engineer</a>
                                                            </h4>
                                                            <h3>
                                                                <a href="candidate-single.html">Brooklyn Simmons</a>
                                                                <span className="icon-bolt"></span>
                                                            </h3>
                                                            <ul className="career-info">
                                                                <li>
                                                                    Available now
                                                                </li>
                                                                <li>
                                                                    <span className="icon-map-pin"></span>
                                                                    Tokyo, Japan
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div className="career-header-right">
                                                        <span className="icon-heart"></span>
                                                        <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                    </div>
                                                </div>
                                                <div className="job-archive-footer">
                                                    <div className="career-footer-left">
                                                        <ul className="career-tag">
                                                            <li><a href="#">Blender</a></li>
                                                            <li><a href="#">Sketch</a></li>
                                                            <li><a href="#">Adobe XD</a></li>
                                                            <li><a href="#">Figma</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="carrer-footer-right">

                                                        <span className="icon-dolar1"></span>
                                                        <p>$430/hour</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="features-job wd-thum-career cl2">
                                                <div className="job-archive-header">
                                                    <div className="career-header-left">
                                                        <img src="images/review/can9.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                        <div className="career-left-inner">
                                                            <h4>
                                                                <a href="candidate-single.html">Chief Geek</a>
                                                            </h4>
                                                            <h3>
                                                                <a href="candidate-single.html">Cameron Williamson</a>
                                                                <span className="icon-bolt"></span>
                                                            </h3>
                                                            <ul className="career-info">
                                                                <li>
                                                                    Available now
                                                                </li>
                                                                <li>
                                                                    <span className="icon-map-pin"></span>
                                                                    Tokyo, Japan
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                    <div className="career-header-right">
                                                        <span className="icon-heart"></span>
                                                        <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                    </div>
                                                </div>
                                                <div className="job-archive-footer">
                                                    <div className="career-footer-left">
                                                        <ul className="career-tag">
                                                            <li><a href="#">Blender</a></li>
                                                            <li><a href="#">Sketch</a></li>
                                                            <li><a href="#">Adobe XD</a></li>
                                                            <li><a href="#">Figma</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="carrer-footer-right">

                                                        <span className="icon-dolar1"></span>
                                                        <p>200$/day</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <ul className="pagination-job p-top-st1">
                                            <li><a href="#"><i className="icon-keyboard_arrow_left"></i></a></li>
                                            <li><a href="#">1</a></li>
                                            <li className="current"><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#"><i className="icon-keyboard_arrow_right"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="inner">
                                        <div className="features-job wd-thum-career">
                                            <div className="job-archive-header">
                                                <div className="career-header-left">
                                                    <img src="images/user/avatar/avt-thumb-01.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                    <div className="career-left-inner">
                                                        <h4>
                                                            <a href="candidate-single.html">Entry Level Network Administrator</a>
                                                        </h4>
                                                        <h3>
                                                            <a href="candidate-single.html">Marvin McKinney</a>
                                                            <span className="icon-bolt"></span>
                                                        </h3>
                                                        <ul className="career-info">
                                                            <li>
                                                                Available now
                                                            </li>
                                                            <li>
                                                                <span className="icon-map-pin"></span>
                                                                New York
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                                <div className="career-header-right">
                                                    <span className="icon-heart"></span>
                                                    <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                </div>
                                            </div>
                                            <div className="job-archive-footer">
                                                <div className="career-footer-left">
                                                    <ul className="career-tag">
                                                        <li><a href="#">Blender</a></li>
                                                        <li><a href="#">Sketch</a></li>
                                                        <li><a href="#">Adobe XD</a></li>
                                                        <li><a href="#">Figma</a></li>
                                                    </ul>
                                                </div>
                                                <div className="carrer-footer-right">

                                                    <span className="icon-dolar1"></span>
                                                    <p>$8000/month</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="features-job wd-thum-career">
                                            <div className="job-archive-header">
                                                <div className="career-header-left">
                                                    <img src="images/review/can1.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                    <div className="career-left-inner">
                                                        <h4>
                                                            <a href="candidate-single.html">Computational Wizard</a>
                                                        </h4>
                                                        <h3>
                                                            <a href="candidate-single.html">Arlene McCoy</a>
                                                            <span className="icon-bolt"></span>
                                                        </h3>
                                                        <ul className="career-info">
                                                            <li>
                                                                Available now
                                                            </li>
                                                            <li>
                                                                <span className="icon-map-pin"></span>
                                                                Tokyo, Japan
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                                <div className="career-header-right">
                                                    <span className="icon-heart"></span>
                                                    <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                </div>
                                            </div>
                                            <div className="job-archive-footer">
                                                <div className="career-footer-left">
                                                    <ul className="career-tag">
                                                        <li><a href="#">Blender</a></li>
                                                        <li><a href="#">Sketch</a></li>
                                                        <li><a href="#">Adobe XD</a></li>
                                                        <li><a href="#">Figma</a></li>
                                                    </ul>
                                                </div>
                                                <div className="carrer-footer-right">

                                                    <span className="icon-dolar1"></span>
                                                    <p>$40/hour</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="features-job wd-thum-career">
                                            <div className="job-archive-header">
                                                <div className="career-header-left">
                                                    <img src="images/review/can2.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                    <div className="career-left-inner">
                                                        <h4>
                                                            <a href="candidate-single.html">Computer Support Specialist</a>
                                                        </h4>
                                                        <h3>
                                                            <a href="candidate-single.html">Floyd Miles</a>
                                                            <span className="icon-bolt"></span>
                                                        </h3>
                                                        <ul className="career-info">
                                                            <li>
                                                                Available now
                                                            </li>
                                                            <li>
                                                                <span className="icon-map-pin"></span>
                                                                Tokyo, Japan
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                                <div className="career-header-right">
                                                    <span className="icon-heart"></span>
                                                    <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                </div>
                                            </div>
                                            <div className="job-archive-footer">
                                                <div className="career-footer-left">
                                                    <ul className="career-tag">
                                                        <li><a href="#">Blender</a></li>
                                                        <li><a href="#">Sketch</a></li>
                                                        <li><a href="#">Adobe XD</a></li>
                                                        <li><a href="#">Figma</a></li>
                                                    </ul>
                                                </div>
                                                <div className="carrer-footer-right">

                                                    <span className="icon-dolar1"></span>
                                                    <p>$300/hour</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="features-job wd-thum-career">
                                            <div className="job-archive-header">
                                                <div className="career-header-left">
                                                    <img src="images/review/can3.png" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                    <div className="career-left-inner">
                                                        <h4>
                                                            <a href="candidate-single.html">Computer Support Specialist</a>
                                                        </h4>
                                                        <h3>
                                                            <a href="candidate-single.html">Annette Black</a>
                                                            <span className="icon-bolt"></span>
                                                        </h3>
                                                        <ul className="career-info">
                                                            <li>
                                                                Available now
                                                            </li>
                                                            <li>
                                                                <span className="icon-map-pin"></span>
                                                                Tokyo, Japan
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                                <div className="career-header-right">
                                                    <span className="icon-heart"></span>
                                                    <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                </div>
                                            </div>
                                            <div className="job-archive-footer">
                                                <div className="career-footer-left">
                                                    <ul className="career-tag">
                                                        <li><a href="#">Blender</a></li>
                                                        <li><a href="#">Sketch</a></li>
                                                        <li><a href="#">Adobe XD</a></li>
                                                        <li><a href="#">Figma</a></li>
                                                    </ul>
                                                </div>
                                                <div className="carrer-footer-right">

                                                    <span className="icon-dolar1"></span>
                                                    <p>$500/hour</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="features-job wd-thum-career">
                                            <div className="job-archive-header">
                                                <div className="career-header-left">
                                                    <img src="images/review/can4.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                    <div className="career-left-inner">
                                                        <h4>
                                                            <a href="candidate-single.html">Digital Overlord</a>
                                                        </h4>
                                                        <h3>
                                                            <a href="candidate-single.html">Maverick Nguyen</a>
                                                            <span className="icon-bolt"></span>
                                                        </h3>
                                                        <ul className="career-info">
                                                            <li>
                                                                Available now
                                                            </li>
                                                            <li>
                                                                <span className="icon-map-pin"></span>
                                                                Tokyo, Japan
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                                <div className="career-header-right">
                                                    <span className="icon-heart"></span>
                                                    <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                </div>
                                            </div>
                                            <div className="job-archive-footer">
                                                <div className="career-footer-left">
                                                    <ul className="career-tag">
                                                        <li><a href="#">Blender</a></li>
                                                        <li><a href="#">Sketch</a></li>
                                                        <li><a href="#">Adobe XD</a></li>
                                                        <li><a href="#">Figma</a></li>
                                                    </ul>
                                                </div>
                                                <div className="carrer-footer-right">

                                                    <span className="icon-dolar1"></span>
                                                    <p>$5000/month</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="features-job wd-thum-career">
                                            <div className="job-archive-header">
                                                <div className="career-header-left">
                                                    <img src="images/review/can5.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                    <div className="career-left-inner">
                                                        <h4>
                                                            <a href="candidate-single.html">Computer Hardware Engineer</a>
                                                        </h4>
                                                        <h3>
                                                            <a href="candidate-single.html">Kathryn Murphy</a>
                                                            <span className="icon-bolt"></span>
                                                        </h3>
                                                        <ul className="career-info">
                                                            <li>
                                                                Available now
                                                            </li>
                                                            <li>
                                                                <span className="icon-map-pin"></span>
                                                                Tokyo, Japan
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                                <div className="career-header-right">
                                                    <span className="icon-heart"></span>
                                                    <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                </div>
                                            </div>
                                            <div className="job-archive-footer">
                                                <div className="career-footer-left">
                                                    <ul className="career-tag">
                                                        <li><a href="#">Blender</a></li>
                                                        <li><a href="#">Sketch</a></li>
                                                        <li><a href="#">Adobe XD</a></li>
                                                        <li><a href="#">Figma</a></li>
                                                    </ul>
                                                </div>
                                                <div className="carrer-footer-right">

                                                    <span className="icon-dolar1"></span>
                                                    <p>$400/day</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="features-job wd-thum-career">
                                            <div className="job-archive-header">
                                                <div className="career-header-left">
                                                    <img src="images/review/can6.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                    <div className="career-left-inner">
                                                        <h4>
                                                            <a href="candidate-single.html">C3PO – Chief Power Plugs & Patches Officer</a>
                                                        </h4>
                                                        <h3>
                                                            <a href="candidate-single.html">Guy Hawkins</a>
                                                            <span className="icon-bolt"></span>
                                                        </h3>
                                                        <ul className="career-info">
                                                            <li>
                                                                Available now
                                                            </li>
                                                            <li>
                                                                <span className="icon-map-pin"></span>
                                                                Tokyo, Japan
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                                <div className="career-header-right">
                                                    <span className="icon-heart"></span>
                                                    <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                </div>
                                            </div>
                                            <div className="job-archive-footer">
                                                <div className="career-footer-left">
                                                    <ul className="career-tag">
                                                        <li><a href="#">Blender</a></li>
                                                        <li><a href="#">Sketch</a></li>
                                                        <li><a href="#">Adobe XD</a></li>
                                                        <li><a href="#">Figma</a></li>
                                                    </ul>
                                                </div>
                                                <div className="carrer-footer-right">

                                                    <span className="icon-dolar1"></span>
                                                    <p>$300/hour</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="features-job wd-thum-career">
                                            <div className="job-archive-header">
                                                <div className="career-header-left">
                                                    <img src="images/review/can7.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                    <div className="career-left-inner">
                                                        <h4>
                                                            <a href="candidate-single.html">Database Administrator</a>
                                                        </h4>
                                                        <h3>
                                                            <a href="candidate-single.html">Courtney Henry</a>
                                                            <span className="icon-bolt"></span>
                                                        </h3>
                                                        <ul className="career-info">
                                                            <li>
                                                                Available now
                                                            </li>
                                                            <li>
                                                                <span className="icon-map-pin"></span>
                                                                Tokyo, Japan
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                                <div className="career-header-right">
                                                    <span className="icon-heart"></span>
                                                    <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                </div>
                                            </div>
                                            <div className="job-archive-footer">
                                                <div className="career-footer-left">
                                                    <ul className="career-tag">
                                                        <li><a href="#">Blender</a></li>
                                                        <li><a href="#">Sketch</a></li>
                                                        <li><a href="#">Adobe XD</a></li>
                                                        <li><a href="#">Figma</a></li>
                                                    </ul>
                                                </div>
                                                <div className="carrer-footer-right">

                                                    <span className="icon-dolar1"></span>
                                                    <p>$400/day</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="features-job wd-thum-career">
                                            <div className="job-archive-header">
                                                <div className="career-header-left">
                                                    <img src="images/review/can8.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                    <div className="career-left-inner">
                                                        <h4>
                                                            <a href="candidate-single.html">Sales Engineer</a>
                                                        </h4>
                                                        <h3>
                                                            <a href="candidate-single.html">Brooklyn Simmons</a>
                                                            <span className="icon-bolt"></span>
                                                        </h3>
                                                        <ul className="career-info">
                                                            <li>
                                                                Available now
                                                            </li>
                                                            <li>
                                                                <span className="icon-map-pin"></span>
                                                                Tokyo, Japan
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                                <div className="career-header-right">
                                                    <span className="icon-heart"></span>
                                                    <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                </div>
                                            </div>
                                            <div className="job-archive-footer">
                                                <div className="career-footer-left">
                                                    <ul className="career-tag">
                                                        <li><a href="#">Blender</a></li>
                                                        <li><a href="#">Sketch</a></li>
                                                        <li><a href="#">Adobe XD</a></li>
                                                        <li><a href="#">Figma</a></li>
                                                    </ul>
                                                </div>
                                                <div className="carrer-footer-right">

                                                    <span className="icon-dolar1"></span>
                                                    <p>$430/hour</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="features-job wd-thum-career">
                                            <div className="job-archive-header">
                                                <div className="career-header-left">
                                                    <img src="images/review/can9.jpg" alt="images/user/avatar/avt-thumb-01.jpg" className="thumb" />
                                                    <div className="career-left-inner">
                                                        <h4>
                                                            <a href="candidate-single.html">Chief Geek</a>
                                                        </h4>
                                                        <h3>
                                                            <a href="candidate-single.html">Cameron Williamson</a>
                                                            <span className="icon-bolt"></span>
                                                        </h3>
                                                        <ul className="career-info">
                                                            <li>
                                                                Available now
                                                            </li>
                                                            <li>
                                                                <span className="icon-map-pin"></span>
                                                                Tokyo, Japan
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                                <div className="career-header-right">
                                                    <span className="icon-heart"></span>
                                                    <a href="candidate-single.html" className="tf-btn">View Profile</a>

                                                </div>
                                            </div>
                                            <div className="job-archive-footer">
                                                <div className="career-footer-left">
                                                    <ul className="career-tag">
                                                        <li><a href="#">Blender</a></li>
                                                        <li><a href="#">Sketch</a></li>
                                                        <li><a href="#">Adobe XD</a></li>
                                                        <li><a href="#">Figma</a></li>
                                                    </ul>
                                                </div>
                                                <div className="carrer-footer-right">

                                                    <span className="icon-dolar1"></span>
                                                    <p>200$/day</p>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="pagination-job p-top-st1">
                                            <li><a href="#"><i className="icon-keyboard_arrow_left"></i></a></li>
                                            <li><a href="#">1</a></li>
                                            <li className="current"><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#"><i className="icon-keyboard_arrow_right"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}
