import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header id="header" className="header header-default">
            <div className="tf-container ct2">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sticky-area-wrap">
                            <div className="header-ct-left">
                                <div id="logo" className="logo">
                                    <a href="home-01.html">
                                        <img className="site-logo" id="trans-logo" src="images/logo-white.png" alt="Image" />
                                    </a>
                                </div>
                                {/* <div className="categories">
                                    <a href="#"><span className="icon-grid"></span>Categories</a>
                                    <div className="sub-categorie">
                                        <ul className="pop-up">
                                            <li>
                                                <a href="#"><span className="icon-categorie-1"></span>Design & Creative</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
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
                                                        <h6>Top Skills</h6>
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
                                            <li>
                                                <a href="#"><span className="icon-categorie-8"></span>Digital Marketing</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
                                                        <ul>
                                                            <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                            <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                            <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                            <li><a href="find-jobs-list.html">Development & IT</a></li>
                                                            <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="menu right">
                                                        <h6>Top Skills</h6>
                                                        <ul>
                                                            <li><a href="jobs-single.html">adobe XD</a></li>
                                                            <li><a href="jobs-single.html">Figma</a></li>
                                                            <li><a href="jobs-single.html">BA</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#"><span className="icon-categorie-2"></span>Development & IT</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
                                                        <ul>
                                                            <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                            <li><a href="find-jobs-list.html">Development & IT</a></li>
                                                            <li><a href="find-jobs-list.html">Music & Audio</a></li>
                                                            <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                            <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="menu right">
                                                        <h6>Top Skills</h6>
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
                                            <li>
                                                <a href="#"><span className="icon-categorie-3"></span>Music & Audio</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
                                                        <ul>
                                                            <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                            <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                            <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="menu right">
                                                        <h6>Top Skills</h6>
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
                                            <li>
                                                <a href="#"><span className="icon-categorie-4"></span>Finance &
                                                    Accounting</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
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
                                                        <h6>Top Skills</h6>
                                                        <ul>
                                                            <li><a href="jobs-single.html">adobe XD</a></li>
                                                            <li><a href="jobs-single.html">Figma</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#"><span className="icon-categorie-5"></span>Programming & Tech</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
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
                                                        <h6>Top Skills</h6>
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
                                            <li>
                                                <a href="#"><span className="icon-categorie-6"></span>Video & Animation</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
                                                        <ul>
                                                            <li><a href="find-jobs-list.html">Design & Creative</a></li>
                                                            <li><a href="find-jobs-list.html">Digital marketing</a></li>
                                                            <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                            <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="menu right">
                                                        <h6>Top Skills</h6>
                                                        <ul>
                                                            <li><a href="jobs-single.html">Adobe Photoshop</a></li>
                                                            <li><a href="jobs-single.html">CSS, Html</a></li>
                                                            <li><a href="jobs-single.html">BA</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#"><span className="icon-categorie-7"></span>Writing &
                                                    translation</a>
                                                <div className="group-menu-category">
                                                    <div className="menu left">
                                                        <h6>Top Categories</h6>
                                                        <ul>
                                                            <li><a href="find-jobs-list.html">Finance & Accounting</a></li>
                                                            <li><a href="find-jobs-list.html">Programming & Tech</a></li>
                                                            <li><a href="find-jobs-list.html">video & Animation</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="menu right">
                                                        <h6>Top Skills</h6>
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
                                </div> */}
                            </div>
                            <div className="header-ct-center">
                                <div className="nav-wrap">
                                    <nav id="main-nav" className="main-nav">
                                        <ul id="menu-primary-menu" className="menu">
                                            <li className="menu-item current-item">
                                                <Link to="/">Home </Link>


                                            </li>
                                            <li className="menu-item menu-item">
                                                <Link to = "/job">JobList </Link>
                                                {/* <a href="#">Find jobs </a> */}
                                                {/* <ul className="sub-menu st1">
                                                    <li className="nav-sub">
                                                        <a href="find-jobs-list.html">Jobs Listing <span className="icon-keyboard_arrow_right"></span> </a>
                                                        <ul className="nav-sub-menu">

                                                            <li className="nav-menu-item">
                                                                <a href="find-jobs-list.html">List Layout</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="find-jobs-list-sidebar.html">List Sidebar</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="find-jobs-grid.html">Grid Layout</a>
                                                            </li>

                                                            <li className="nav-menu-item">
                                                                <a href="find-jobs-grid-sidebar.html">Grid Sidebar</a>
                                                            </li>

                                                            <li className="nav-menu-item">
                                                                <a href="find-jobs-list-sidebar-fullwidth.html">List Sidebar Fullwidth</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="find-jobs-grid-sidebar-fullwidth.html">Grid Sidebar Fullwidth</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="find-jobs-topmap.html">Top Map</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="find-jobs-topmap-sidebar.html">Top Map Sidebar</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="find-jobs-half-map.html">Half Map - V1</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="find-jobs-half-map2.html">Half Map - V2</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="jobs-single.html">Jobs Single - V1</a>

                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="jobs-single2.html">Jobs Single - V2</a>
                                                    </li>
                                                </ul> */}
                                            </li>

                                            <li className="menu-item menu-item">
                                            <Link to = "/employers">EmployersSingle</Link>                                                
                                                {/* <ul className="sub-menu st1">
                                                    <li className="nav-sub">
                                                        <a href="employers-list.html">Employers Listing <span className="icon-keyboard_arrow_right"></span> </a>
                                                        <ul className="nav-sub-menu">

                                                            <li className="nav-menu-item">
                                                                <a href="employers-list.html">List Layout</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="employers_grid.html">Grid Layout</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="employers-list-sidebar.html">List Sidebar</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="employers-grid-sidebar.html">Grid Sidebar</a>
                                                            </li>

                                                            <li className="nav-menu-item">
                                                                <a href="employers-grid-fullwidth.html">Grid Fullwidth</a>
                                                            </li>

                                                            <li className="nav-menu-item">
                                                                <a href="employers-topmap.html">Top Map</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="employers-half-map.html">Half Map</a>
                                                            </li>

                                                        </ul>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="employers-single.html">Employers Single - V1</a>


                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="employers-single2.html">Employers Single - V2</a>
                                                    </li>

                                                    <li className="nav-sub">
                                                        <a href="employers-review.html">Employers Reviews</a>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="employers-not-pound.html">Employers Not Found</a>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="dashboard/employer-dashboard.html">Employer Dashboard</a>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li className="menu-item menu-item">
                                            <Link to ="/employers-review">EmployersReview</Link>
                                                {/* <ul className="sub-menu st1">
                                                    <li className="nav-sub">
                                                        <a href="candidate.html">Candidates Listing <span className="icon-keyboard_arrow_right"></span> </a>
                                                        <ul className="nav-sub-menu">

                                                            <li className="nav-menu-item">
                                                                <a href="candidate.html">List Layout</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="candidate-grid.html">Grid Layout</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="candidate-list-sidebar.html">List Sidebar</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="candidate-top-map.html">Top Map</a>
                                                            </li>

                                                            <li className="nav-menu-item">
                                                                <a href="candidate-half-map.html">Half Map</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="candidate-no-available.html">No Available - V1</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="candidate-no-available2.html">No Available - V2</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="#">Sample CV <span className="icon-keyboard_arrow_right"></span> </a>
                                                        <ul className="nav-sub-menu">

                                                            <li className="nav-menu-item">
                                                                <a href="sample-cv.html">Sample CV</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="cv-details.html">CV Details</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="sample-cv-sidebar.html">Sample CV Sidebar</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="candidate-single.html">Candidate Single - V1</a>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="candidate-single2.html">Candidate Single - V2</a>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="dashboard/candidates-dashboard.html">Candidates Dashboard</a>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            <li className="menu-item menu-item">
                                                <a href="#">Blog</a>
                                                {/* <ul className="sub-menu st1">
                                                    <li className="nav-sub">
                                                        <a href="#">Blog Listing <span className="icon-keyboard_arrow_right"></span> </a>
                                                        <ul className="nav-sub-menu">

                                                            <li className="nav-menu-item">
                                                                <a href="blog.html">Blog List </a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="blog-grid.html">Blog Grid</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="blog-masonry.html">Blog Masonry</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="#">Blog Details <span className="icon-keyboard_arrow_right"></span> </a>
                                                        <ul className="nav-sub-menu">

                                                            <li className="nav-menu-item">
                                                                <a href="blog-detail.html">Blog Details - V1</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="blog-detail-01.html">Blog Details - V2</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="blog-detail-side-bar.html">Blog Details Sidebar</a>
                                                            </li>
                                                        </ul>
                                                    </li>

                                                </ul> */}

                                            </li>
                                            <li className="menu-item menu-item  ">
                                                <a href="#">Pages</a>
                                                {/* <ul className="sub-menu st1">
                                                    <li className="nav-sub">
                                                        <a href="#">Shop<span className="icon-keyboard_arrow_right"></span> </a>
                                                        <ul className="nav-sub-menu">

                                                            <li className="nav-menu-item">
                                                                <a href="shop.html">Shop List</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="shop-details.html">Shop Single</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="shopping-cart.html">Shopping Cart</a>
                                                            </li>
                                                            <li className="nav-menu-item">
                                                                <a href="checkout.html">Checkout</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="about-us.html">About Us</a>

                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="accordion-page.html">FAQS</a>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="term-of-use.html">Terms Of Use</a>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="pricing.html">Pricing</a>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="login.html">Login</a>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="create-account.html">Create Account</a>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="contact-us.html">Contact Us</a>
                                                    </li>
                                                    <li className="nav-sub">
                                                        <a href="modal.html">Modal</a>
                                                    </li>
                                                </ul> */}

                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="header-ct-right">
                                <div className="header-customize-item help">
                                    {/* <a href="term-of-use.html"><span className="icon-help-circle"></span></a> */}
                                </div>
                               
                                <div className="header-customize-item account">
                                    <img src="images/user/avatar/image-01.jpg" alt="" />
                                    <div className="name">
                                        Candidates<span className="icon-keyboard_arrow_down"></span>
                                    </div>
                                    <div className="sub-account">
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-dashboard.html"><span className="icon-dashboard"></span>Dashboard</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-profile-setting.html"><span className="icon-profile"></span> Profile</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-resumes.html"><span className="icon-resumes"></span> Resumes</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-my-applied.html"><span className="icon-my-apply"></span> My Applied</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-save-jobs.html"><span className="icon-work"></span> Saved Jobs</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-alerts-jobs.html"><span className="icon-bell1"></span> Candidate Alerts</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-messages.html"><span className="icon-chat"></span> Messages</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-following-employers.html"><span className="icon-following"></span> Following Employers</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-meetings.html"><span className="icon-meeting"></span> Meeting</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-change-passwords.html"><span className="icon-change-passwords"></span> Change
                                                Passwords</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="dashboard/candidates-delete-profile.html"><span className="icon-trash"></span> Delete Profile</a>
                                        </div>
                                        <div className="sub-account-item">
                                            <a href="#"><span className="icon-log-out"></span> Log Out</a>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="header-customize-item button">
                                    <a href="dashboard/candidates-resumes.html">Upload Resume</a>
                                </div> */}
                            </div>
                            <div className="nav-filter">
                                <div className="nav-mobile"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
