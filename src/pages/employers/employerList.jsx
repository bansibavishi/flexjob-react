import React, { useEffect, useState } from 'react'
import Footer from '../../layout/footer'
import Navbar from '../../layout/navbar'
import { Link } from 'react-router-dom'

export default function EmployerList() {

    const [employerList, setEmployerList] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)


    console.log(page);

    function getEmployerList() {
        var token = localStorage.getItem('token')
        fetch(process.env.REACT_APP_API + "/employer-data?page=" + page, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(e => e.json()).then(res => {
            setEmployerList(res.users)
            setPage(res.currentPage)
            setTotalPage(res.totalPages)
        })
            .catch(err => {
                console.log(err);
            })

    }

    function generateBtn(pageNo) {
        var arr = Array.from({ length: pageNo }, (_, i) => i + 1)
        return arr.map((n) => <li className={n == page ? 'current' : ''}><a onClick={() => setPage(n)} href="#">{n}</a></li>)
    }

    useEffect(() => {
        getEmployerList()
    }, [page])
    useEffect(() => {
        getEmployerList()
    }, [])
    return (
        <>
            <div className="boxed">
                <section className="bg-f5 breadcrumb-section">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="page-title">
                                    <div className="widget-menu-link">
                                        <ul>
                                            <li><a href="home-01.html">Home</a></li>
                                            <li><a href="#">Employers</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="form-sticky stc2">
                    <div className="tf-container">
                        <div className="job-search-form st1 employers-form">
                        </div>
                    </div>
                </section>


                <section className="inner-employer-section">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-12 tf-tab">
                                <div className="wd-meta-select-job">

                                    <div className="wd-findjob-filer">
                                        <div className="group-select-display">
                                            <div className="inner menu-tab">

                                            </div>

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
                                            {
                                                employerList.map(e =>

                                                    <div className="employer-block style-2 cl2" key={Math.random()}>
                                                        <div className="inner-box">
                                                            <div className="logo-company">
                                                                <img src="images/logo-company/cty17.png" alt="images/logo-company/cty17.png" />
                                                            </div>
                                                            <div className="box-content">
                                                                <div className="star">
                                                                    <span className="icon-star-full"></span>
                                                                    <span className="icon-star-full"></span>
                                                                    <span className="icon-star-full"></span>
                                                                    <span className="icon-star-full"></span>
                                                                    <span className="icon-star-full"></span>
                                                                </div>
                                                                <Link to={"/employers/" + e._id}>
                                                                <h3>
                                                                    <a>{e.title}</a>
                                                                    <span className="icon-bolt"></span>
                                                                </h3>
                                                                </Link>
                                                                <p className="info">
                                                                    <span className="icon-map-pin"></span>
                                                                    {e.location}
                                                                </p>
                                                            </div>
                                                            <div className="button-readmore">
                                                                <span className="icon-heart"></span>

                                                            </div>

                                                        </div>
                                                    </div>
                                                )}
                                        </div>
                                        <ul className="pagination-job p-top">
                                            <li><a href="#"><i className="icon-keyboard_arrow_left"></i></a></li>
                                            {generateBtn(totalPage)}

                                            <li><a href="#"><i className="icon-keyboard_arrow_right"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="inner">



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}
