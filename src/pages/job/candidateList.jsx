import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function CandidateList() {

    const [candidateList, setCandidateList] = useState([])
    // const [page, setPage] = useState(1)
    // const [totalPage, setTotalPage] = useState(1)


    // console.log(page);

    // function getEmployerList() {
    //     var token = localStorage.getItem('token')
    //     fetch(process.env.REACT_APP_API + "/employer-data?limit=10&page=" + page, {
    //         headers: {
    //             Authorization: 'Bearer ' + token
    //         }
    //     }).then(e => e.json()).then(res => {
    //         setEmployerList(res.users)
    //         setPage(res.currentPage)
    //         setTotalPage(res.totalPages)
    //     })
    //         .catch(err => {
    //             console.log(err);
    //         })

    // }
    function getCandidateList() {
        fetch(process.env.REACT_APP_API + "/employee-data", {

        }).then(e => e.json()).then(res => {
            setCandidateList(res.data)
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }


    // function generateBtn(pageNo) {
    //     var arr = Array.from({ length: pageNo }, (_, i) => i + 1)
    //     return arr.map((n) => <li className={n == page ? 'current' : ''}><a onClick={() => setPage(n)} href="#">{n}</a></li>)
    // }

    // useEffect(() => {
    //     getEmployerList()
    // }, [page])
    useEffect(() => {
        getCandidateList()
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
                                            <li><a href="#">Candidates</a></li>
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
                                        <h5>
                                            Candidates
                                        </h5>

                                    </div>
                                </div>
                                <div className="content-tab">
                                    <div className="inner">
                                        <div className="group-col-2">
                                            {
                                                candidateList.map(e =>

                                                    <div className="employer-block style-2 cl2" key={Math.random()}>
                                                        <div className="inner-box">
                                                            <div className="logo-company">
                                                                <img src="http://127.0.0.1:4000/avatar.jpg" alt="images/logo-company/cty17.png" />
                                                            </div>
                                                            <div className="box-content">

                                                                <Link to={"/candidate/" + e._id}>
                                                                    <h3>
                                                                        <a>{e.firstName}</a>
                                                                        <span className="icon-bolt ms-2"></span>
                                                                    </h3>
                                                                </Link>
                                                                <p className="info">
                                                                    <span className="icon-map-pin me-2"></span>
                                                                    {e.location}
                                                                </p>
                                                            </div>
                                                            <div className="button-readmore">
                                                            </div>

                                                        </div>
                                                    </div>
                                                )}
                                        </div>
                                        <ul className="pagination-job p-top">

                                            {/* {generateBtn(totalPage)} */}


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
