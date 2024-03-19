import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { toast } from 'react-toastify'


export default function JobCreate() {
    const send = useNavigate();

    const [job, setJob] = useState(
        {
            description: "",
            title: "",
            expertise: [],
            budget: "",
        }
    )

    const [expertise, setExpertise] = useState([])
    const options = [
        { value: 'Communication Skills', label: 'Communication Skills' },
        { value: 'DSA', label: 'DSA' }
    ]

    console.log(job);

    function expertiseSelect(ex) {
        // console.log(ex);
        setJob({ ...job, expertise: ex.map(e => e._id) })
    }


    function exper() {
        fetch(process.env.REACT_APP_API + "/expertise-data", {

        }).then(e => e.json()).then(res => {
            if (res.data.length) {
                var ex = res.data.map(e => {
                    return {
                        _id: e._id,
                        value: e.technology,
                        label: e.technology
                    }
                })

                setExpertise(ex)
            }

            console.log(res);

        })

            .catch(err => {
                console.log(err);
            })

    }


    function createjob(e) {
        e.preventDefault();

        var token = localStorage.getItem('token')

        fetch(process.env.REACT_APP_API + "/post", {
            method: "post",
            body: JSON.stringify(job),
            headers: {
                "content-type": "application/json",
                Authorization: ' Bearer ' + token
            }


        }).then(e => e.json()).then(res => {
            console.log(res);
            if (res?.status) {
                toast.success(res?.message)
                send("/job")
            }
            if (res?.error) {
                toast.error(res?.error)
            }
        })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        exper()

    }, [])
    return (

        <>
            <section className="page-title-dashboard">
                <div className="themes-container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 ">
                            <div className="title-dashboard">
                                <div className="title-dash flex2">CREATE JOB</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flat-dashboard-setting flat-dashboard-setting2">
                <div className="themes-container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 ">
                            <div className="profile-setting bg-white">



                                <div className="form-infor-profile">
                                    <h3 className="title-info">Information</h3>
                                    <form onSubmit={createjob}>
                                        <div className="form-infor flex flat-form">
                                            <div className="info-box info-wd">
                                                <fieldset>
                                                    <label className="title-user fw-7"> Title</label>
                                                    <input type="text" className="input-form" onChange={e => setJob({ ...job, title: e.target.value })} value={job.title} required />
                                                </fieldset>

                                                <div id="item_date" >
                                                    <label className="title-user fw-7">Job List</label>
                                                    <Select
                                                        isMulti onChange={expertiseSelect}
                                                        options={expertise} />
                                                    {/* <a className="btn-selector nolink input-form"> Male</a> */}
                                                </div>
                                            </div>
                                            <div className="info-box info-wd">
                                                <fieldset>
                                                    <label className="title-user fw-7">Budget</label>
                                                    <input type="text" className="input-form" onChange={e => setJob({ ...job, budget: e.target.value })} value={job.budget} required />
                                                </fieldset>
                                                <fieldset>
                                                    <label className="title-user fw-7">Description</label>
                                                    <textarea onChange={e => setJob({ ...job, description: e.target.value })} value={job.description}></textarea>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <button className="tf-button bg-success text-white" type='submit'>Submit</button>
                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}
