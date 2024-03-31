import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import JobCmp from '../../component/job';

export default function JobList() {

    let [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get('s'));

    const [jobList, setJobList] = useState([])

    const [page, setPage] = useState(1)  //current page
    const [totalPage, setTotalPage] = useState(1)
    const [search, setSearch] = useState(searchParams.get('s')||'')
    const[expertise,setExpertise] = useState(searchParams.get('e')||'')



    console.log(jobList);
    function getJobList() {

        var token = localStorage.getItem('token')
        fetch(process.env.REACT_APP_API + "/post-list?limit=8&page=" + page + "&s=" + search +  "&e=" + expertise,   {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(e => e.json()).then(res => {
            setJobList(res.data)
            setPage(res.currentPage)
            setTotalPage(res.totalPages)
        })
            .catch(err => {
                console.log(err);
            })

    }

    function generateBtn(pageNo) {
        console.log(pageNo, "asfasd");
        var arr = Array.from({ length: pageNo }, (_, i) => i + 1) // [1,2]
        return arr.map((n) => <li className={n == page ? 'current' : ''}><a onClick={() => setPage(n)} href="#">{n}</a></li>)
    }

    useEffect(() => {
        getJobList()
    }, [page])
    useEffect(() => {
        getJobList()
    }, [])

    return (
        <>
            <section className="bg-f5 breadcrumb-section">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title">
                                <div className="widget-menu-link">
                                    <ul>
                                        <li><a href="home-01.html">Home</a></li>
                                        <li><a href="#">Find Jobs</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="form-sticky stc1">
                <div className="tf-container">
                    <div className="job-search-form inner-form-map st1">
                        <div className="row-group-search">
                            <div className="form-group-1">
                                <input type="text" className="input-filter-search" placeholder="Job title, key words or company" onChange={e => setSearch(e.target.value)} value={search} />
                                <span className="icon-search search-job"></span>
                            </div>
                            <div className="form-group-4">
                                <button className="btn btn-find" onClick={getJobList}>Find Jobs</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="inner-jobs-section">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12 tf-tab">
                            <div className="wd-meta-select-job">
                                <h5 className="pb-3">Jobs</h5>
                            </div>
                            <div className="content-tab">
                                <div className="inner">
                                    <div className="group-col-2">
                                        {
                                            jobList.map(e =>
                                                <JobCmp e={e} />
                                            )
                                        }
                                    </div>
                                    <ul className="pagination-job padding">
                                        {generateBtn(totalPage)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
