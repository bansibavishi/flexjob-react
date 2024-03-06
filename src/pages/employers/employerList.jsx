import React, { useEffect, useState } from 'react'
import Footer from '../../layout/footer'
import Navbar from '../../layout/navbar'

export default function Employerlist() {

  const[employerList,setEmployerList] = useState([])
  function getEmployerList() {
    var token = localStorage.getItem('token')
    fetch(process.env.REACT_APP_API  + "/employer-data"  , {
      headers:{
        Authorization: 'Bearer ' + token
      }

    }).then(e => e.json()).then(res => {
      setEmployerList(res.users)
    }) 
    .catch(err => {
      console.log(err);
    })
    
  }
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
        {/* <form method="post">
          <div className="row-group-search inner-form">
            <div className="form-group-1 form-style-1">
              <input type="text" className="input-filter-search" placeholder="key words"/>
              <span className="icon-search search-job"></span>
            </div>
            <div className="form-group-2 form-style-1">
              <span className="icon-map-pin"></span>
              <select className="select-location" >
                <option value="">All Location</option>
                <option value="">Japan</option>
                <option value="">Canada</option>
                <option value="">England</option>
                <option value="">Mexico</option>
              </select>
              <div className="nice-select select-location" tabindex="0">
                <span className="current">All Location</span>
                <ul className="list">
                  <li data-value="" className="option selected focus">All Location</li>
                  <li data-value="" className="option">Singapore</li>
                  <li data-value="" className="option">Japan</li>
                  <li data-value="" className="option">Korea</li>
                  <li data-value="" className="option">Italia</li>
                  <li data-value="" className="option">Canada</li>
                </ul>
              </div>
            </div>
            <div className="form-group-3 form-style-1">
              <select className="select-location" >
                <option value="">Job Title</option>
                <option value="">Job Title 1</option>
                <option value="">Job Title 2</option>
                <option value="">Job Title 3</option>
              </select>
              <div className="nice-select select-location" tabindex="0"><span className="current">Job Title</span>
                <ul className="list">
                  <li data-value="" className="option selected focus">Job Title</li>
                  <li data-value="" className="option">Design & Creative </li>
                  <li data-value="" className="option">Design</li>
                  <li data-value="" className="option">Ux/Ui</li>
                </ul>
              </div>
            </div>
            <div className="form-group-4 form-style-1">
              <select className="select-location" >
                <option value="">Any Distance</option>
                <option value="">Any Distance 1</option>
                <option value="">Any Distance 2</option>
                <option value="">Any Distance 3</option>
              </select>
              <div className="nice-select select-location" tabindex="0"><span className="current">Any Distance</span>
                <ul className="list">
                  <li data-value="" className="option selected focus">Any Distance</li>
                  <li data-value="" className="option">Any Distance 1</li>
                  <li data-value="" className="option">Any Distance 2</li>
                  <li data-value="" className="option">Any Distance 3</li>
                </ul>
              </div>
            </div>
            <div className="form-group-5 form-style-1">
              <select className="select-location" >
                <option value="">Company Size</option>
                <option value="">Company Size 1</option>
                <option value="">Company Size 2</option>
                <option value="">Company Size 3</option>
              </select>
              <div className="nice-select select-location" tabindex="0"><span className="current">Company Size</span>
                <ul className="list">
                  <li data-value="" className="option selected focus">Company Size</li>
                  <li data-value="" className="option">Company Size 1</li>
                  <li data-value="" className="option">Company Size 2</li>
                  <li data-value="" className="option">Company Size 3</li>
                </ul>
              </div>
            </div>
            <div className="form-group-6">
              <button className="btn btn-find">Find Employers</button>
            </div>
          </div>

        </form> */}
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
                  <a className="btn-display active"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16"
                      viewBox="0 0 17 16" fill="none">
                      <path
                        d="M0.5 12.001L0.5 16.0005C0.880952 16.001 1.09693 16.001 1.83333 16.001L15.1667 16.001C15.9031 16.001 16.5 16.0005 16.5 16.0005L16.5 12.001C16.5 12.001 15.9031 12.001 15.1667 12.001L1.83333 12.001C1.09693 12.001 0.880952 12.001 0.5 12.001Z"
                        fill="#A0A0A0" />
                      <path
                        d="M0.5 6.00098L0.5 10.0005C0.880952 10.001 1.09693 10.001 1.83333 10.001L15.1667 10.001C15.9031 10.001 16.5 10.0005 16.5 10.0005L16.5 6.00098C16.5 6.00098 15.9031 6.00098 15.1667 6.00098L1.83333 6.00098C1.09693 6.00098 0.880952 6.00098 0.5 6.00098Z"
                        fill="#A0A0A0" />
                      <path
                        d="M0.5 0.000976562L0.5 4.0005C0.880952 4.00098 1.09693 4.00098 1.83333 4.00098L15.1667 4.00098C15.9031 4.00098 16.5 4.0005 16.5 4.0005L16.5 0.000975863C16.5 0.000975863 15.9031 0.000975889 15.1667 0.000975921L1.83333 0.000976504C1.09693 0.000976536 0.880952 0.000976546 0.5 0.000976562Z"
                        fill="#A0A0A0" />
                    </svg></a>
                  <a className="btn-display"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16"
                      viewBox="0 0 17 16" fill="none">
                      <path
                        d="M4.5 0H0.500478C0.5 0.380952 0.5 0.596931 0.5 1.33333V14.6667C0.5 15.4031 0.500478 16 0.500478 16H4.5C4.5 16 4.5 15.4031 4.5 14.6667V1.33333C4.5 0.596931 4.5 0.380952 4.5 0Z"
                        fill="white" />
                      <path
                        d="M10.5 0H6.50048C6.5 0.380952 6.5 0.596931 6.5 1.33333V14.6667C6.5 15.4031 6.50048 16 6.50048 16H10.5C10.5 16 10.5 15.4031 10.5 14.6667V1.33333C10.5 0.596931 10.5 0.380952 10.5 0Z"
                        fill="white" />
                      <path
                        d="M16.5 0H12.5005C12.5 0.380952 12.5 0.596931 12.5 1.33333V14.6667C12.5 15.4031 12.5005 16 12.5005 16H16.5C16.5 16 16.5 15.4031 16.5 14.6667V1.33333C16.5 0.596931 16.5 0.380952 16.5 0Z"
                        fill="white" />
                    </svg></a>
                </div>
                <p className="nofi-job"> <span>1249</span> employers recommended for you</p>
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
                      <h3>
                        <a href="employers-single.html">{e.title}</a>
                        <span className="icon-bolt"></span>
                      </h3>
                      <p className="info">
                        <span className="icon-map-pin"></span>
                        {e.location}
                      </p>
                    </div>
                    <div className="button-readmore">
                      <span className="icon-heart"></span>
                      <button className="btn-employer">
                        joblist
                      </button>
                    </div>

                  </div>
                </div>
                    )}
                </div>
              <ul className="pagination-job p-top">
                <li><a href="#"><i className="icon-keyboard_arrow_left"></i></a></li>
                <li><a href="#">1</a></li>
                <li className="current"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
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
