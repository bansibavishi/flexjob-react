import React from 'react'
import Navbar from '../layout/navbar'
import Footer from '../layout/footer'
export default function JobSingle() {
    return (
        <>
            <div className="wd-popup-job-apply">
                <div className="modal-menu__backdrop"></div>
                <div className="content">
                    <h6>Apply For This Job</h6>
                    <form action="https://themesflat.co/html/jobtex/get">
                        <label className="label-text">Email<span>*</span></label>
                        <input type="text" placeholder="Email" required />
                        <div className="group-radio">
                            <input type="radio" /><label>You accept our <a href="#">Terms</a>  and <a href="#">Conditions</a>  and <a href="#">Privacy Policy</a> </label>
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>


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
                                            <li className="menu-item menu-item-has-children-mobile  current-item">
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
                                                    <li className="menu-item menu-item-mobile current-item">
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
                                                    <li className="menu-item">
                                                        <a href="employers-list.html">List Layout</a>

                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="employers_grid.html">Grid Layout</a>

                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="employers-list-sidebar.html">List Sidebar</a>

                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="employers-grid-sidebar.html">Grid Sidebar</a>

                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="employers-grid-fullwidth.html">Grid Fullwidth</a>

                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="employers-topmap.html">Top Map</a>

                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="employers-half-map.html">Half Map</a>

                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="employers-single.html">Employers Single - V1</a>

                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="employers-single2.html">Employers Single - V2</a>

                                                    </li>

                                                    <li className="menu-item">
                                                        <a href="employers-review.html">Employers Reviews</a>

                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="employers-not-pound.html">Employers Not Found</a>
                                                    </li>
                                                    <li className="menu-item">
                                                        <a href="dashboard/employer-dashboard.html">Employer Dashboard</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children-mobile">
                                                <a className="iteam-menu">Candidates</a>
                                                <ul className="sub-menu-mobile">
                                                    <li className="menu-item menu-item-mobile">
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
                <section className="single-job-thumb">
                    <img src="images/review/singlejob.jpg" alt="images" />
                </section>

                <section className="form-sticky fixed-space">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="wd-job-author2">
                                    <div className="content-left">
                                        <div className="thumb">
                                            <img src="images/logo-company/cty4.png" alt="logo" />
                                        </div>
                                        <div className="content">
                                            <a href="#" className="category">Rockstar Games New York</a>
                                            <h6><a href="#">Senior UI/UX Designer <span className="icon-bolt"></span></a></h6>
                                            <ul className="job-info">
                                                <li><span className="icon-map-pin"></span>
                                                    <span>Las Vegas, NV 89107, USA</span></li>
                                                <li><span className="icon-calendar"></span>
                                                    <span>2 days ago</span></li>
                                            </ul>
                                            <ul className="tags">
                                                <li><a href="#">Full-time</a></li>
                                                <li><a href="#">Remote</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="content-right">
                                        <div className="top">
                                            <a href="#" className="share"><i className="icon-share2"></i></a>
                                            <a href="#" className="wishlist"><i className="icon-heart"></i></a>
                                            <a className="btn btn-popup"><i className="icon-send"></i>Apply Now</a>
                                        </div>
                                        <div className="bottom">

                                            <div className="gr-rating">
                                                <p>32 days left to apply</p>
                                                <ul className="list-star">
                                                    <li className="icon-star-full"></li>
                                                    <li className="icon-star-full"></li>
                                                    <li className="icon-star-full"></li>
                                                    <li className="icon-star-full"></li>
                                                    <li className="icon-star-full"></li>
                                                </ul>
                                            </div>
                                            <div className="price">
                                                <span className="icon-dollar"></span>
                                                <p>$83,000 - $110,000 <span className="year">/year</span></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="inner-jobs-section">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-8">
                                <article className="job-article tf-tab single-job">
                                    <ul className="menu-tab">
                                        <li className="ct-tab active">About</li>
                                        <li className="ct-tab">Jobs (2)</li>
                                        <li className="ct-tab">reviews</li>
                                    </ul>
                                    <div className="content-tab">
                                        <div className="inner-content">
                                            <h5>Full Job Description</h5>
                                            <p>Are you a User Experience Designer with a track record of delivering intuitive digital experiences that
                                                drive results? Are you a strategic storyteller and systems thinker who can concept and craft smart,
                                                world-class campaigns across a variety of mediums?
                                            </p>
                                            <p className="mg-19">Deloitte's Green Dot Agency is looking to add a Lead User Experience Designer to our
                                                experience design team. We want a passionate creative who's inspired by new trends and emerging
                                                technologies, and is able to integrate them into memorable user experiences. A problem solver who is
                                                entrepreneurial, collaborative, hungry, and humble; can deliver beautifully designed, leading-edge
                                                experiences under tight deadlines; and who has demonstrated proven expertise.
                                            </p>
                                            <h6>The Work You'll Do:</h6>
                                            <ul className="list-dot">
                                                <li> Support the Creative Directors and Associate Creative Directors of experience design to concept and
                                                    oversee the production of bold, innovative, award-winning campaigns and digital experiences.</li>
                                                <li> Make strategic and tactical UX decisions related to design and usability as well as features and
                                                    functions.</li>
                                                <li> Creates low- and high-fidelity wireframes that represent a user's journey.</li>
                                                <li> Effectively pitch wireframes to and solutions to stakeholders. You'll be the greatest advocate for
                                                    our work, but you'll also listen and internalize feedback so that we can come back with creative that
                                                    exceeds expectations.</li>
                                            </ul>
                                            <h6>What you'll bring:</h6>
                                            <ul className="list-dot mg-bt-15">
                                                <li>Passion for Human-Centered Design-a drive to make interactive technology better for people.</li>
                                                <li>Thorough knowledge of UX/UI best practices.</li>
                                                <li>Understanding of brand identity and working within a defined design system as well as contributing
                                                    to it.</li>
                                                <li>A mastery of craft. You dream about color, typography, and interaction design every day. You are
                                                    proficient using tools like Figma and Adobe XD. You can efficiently use your skill set to develop new
                                                    designs within existing and new visual systems and design languages.</li>
                                                <li>A portfolio which highlights strong understanding of UX design including but not limited to: user
                                                    flows, IA, and translating customer research, analytics, and insights into wireframes and
                                                    high-fidelity designs.</li>
                                                <li>Possess problem-solving skills, an investigative mentality, and a proactive nature-committed to
                                                    delivering solutions.</li>
                                                <li>Possess problem-solving skills</li>
                                            </ul>
                                            <h6>Qualifications:</h6>
                                            <ul className="list-dot mg-bt-15">
                                                <li>Bachelor's degree preferred, or equivalent experience.</li>
                                                <li>At least 5-8 years of experience with UX and UI design.</li>
                                                <li>2 years of experience with design thinking or similar framework that focuses on defining users'
                                                    needs early.</li>
                                                <li>Strong portfolio showing expert concept, layout, and typographic skills, as well as creativity and
                                                    ability to adhere to brand standards.</li>
                                                <li>Expertise in Figma, Adobe Creative Cloud suite, Microsoft suite.</li>
                                                <li>Ability to collaborate well with cross-disciplinary agency team and stakeholders at all levels.</li>
                                                <li>Forever learning: Relentless desire to learn and leverage the latest web technologies.</li>
                                                <li>Detail-oriented: You must be highly organized, be able to multi-task, and meet tight deadlines.</li>
                                                <li>Independence: The ability to make things happen with limited direction. Excellent proactive
                                                    attitude, take-charge personality, and "can-do" demeanor.</li>
                                                <li>Proficiency with Front-End UI technologies a bonus but not necessary (such as HTML, CSS,
                                                    JavaScript).</li>
                                            </ul>
                                            <p>For individuals assigned and/or hired to work in Colorado or Nevada, Deloitte is required by law to
                                                include a reasonable estimate of the compensation range for this role. This compensation range is
                                                specific to the State of Colorado and the State of Nevada and takes into account the wide range of
                                                factors that are considered in making compensation decisions including but not limited to skill sets;
                                                experience and training; licensure and certifications; and other business and organizational needs. The
                                                disclosed range estimate has not been adjusted for the applicable geographic differential associated
                                                with the location at which the position may be filled. At Deloitte, it is not typical for an individual
                                                to be hired at or near the top of the range for their role and compensation decisions are dependent on
                                                the facts and circumstances of each case. A reasonable estimate of the current range is $86425- $177470.
                                            </p>
                                            <p>You may also be eligible to participate in a discretionary annual incentive program, subject to the
                                                rules governing the program, whereby an award, if any, depends on various factors, including, without
                                                limitation, individual and organizational performance.
                                            </p>
                                            <div className="post-navigation d-flex aln-center">
                                                <div className="wd-social d-flex aln-center">
                                                    <span>Social Profiles:</span>
                                                    <ul className="list-social d-flex aln-center">
                                                        <li><a href="#"><i className="icon-facebook"></i></a></li>
                                                        <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                                                        <li><a href="#"><i className="icon-twitter"></i></a></li>
                                                        <li><a href="#"><i className="icon-pinterest"></i></a></li>
                                                        <li><a href="#"><i className="icon-instagram1"></i></a></li>
                                                        <li><a href="#"><i className="icon-youtube"></i></a></li>
                                                    </ul>
                                                </div>
                                                <a href="#" className="frag-btn"> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15"
                                                    viewBox="0 0 14 15" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M0 3C0 2.20435 0.316071 1.44129 0.87868 0.87868C1.44129 0.316071 2.20435 0 3 0H13C13.1857 0 13.3678 0.0517147 13.5257 0.149349C13.6837 0.246984 13.8114 0.386681 13.8944 0.552786C13.9775 0.718892 14.0126 0.904844 13.996 1.08981C13.9793 1.27477 13.9114 1.45143 13.8 1.6L11.25 5L13.8 8.4C13.9114 8.54857 13.9793 8.72523 13.996 8.91019C14.0126 9.09516 13.9775 9.28111 13.8944 9.44721C13.8114 9.61332 13.6837 9.75302 13.5257 9.85065C13.3678 9.94829 13.1857 10 13 10H3C2.73478 10 2.48043 10.1054 2.29289 10.2929C2.10536 10.4804 2 10.7348 2 11V14C2 14.2652 1.89464 14.5196 1.70711 14.7071C1.51957 14.8946 1.26522 15 1 15C0.734784 15 0.48043 14.8946 0.292893 14.7071C0.105357 14.5196 0 14.2652 0 14V3Z"
                                                        fill="#64666C" />
                                                </svg> Report job </a>
                                            </div>
                                            <div className="video-thumb">
                                                <div className="content-tab2">
                                                    <div className="inner">
                                                        <div className="thumb">
                                                            <img src="images/review/thumbv3.jpg" alt="images" />
                                                            <a href="https://www.youtube.com/watch?v=MLpWrANjFbI" className="lightbox-image">
                                                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M27.5795 50.5623C40.2726 50.5623 50.5624 40.2725 50.5624 27.5794C50.5624 14.8863 40.2726 4.59656 27.5795 4.59656C14.8865 4.59656 4.59668 14.8863 4.59668 27.5794C4.59668 40.2725 14.8865 50.5623 27.5795 50.5623Z"
                                                                        fill="#EB4D4D"></path>
                                                                    <path
                                                                        d="M20.9141 27.5794V24.1779C20.9141 19.7882 24.0167 18.0185 27.8089 20.2019L30.7507 21.9026L33.6925 23.6034C37.4847 25.7867 37.4847 29.3721 33.6925 31.5554L30.7507 33.2562L27.8089 34.9569C24.0167 37.1403 20.9141 35.3476 20.9141 30.9809V27.5794Z"
                                                                        fill="white"></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="thumb-menu menu-tab2">
                                                    <li className="ct-tab2"> <a className="lightbox-gallery" href="images/review/thumbv4.jpg"><img src="images/review/thumbv4.jpg" alt="images" /></a> </li>
                                                    <li className="ct-tab2"> <a className="lightbox-gallery" href="images/review/thumbv1.jpg"><img src="images/review/thumbv1.jpg" alt="images" /></a></li>
                                                    <li className="ct-tab2"><a className="lightbox-gallery" href="images/review/thumbv2.jpg"><img src="images/review/thumbv2.jpg" alt="images" /></a></li>
                                                </ul>
                                            </div>

                                            <div className="job-rating">
                                                <h6>reviews</h6>
                                                <div className="rating-review">
                                                    <div className="left-rating">
                                                        <h2>4.8</h2>
                                                        <ul className="list-star">
                                                            <li className="icon-star-full"></li>
                                                            <li className="icon-star-full"></li>
                                                            <li className="icon-star-full"></li>
                                                            <li className="icon-star-full"></li>
                                                            <li className="icon-star-full"></li>
                                                        </ul>
                                                        <p className="count-rating">(1,968 Ratings)</p>
                                                    </div>
                                                    <div className="right-rating">
                                                        <ul className="rating-list">
                                                            <li className="rating-details">
                                                                <span className="number-rating">5</span>
                                                                <div className="progress-item">
                                                                    <div className="donat-bg" data-percent="60%">
                                                                        <div className="custom-donat"></div>
                                                                    </div>
                                                                </div>
                                                                <span className="percent"></span>
                                                            </li>
                                                            <li className="rating-details">
                                                                <span className="number-rating">4</span>
                                                                <div className="progress-item">
                                                                    <div className="donat-bg" data-percent="20%">
                                                                        <div className="custom-donat"></div>
                                                                    </div>
                                                                </div>
                                                                <span className="percent"></span>
                                                            </li>
                                                            <li className="rating-details">
                                                                <span className="number-rating">3</span>
                                                                <div className="progress-item">
                                                                    <div className="donat-bg" data-percent="10%">
                                                                        <div className="custom-donat"></div>
                                                                    </div>
                                                                </div>
                                                                <span className="percent"></span>
                                                            </li>
                                                            <li className="rating-details">
                                                                <span className="number-rating">2</span>
                                                                <div className="progress-item">
                                                                    <div className="donat-bg" data-percent="7%">
                                                                        <div className="custom-donat"></div>
                                                                    </div>
                                                                </div>
                                                                <span className="percent"></span>
                                                            </li>
                                                            <li className="rating-details">
                                                                <span className="number-rating last">1</span>
                                                                <div className="progress-item">
                                                                    <div className="donat-bg" data-percent="3%">
                                                                        <div className="custom-donat"></div>
                                                                    </div>
                                                                </div>
                                                                <span className="percent"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <ul className="client-review">
                                                    <li className="client-item">
                                                        <div className="content">
                                                            <div className="top-content">
                                                                <div className="avatar">
                                                                    <div className="avt">
                                                                        <img src="images/review/avt.jpg" alt="images" />
                                                                    </div>
                                                                    <div className="infor">
                                                                        <h5><a href="#">Dianne Russell</a><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10Z" fill="#37B853" />
                                                                            <path d="M8.89644 13.8429L5.64644 10.3563C5.45119 10.1468 5.45119 9.80718 5.64644 9.59769L6.35353 8.8391C6.54879 8.62961 6.86539 8.62961 7.06064 8.8391L9.25 11.1878L13.9394 6.1571C14.1346 5.94763 14.4512 5.94763 14.6465 6.1571L15.3536 6.91569C15.5488 7.12516 15.5488 7.46479 15.3536 7.67428L9.60355 13.8429C9.40828 14.0524 9.0917 14.0524 8.89644 13.8429Z" fill="white" />
                                                                        </svg></h5>
                                                                        <a href="#" className="date">August 13, 2023</a>
                                                                        <ul className="list-star">
                                                                            <li className="icon-star-full"></li>
                                                                            <li className="icon-star-full"></li>
                                                                            <li className="icon-star-full"></li>
                                                                            <li className="icon-star-full"></li>
                                                                            <li className="icon-star-full"></li>
                                                                        </ul>
                                                                        <p>Great 401K benefits- not based on a match but is 8% contribution</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <a href="#" className="btn-like">Was this helpful? <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                                <path d="M14.0625 5H9.5V2.40625C9.54167 0.802083 9.05208 0 8.03125 0C7.65625 0 7.33333 0.09375 7.0625 0.28125C6.8125 0.447917 6.65625 0.625 6.59375 0.8125L6.5 1.0625C6.45833 1.77083 6.29167 2.42708 6 3.03125C5.70833 3.61458 5.375 4.08333 5 4.4375C4.625 4.79167 4.23958 5.09375 3.84375 5.34375C3.44792 5.59375 3.125 5.77083 2.875 5.875C2.64583 5.95833 2.52083 6 2.5 6V14L3.96875 14.0625C4.65625 14.0625 5.19792 14.1354 5.59375 14.2812C6.01042 14.4062 6.33333 14.5625 6.5625 14.75C6.79167 14.9375 7.05208 15.125 7.34375 15.3125C7.65625 15.5 8.16667 15.6562 8.875 15.7812C9.60417 15.9271 10.5417 16 11.6875 16C12.3333 16 12.9167 15.9167 13.4375 15.75C13.9583 15.5833 14.3854 15.375 14.7188 15.125C15.0521 14.875 15.3333 14.5417 15.5625 14.125C15.7917 13.7083 15.9688 13.3229 16.0938 12.9688C16.2188 12.6146 16.3125 12.1667 16.375 11.625C16.4375 11.0833 16.4688 10.6458 16.4688 10.3125C16.4896 9.95833 16.5 9.52083 16.5 9C16.5 7.6875 16.25 6.69792 15.75 6.03125C15.2708 5.34375 14.7083 5 14.0625 5ZM11.6875 15C10.7083 15 9.89583 14.9479 9.25 14.8438C8.625 14.7188 8.20833 14.6042 8 14.5C7.79167 14.3958 7.55208 14.25 7.28125 14.0625C6.82292 13.7292 6.36458 13.4792 5.90625 13.3125C5.46875 13.1458 4.83333 13.0625 4 13.0625L3.5 13.0312V6.6875C3.89583 6.5 4.27083 6.28125 4.625 6.03125C5 5.76042 5.40625 5.41667 5.84375 5C6.28125 4.5625 6.64583 4.02083 6.9375 3.375C7.25 2.72917 7.4375 2.02083 7.5 1.25C7.58333 1.08333 7.76042 1 8.03125 1C8.15625 1 8.23958 1.02083 8.28125 1.0625C8.44792 1.22917 8.52083 1.67708 8.5 2.40625V5V6H9.5H14.0625C14.4375 6 14.7708 6.27083 15.0625 6.8125C15.3542 7.33333 15.5 8.0625 15.5 9C15.5 11.1042 15.2396 12.6354 14.7188 13.5938C14.2188 14.5312 13.2083 15 11.6875 15ZM0.625 14.875C0.729167 14.9583 0.854167 15 1 15C1.14583 15 1.26042 14.9583 1.34375 14.875C1.44792 14.7708 1.5 14.6458 1.5 14.5V5.53125C1.5 5.40625 1.44792 5.29167 1.34375 5.1875C1.26042 5.08333 1.14583 5.03125 1 5.03125C0.854167 5.03125 0.729167 5.08333 0.625 5.1875C0.541667 5.29167 0.5 5.40625 0.5 5.53125V14.5C0.5 14.6458 0.541667 14.7708 0.625 14.875Z" fill="#6A6A6A" />
                                                            </svg></a>
                                                        </div>
                                                    </li>
                                                    <li className="client-item">
                                                        <div className="content">
                                                            <div className="top-content">
                                                                <div className="avatar">
                                                                    <div className="avt">
                                                                        <img src="images/review/avt.jpg" alt="images" />
                                                                    </div>
                                                                    <div className="infor">
                                                                        <h5><a href="#">Dianne Russell</a><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10Z" fill="#37B853" />
                                                                            <path d="M8.89644 13.8429L5.64644 10.3563C5.45119 10.1468 5.45119 9.80718 5.64644 9.59769L6.35353 8.8391C6.54879 8.62961 6.86539 8.62961 7.06064 8.8391L9.25 11.1878L13.9394 6.1571C14.1346 5.94763 14.4512 5.94763 14.6465 6.1571L15.3536 6.91569C15.5488 7.12516 15.5488 7.46479 15.3536 7.67428L9.60355 13.8429C9.40828 14.0524 9.0917 14.0524 8.89644 13.8429Z" fill="white" />
                                                                        </svg></h5>
                                                                        <a href="#" className="date">August 13, 2023</a>
                                                                        <ul className="list-star">
                                                                            <li className="icon-star-full"></li>
                                                                            <li className="icon-star-full"></li>
                                                                            <li className="icon-star-full"></li>
                                                                            <li className="icon-star-full"></li>
                                                                            <li className="icon-star-full"></li>
                                                                        </ul>
                                                                        <p>Great 401K benefits- not based on a match but is 8% contribution</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <a href="#" className="btn-like">Was this helpful? <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                                <path d="M14.0625 5H9.5V2.40625C9.54167 0.802083 9.05208 0 8.03125 0C7.65625 0 7.33333 0.09375 7.0625 0.28125C6.8125 0.447917 6.65625 0.625 6.59375 0.8125L6.5 1.0625C6.45833 1.77083 6.29167 2.42708 6 3.03125C5.70833 3.61458 5.375 4.08333 5 4.4375C4.625 4.79167 4.23958 5.09375 3.84375 5.34375C3.44792 5.59375 3.125 5.77083 2.875 5.875C2.64583 5.95833 2.52083 6 2.5 6V14L3.96875 14.0625C4.65625 14.0625 5.19792 14.1354 5.59375 14.2812C6.01042 14.4062 6.33333 14.5625 6.5625 14.75C6.79167 14.9375 7.05208 15.125 7.34375 15.3125C7.65625 15.5 8.16667 15.6562 8.875 15.7812C9.60417 15.9271 10.5417 16 11.6875 16C12.3333 16 12.9167 15.9167 13.4375 15.75C13.9583 15.5833 14.3854 15.375 14.7188 15.125C15.0521 14.875 15.3333 14.5417 15.5625 14.125C15.7917 13.7083 15.9688 13.3229 16.0938 12.9688C16.2188 12.6146 16.3125 12.1667 16.375 11.625C16.4375 11.0833 16.4688 10.6458 16.4688 10.3125C16.4896 9.95833 16.5 9.52083 16.5 9C16.5 7.6875 16.25 6.69792 15.75 6.03125C15.2708 5.34375 14.7083 5 14.0625 5ZM11.6875 15C10.7083 15 9.89583 14.9479 9.25 14.8438C8.625 14.7188 8.20833 14.6042 8 14.5C7.79167 14.3958 7.55208 14.25 7.28125 14.0625C6.82292 13.7292 6.36458 13.4792 5.90625 13.3125C5.46875 13.1458 4.83333 13.0625 4 13.0625L3.5 13.0312V6.6875C3.89583 6.5 4.27083 6.28125 4.625 6.03125C5 5.76042 5.40625 5.41667 5.84375 5C6.28125 4.5625 6.64583 4.02083 6.9375 3.375C7.25 2.72917 7.4375 2.02083 7.5 1.25C7.58333 1.08333 7.76042 1 8.03125 1C8.15625 1 8.23958 1.02083 8.28125 1.0625C8.44792 1.22917 8.52083 1.67708 8.5 2.40625V5V6H9.5H14.0625C14.4375 6 14.7708 6.27083 15.0625 6.8125C15.3542 7.33333 15.5 8.0625 15.5 9C15.5 11.1042 15.2396 12.6354 14.7188 13.5938C14.2188 14.5312 13.2083 15 11.6875 15ZM0.625 14.875C0.729167 14.9583 0.854167 15 1 15C1.14583 15 1.26042 14.9583 1.34375 14.875C1.44792 14.7708 1.5 14.6458 1.5 14.5V5.53125C1.5 5.40625 1.44792 5.29167 1.34375 5.1875C1.26042 5.08333 1.14583 5.03125 1 5.03125C0.854167 5.03125 0.729167 5.08333 0.625 5.1875C0.541667 5.29167 0.5 5.40625 0.5 5.53125V14.5C0.5 14.6458 0.541667 14.7708 0.625 14.875Z" fill="#6A6A6A" />
                                                            </svg></a>
                                                        </div>
                                                    </li>
                                                    <li className="client-item">
                                                        <div className="content">
                                                            <div className="top-content">
                                                                <div className="avatar">
                                                                    <div className="avt">
                                                                        <img src="images/review/avt.jpg" alt="images" />
                                                                    </div>
                                                                    <div className="infor">
                                                                        <h5><a href="#">Dianne Russell</a><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 10C0.5 4.47715 4.97715 0 10.5 0C16.0228 0 20.5 4.47715 20.5 10C20.5 15.5228 16.0228 20 10.5 20C4.97715 20 0.5 15.5228 0.5 10Z" fill="#37B853" />
                                                                            <path d="M8.89644 13.8429L5.64644 10.3563C5.45119 10.1468 5.45119 9.80718 5.64644 9.59769L6.35353 8.8391C6.54879 8.62961 6.86539 8.62961 7.06064 8.8391L9.25 11.1878L13.9394 6.1571C14.1346 5.94763 14.4512 5.94763 14.6465 6.1571L15.3536 6.91569C15.5488 7.12516 15.5488 7.46479 15.3536 7.67428L9.60355 13.8429C9.40828 14.0524 9.0917 14.0524 8.89644 13.8429Z" fill="white" />
                                                                        </svg></h5>
                                                                        <a href="#" className="date">August 13, 2023</a>
                                                                        <ul className="list-star">
                                                                            <li className="icon-star-full"></li>
                                                                            <li className="icon-star-full"></li>
                                                                            <li className="icon-star-full"></li>
                                                                            <li className="icon-star-full"></li>
                                                                            <li className="icon-star-full"></li>
                                                                        </ul>
                                                                        <p>Great 401K benefits- not based on a match but is 8% contribution</p>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                            <a href="#" className="btn-like">Was this helpful? <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                                <path d="M14.0625 5H9.5V2.40625C9.54167 0.802083 9.05208 0 8.03125 0C7.65625 0 7.33333 0.09375 7.0625 0.28125C6.8125 0.447917 6.65625 0.625 6.59375 0.8125L6.5 1.0625C6.45833 1.77083 6.29167 2.42708 6 3.03125C5.70833 3.61458 5.375 4.08333 5 4.4375C4.625 4.79167 4.23958 5.09375 3.84375 5.34375C3.44792 5.59375 3.125 5.77083 2.875 5.875C2.64583 5.95833 2.52083 6 2.5 6V14L3.96875 14.0625C4.65625 14.0625 5.19792 14.1354 5.59375 14.2812C6.01042 14.4062 6.33333 14.5625 6.5625 14.75C6.79167 14.9375 7.05208 15.125 7.34375 15.3125C7.65625 15.5 8.16667 15.6562 8.875 15.7812C9.60417 15.9271 10.5417 16 11.6875 16C12.3333 16 12.9167 15.9167 13.4375 15.75C13.9583 15.5833 14.3854 15.375 14.7188 15.125C15.0521 14.875 15.3333 14.5417 15.5625 14.125C15.7917 13.7083 15.9688 13.3229 16.0938 12.9688C16.2188 12.6146 16.3125 12.1667 16.375 11.625C16.4375 11.0833 16.4688 10.6458 16.4688 10.3125C16.4896 9.95833 16.5 9.52083 16.5 9C16.5 7.6875 16.25 6.69792 15.75 6.03125C15.2708 5.34375 14.7083 5 14.0625 5ZM11.6875 15C10.7083 15 9.89583 14.9479 9.25 14.8438C8.625 14.7188 8.20833 14.6042 8 14.5C7.79167 14.3958 7.55208 14.25 7.28125 14.0625C6.82292 13.7292 6.36458 13.4792 5.90625 13.3125C5.46875 13.1458 4.83333 13.0625 4 13.0625L3.5 13.0312V6.6875C3.89583 6.5 4.27083 6.28125 4.625 6.03125C5 5.76042 5.40625 5.41667 5.84375 5C6.28125 4.5625 6.64583 4.02083 6.9375 3.375C7.25 2.72917 7.4375 2.02083 7.5 1.25C7.58333 1.08333 7.76042 1 8.03125 1C8.15625 1 8.23958 1.02083 8.28125 1.0625C8.44792 1.22917 8.52083 1.67708 8.5 2.40625V5V6H9.5H14.0625C14.4375 6 14.7708 6.27083 15.0625 6.8125C15.3542 7.33333 15.5 8.0625 15.5 9C15.5 11.1042 15.2396 12.6354 14.7188 13.5938C14.2188 14.5312 13.2083 15 11.6875 15ZM0.625 14.875C0.729167 14.9583 0.854167 15 1 15C1.14583 15 1.26042 14.9583 1.34375 14.875C1.44792 14.7708 1.5 14.6458 1.5 14.5V5.53125C1.5 5.40625 1.44792 5.29167 1.34375 5.1875C1.26042 5.08333 1.14583 5.03125 1 5.03125C0.854167 5.03125 0.729167 5.08333 0.625 5.1875C0.541667 5.29167 0.5 5.40625 0.5 5.53125V14.5C0.5 14.6458 0.541667 14.7708 0.625 14.875Z" fill="#6A6A6A" />
                                                            </svg></a>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <a href="find-jobs-list.html" className="btn-load">See more reviews (719)</a>
                                            </div>
                                            <div className="related-job">
                                                <h6>Related Jobs</h6>
                                                <div className="features-job mg-bt-0">
                                                    <div className="job-archive-header">
                                                        <div className="inner-box">
                                                            <div className="logo-company">
                                                                <img src="images/logo-company/cty2.png"
                                                                    alt="images/logo-company/cty2.png" />
                                                            </div>
                                                            <div className="box-content">
                                                                <h4>
                                                                    <a href="jobs-single.html">Tamari Law Group LLC</a>
                                                                </h4>
                                                                <h3>
                                                                    <a href="jobs-single.html">HR Administration</a>
                                                                    <span className="icon-bolt"></span>
                                                                </h3>
                                                                <ul>
                                                                    <li>
                                                                        <span className="icon-map-pin"></span>
                                                                        Las Vegas, NV 89107, USA
                                                                    </li>
                                                                    <li>
                                                                        <span className="icon-calendar"></span>
                                                                        2 days ago
                                                                    </li>
                                                                </ul>
                                                                <span className="icon-heart"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="job-archive-footer">
                                                        <div className="job-footer-left">
                                                            <ul className="job-tag">
                                                                <li><a href="#"> Part-time</a></li>
                                                                <li><a href="%24.html"> Remote</a></li>
                                                            </ul>
                                                            <div className="star">
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                            </div>
                                                        </div>
                                                        <div className="job-footer-right">
                                                            <div className="price">
                                                                <span className="icon-dolar1"></span>
                                                                <p>$83,000 - $110,000 <span className="year">/year</span></p>
                                                            </div>
                                                            <p className="days">24 days left to apply</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-job mg-bt-0">
                                                    <div className="job-archive-header">
                                                        <div className="inner-box">
                                                            <div className="logo-company">
                                                                <img src="images/logo-company/cty7.png"
                                                                    alt="images/logo-company/cty7.png" />
                                                            </div>
                                                            <div className="box-content">
                                                                <h4>
                                                                    <a href="jobs-single.html">Tamari Law Group LLC</a>
                                                                </h4>
                                                                <h3>
                                                                    <a href="jobs-single.html">HR Administration</a>
                                                                    <span className="icon-bolt"></span>
                                                                </h3>
                                                                <ul>
                                                                    <li>
                                                                        <span className="icon-map-pin"></span>
                                                                        Las Vegas, NV 89107, USA
                                                                    </li>
                                                                    <li>
                                                                        <span className="icon-calendar"></span>
                                                                        2 days ago
                                                                    </li>
                                                                </ul>
                                                                <span className="icon-heart"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="job-archive-footer">
                                                        <div className="job-footer-left">
                                                            <ul className="job-tag">
                                                                <li><a href="#"> Part-time</a></li>
                                                                <li><a href="#"> Remote</a></li>
                                                            </ul>
                                                            <div className="star">
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                            </div>
                                                        </div>
                                                        <div className="job-footer-right">
                                                            <div className="price">
                                                                <span className="icon-dolar1"></span>
                                                                <p>$83,000 - $110,000 <span className="year">/year</span></p>
                                                            </div>
                                                            <p className="days">24 days left to apply</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-job mg-bt-0">
                                                    <div className="job-archive-header">
                                                        <div className="inner-box">
                                                            <div className="logo-company">
                                                                <img src="images/logo-company/cty8.png"
                                                                    alt="images/logo-company/cty8.png" />
                                                            </div>
                                                            <div className="box-content">
                                                                <h4>
                                                                    <a href="jobs-single.html">Tamari Law Group LLC</a>
                                                                </h4>
                                                                <h3>
                                                                    <a href="jobs-single.html">HR Administration</a>
                                                                    <span className="icon-bolt"></span>
                                                                </h3>
                                                                <ul>
                                                                    <li>
                                                                        <span className="icon-map-pin"></span>
                                                                        Las Vegas, NV 89107, USA
                                                                    </li>
                                                                    <li>
                                                                        <span className="icon-calendar"></span>
                                                                        2 days ago
                                                                    </li>
                                                                </ul>
                                                                <span className="icon-heart"></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="job-archive-footer">
                                                        <div className="job-footer-left">
                                                            <ul className="job-tag">
                                                                <li><a href="#"> Part-time</a></li>
                                                                <li><a href="#"> Remote</a></li>
                                                            </ul>
                                                            <div className="star">
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                                <span className="icon-star-full"></span>
                                                            </div>
                                                        </div>
                                                        <div className="job-footer-right">
                                                            <div className="price">
                                                                <span className="icon-dolar1"></span>
                                                                <p>$83,000 - $110,000 <span className="year">/year</span></p>
                                                            </div>
                                                            <p className="days">24 days left to apply</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inner-content">
                                            <h5>Full Job Description</h5>
                                            <p>Are you a User Experience Designer with a track record of delivering intuitive digital experiences that
                                                drive results? Are you a strategic storyteller and systems thinker who can concept and craft smart,
                                                world-class campaigns across a variety of mediums?
                                            </p>
                                        </div>
                                        <div className="inner-content">
                                            <h5>Full Reviews</h5>
                                            <p>Are you a User Experience Designer with a track record of delivering intuitive digital experiences that
                                                drive results? Are you a strategic storyteller and systems thinker who can concept and craft smart.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            <div className="col-lg-4">
                                <div className="cv-form-details po-sticky job-sg">
                                    <div className="map-content">

                                        <iframe className="map-box"
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.453092836291!2d90.47477022812872!3d23.77494577893369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1627293157601!5m2!1svi!2s"
                                            allowfullscreen="" loading="lazy"></iframe>

                                    </div>
                                    <ul className="list-infor">
                                        <li><div className="category">Website</div><div className="detail"><a href="#">avitex.vn</a></div></li>
                                        <li><div className="category">Email</div><div className="detail"><a href="https://themesflat.co/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="264e4f0847504f52435e66414b474f4a0845494b">[email&#160;protected]</a></div></li>
                                        <li><div className="category">Industry</div><div className="detail">Internet Publishing</div></li>
                                        <li><div className="category">Company size</div><div className="detail">51-200 employees</div></li>
                                        <li><div className="category">Headquarters</div><div className="detail">3 S Valley , Las Vegas, USA</div></li>
                                        <li><div className="category">Founded</div><div className="detail">2017</div></li>
                                    </ul>

                                    <div className="wd-social d-flex aln-center">
                                        <span>Socials:</span>
                                        <ul className="list-social d-flex aln-center">
                                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                                            <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                                            <li><a href="#"><i className="icon-twitter"></i></a></li>
                                            <li><a href="#"><i className="icon-pinterest"></i></a></li>
                                            <li><a href="#"><i className="icon-instagram1"></i></a></li>
                                            <li><a href="#"><i className="icon-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="form-job-single">
                                        <h6>Contact Us</h6>
                                        <form action="https://themesflat.co/html/jobtex/post">
                                            <input type="text" placeholder="Subject" />
                                            <input type="text" placeholder="Name" />
                                            <input type="email" placeholder="Email" />
                                            <textarea placeholder="Message..."></textarea>
                                            <button>Send Message</button>
                                        </form>

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
