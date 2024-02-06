import React from 'react'
import Navbar from '../layout/navbar'
import Footer from '../layout/footer'

export default function Candidate() {
    return (
        <>

            <div className="menu-mobile-popup">
                <div className="modal-menu__backdrop"></div>
                <div className="widget-filter">


                    <div className="mobile-header">
                        <div id="logo" className="logo">
                            <a href="home-01.html">
                                <img className="site-logo" src="images/logo.png" alt="Image" />
                            </a>
                        </div>
                        <a className="title-button-group"><i className="icon-close"></i></a>

                    </div>

                    <div className="tf-tab">
                        <div className="menu-tab">
                            <div className="user-tag active">Menu</div>
                            <div className="user-tag">Categories</div>
                        </div>

                        <div className="content-tab">

                            <div className="header-ct-center menu-moblie">
                                <div className="nav-wrap">
                                    <nav className="main-nav mobile">
                                        <ul id="menu-primary-menu" className="menu">
                                            <li className="menu-item menu-item-has-children-mobile">
                                                <a className="iteam-menu">Home</a>
                                                <ul className="sub-menu-mobile">
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="home-01.html">Home Page 01 </a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="Home-02.html">Home Page 02 </a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="home-03.html">Home Page 03 </a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="home-04.html">Home Page 04 </a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="home-05.html">Home Page 05 </a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="home-06.html">Home Page 06 </a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="home-07.html">Home Page 07 </a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="home-08.html">Home Page 08 </a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="home-09.html">Home Page 09 </a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="home-10.html">Home Page 10 </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children-mobile">
                                                <a className="iteam-menu">Find jobs </a>
                                                <ul className="sub-menu-mobile">
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="find-jobs-list.html">List Layout</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="find-jobs-grid.html">Grid Layout</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="find-jobs-list-sidebar.html">List Sidebar</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="find-jobs-grid-sidebar.html">Grid Sidebar</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="find-jobs-list-sidebar-fullwidth.html">List Sidebar FullWidth</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="find-jobs-grid-sidebar-fullwidth.html">Grid Sidebar FullWidth</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="find-jobs-topmap.html">Top Map</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="find-jobs-topmap-sidebar.html">Top Map Sidebar</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="find-jobs-half-map.html">Half Map - V1</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="find-jobs-half-map2.html">Half Map - V2</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="jobs-single.html">Jobs Single - V1</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="jobs-single2.html">Jobs Single - V2</a>

                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="menu-item menu-item-has-children-mobile">
                                                <a className="iteam-menu">Employers</a>
                                                <ul className="sub-menu-mobile">
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="employers-list.html">List Layout</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="employers_grid.html">Grid Layout</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="employers-list-sidebar.html">List Sidebar</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="employers-grid-sidebar.html">Grid Sidebar</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="employers-grid-fullwidth.html">Grid Fullwidth</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="employers-topmap.html">Top Map</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="employers-half-map.html">Half Map</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="employers-single.html">Employers Single - V1</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="employers-single2.html">Employers Single - V2</a>

                                                    </li>

                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="employers-review.html">Employers Reviews</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="employers-not-pound.html">Employers Not Found</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="dashboard/employer-dashboard.html">Employer Dashboard</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children-mobile current-item">
                                                <a className="iteam-menu">Candidates</a>
                                                <ul className="sub-menu-mobile">
                                                    <li className="menu-item menu-item-mobile current-item">
                                                        <a href="candidate.html">List Layout</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="candidate-grid.html">Grid Layout</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="candidate-list-sidebar.html">List Sidebar</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="candidate-top-map.html">Top Map</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="candidate-half-map.html">Half Map</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="candidate-no-available.html">No Available - V1</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="candidate-no-available2.html">No Available - V2</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="candidate-single.html">Candidate Single - V1</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="candidate-single2.html">Candidate Single - V2</a>

                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="sample-cv.html">Sample CV</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="sample-cv-sidebar.html">Sample CV Sidebar</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="cv-details.html">CV Details</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="dashboard/candidates-dashboard.html">Candidates Dashboard</a>

                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children-mobile">
                                                <a className="iteam-menu">Blog</a>
                                                <ul className="sub-menu-mobile">
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="blog.html">Blog List </a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="blog-grid.html">Blog Grid</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="blog-masonry.html">Blog Masonry</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="blog-detail.html">Blog Details- V1</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="blog-detail-01.html">Blog Details- V2</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="blog-detail-side-bar.html">Blog Details Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children-mobile">
                                                <a className="iteam-menu">Pages</a>
                                                <ul className="sub-menu-mobile">
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="about-us.html">About Us</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="accordion-page.html">FAQS</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="term-of-use.html">Terms Of Use</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="pricing.html">Pricing</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="shop.html">Shop List</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="shopping-cart.html">Shopping Cart</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="shop-details.html">Shop Single</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="checkout.html">Checkout</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="login.html">Login</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="create-account.html">Create Account</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="contact-us.html">Contact Us</a>
                                                    </li>
                                                    <li className="menu-item menu-item-mobile">
                                                        <a href="modal.html">Modal</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="categories">
                                <div className="sub-categorie-mobile">
                                    <ul className="pop-up">
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-1"></span>Design & Creative</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
                                                    <ul>
                                                        <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                        <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                        <li><a href="find-jobs-list.html">Development & IT</a></li>
                                                        <li><a href="find-jobs-list.html">Music & Audio</a></li>
                                                        <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                        <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                        <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                    </ul>
                                                </div>
                                                <div className="menu right">
                                                    <ul>
                                                        <li><a href="jobs-single.html">Adobe Photoshop</a></li>
                                                        <li><a href="jobs-single.html">adobe XD</a></li>
                                                        <li><a href="jobs-single.html">Android Developer</a></li>
                                                        <li><a href="jobs-single.html">Figma</a></li>
                                                        <li><a href="jobs-single.html">CSS, Html</a></li>
                                                        <li><a href="jobs-single.html">BA</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-8"></span>Digital Marketing</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
                                                    <ul>
                                                        <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                        <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                        <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                        <li><a href="find-jobs-list.html">Development & IT</a></li>
                                                        <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                    </ul>
                                                </div>
                                                <div className="menu right">
                                                    <ul>
                                                        <li><a href="jobs-single.html">adobe XD</a></li>
                                                        <li><a href="jobs-single.html">Figma</a></li>
                                                        <li><a href="jobs-single.html">BA</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-2"></span>Development & IT</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
                                                    <ul>
                                                        <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                        <li><a href="find-jobs-list.html">Development & IT</a></li>
                                                        <li><a href="find-jobs-list.html">Music & Audio</a></li>
                                                        <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                        <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                    </ul>
                                                </div>
                                                <div className="menu right">
                                                    <ul>
                                                        <li><a href="jobs-single.html">adobe XD</a></li>
                                                        <li><a href="jobs-single.html">Android Developer</a></li>
                                                        <li><a href="jobs-single.html">Adobe Photoshop</a></li>
                                                        <li><a href="jobs-single.html">CSS, Html</a></li>
                                                        <li><a href="jobs-single.html">BA</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-3"></span>Music & Audio</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
                                                    <ul>
                                                        <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                        <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                        <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                    </ul>
                                                </div>
                                                <div className="menu right">
                                                    <ul>
                                                        <li><a href="jobs-single.html">Android Developer</a></li>
                                                        <li><a href="jobs-single.html">Adobe Photoshop</a></li>
                                                        <li><a href="jobs-single.html">adobe XD</a></li>
                                                        <li><a href="jobs-single.html">Figma</a></li>
                                                        <li><a href="jobs-single.html">BA</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-4"></span>Finance &
                                                Accounting</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
                                                    <ul>
                                                        <li><a href="find-jobs-list.html">Development & IT</a></li>
                                                        <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                        <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                        <li><a href="find-jobs-list.html">Music & Audio</a></li>
                                                        <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                        <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                    </ul>
                                                </div>
                                                <div className="menu right">
                                                    <ul>
                                                        <li><a href="jobs-single.html">adobe XD</a></li>
                                                        <li><a href="jobs-single.html">Figma</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-5"></span>Programming & Tech</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
                                                    <ul>
                                                        <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                        <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                        <li><a href="find-jobs-list.html">Music & Audio</a></li>
                                                        <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                        <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                        <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                    </ul>
                                                </div>
                                                <div className="menu right">
                                                    <ul>
                                                        <li><a href="jobs-single.html">Adobe Photoshop</a></li>
                                                        <li><a href="jobs-single.html">adobe XD</a></li>
                                                        <li><a href="jobs-single.html">Figma</a></li>
                                                        <li><a href="jobs-single.html">CSS, Html</a></li>
                                                        <li><a href="jobs-single.html">BA</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-6"></span>Video & Animation</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
                                                    <ul>
                                                        <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                        <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                        <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                        <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                    </ul>
                                                </div>
                                                <div className="menu right">
                                                    <ul>
                                                        <li><a href="jobs-single.html">Adobe Photoshop</a></li>
                                                        <li><a href="jobs-single.html">CSS, Html</a></li>
                                                        <li><a href="jobs-single.html">BA</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="categories-mobile">
                                            <a href="#"><span className="icon-categorie-7"></span>Writing &
                                                translation</a>
                                            <div className="group-menu-category-mobile">
                                                <div className="menu left">
                                                    <ul>
                                                        <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                        <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                        <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                    </ul>
                                                </div>
                                                <div className="menu right">
                                                    <ul>
                                                        <li><a href="jobs-single.html">Figma</a></li>
                                                        <li><a href="jobs-single.html">CSS, Html</a></li>
                                                        <li><a href="jobs-single.html">BA</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>


                        </div>

                    </div>



                    <div className="header-customize-item button">
                        <a href="dashboard/candidates-resumes.html">Upload Resume</a>
                    </div>

                    <div className="mobile-footer">
                        <div className="icon-infor d-flex aln-center">
                            <div className="icon">
                                <span className="icon-call-calling"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
                            </div>
                            <div className="content">
                                <p>Need help? 24/7</p>
                                <h6><a href="tel:0123456678">001-1234-88888</a></h6>
                            </div>
                        </div>
                        <div className="wd-social d-flex aln-center">
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
