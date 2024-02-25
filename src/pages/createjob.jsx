import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { toast } from 'react-toastify'


export default function Createjob() {

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
            <section className="bg-f5">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title">
                                <div className="widget-menu-link">
                                    <ul>
                                        <li><a href="home-01.html">Home</a></li>
                                        <li><a href="#">Create Job</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="account-section">
                <div className="tf-container">
                    <div className="row">
                        <div className="wd-form-login tf-tab">
                            <h4>Create Job</h4>
                            {/* <ul className="menu-tab">
                                <li className="ct-tab active">Candidate</li>
                                <li className="ct-tab">Employer</li>
                            </ul> */}
                            <div className="content-tab">
                                <div className="inner">
                                    <form onSubmit={createjob}>
                                        <div className="ip">
                                            <label >Title</label>
                                            <input type="text" name='title' onChange={e => setJob({ ...job, title: e.target.value })} value={job.title} />
                                        </div>
                                        <div className="ip">
                                            <label >Budget</label>
                                            <input type="number" name='budget' onChange={e => setJob({ ...job, budget: e.target.value })} value={job.budget} />
                                        </div>
                                        <div className="ip">
                                            <label >Job List</label>
                                            <Select
                                                defaultValue={{ value: 'Communication Skills', label: 'Communication Skills' }}
                                                isMulti onChange={expertiseSelect}
                                                options={expertise} />

                                        </div>
                                        <div className="ip">
                                            <label >Description</label>

                                            {/* <input type="textarea"   required="" /> */}
                                            <textarea onChange={e => setJob({ ...job, description: e.target.value })} value={job.description}></textarea>

                                        </div>
                                        {/* <div className="group-ant-choice st">
                                            <div className="sub-ip"><input type="checkbox" />I agree to the <a href="#">Terms of User</a></div>
                                        </div> */}
                                        <button type="submit">Submit</button>

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
