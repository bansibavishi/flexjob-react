import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import Select from 'react-select'
import { toast } from 'react-toastify'
axios.defaults.withCredentials = true

export default function Profile() {

    const [user, setUser] = useState({
        type: "employeer",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        mobile: "",
        expertise: ["communication skills", "DSA"],
        title: "qwertyuiop",
        description: "qwtdycvbhdhhd",
        // workHistory: ["fdfdfdf", "fdfdffdff"],
        location: "fdfgdf",
        // savedJob: ["sdd", "sff"],
        rate: "8",
        image: ""
    })
    const [expertise, setExpertise] = useState([])
    const options = [
        { value: 'Communication Skills', label: 'Communication Skills' },
        { value: 'DSA', label: 'DSA' }
    ]
    function getUser() {

        var token = localStorage.getItem('token')

        fetch(process.env.REACT_APP_API + "/profile", {
            // method: "post",
            // body: JSON.stringify(user),
            headers: {
                Authorization: 'Bearer ' + token
                // "content-type": "application/json"
            }
        }).then(e => e.json()).then(res => {
            console.log(res);
            setUser(res.userData)
        })
            .catch(err => {
                console.log(err);
            })
    }

    function exper() {
        fetch(process.env.REACT_APP_API + "/expertise-data", {

        }).then(e => e.json()).then(res => {
            if (res.data.length) {
                var ex = res.data.map(e => {
                    return {
                        value: e.technology,
                        label: e.technology
                    }
                })
                // console.log(ex);
                setExpertise(ex)
            }
            console.log(res);

        })

            .catch(err => {
                console.log(err);
            })

    }

    function update(e) {
        e.preventDefault();

        var pData = new FormData()
        for (const k in user) {
            if(k != '_id' && k !='email'  &&k != 'savedJob' && k != 'workHistory') 
            if (k == "expertise") {
                user[k].map(e => {
                    pData.append(k, e)
                })
            } else
                pData.append(k, user[k])
        }


        var token = localStorage.getItem('token')

        fetch(process.env.REACT_APP_API + "/profile-update", {
            method: "post",
            body: pData,
            headers: {
                "content-type": "multipart/form-data",
                Authorization: 'Bearer ' + token
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
        getUser()
        exper()

    }, [])


    return (
        <>
            <Helmet>
                <title>Profile Setting</title>
            </Helmet>


            <section className="page-title-dashboard">
                <div className="themes-container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 ">
                            <div className="title-dashboard">
                                <div className="title-dash flex2">Profile Setting</div>
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
                                <div className="author-profile flex2 border-bt">

                                    <div className="wrap-img flex2">
                                        <div className="img-box relative">
                                            <img className="avatar " id="profileimg" src="../images/dashboard/image-up.jpg" alt="" />
                                        </div>
                                        <div id="upload-profile">
                                            <h5 className="fw-6">Upload a new avatar: </h5>
                                            <h6>JPG 80x80px</h6>
                                            <input className="up-file" id="tf-upload-img" type="file" name="profile" onChange={e => setUser({ ...user, image: e.target.files[0] })} required="" />
                                        </div>
                                    </div>

                                    <div className="tt-button button-style">
                                        <a href="#" className="btn-3">Save Profile</a>
                                    </div>
                                </div>


                                <div className="form-infor-profile">
                                    <h3 className="title-info">Information</h3>
                                    <form onSubmit={update}>
                                        <div className="form-infor flex flat-form">
                                            <div className="info-box info-wd">
                                                <fieldset>
                                                    <label className="title-user fw-7">First Name</label>
                                                    <input type="text" className="input-form" onChange={e => setUser({ ...user, firstName: e.target.value })} value={user.firstName} required />
                                                </fieldset>
                                                <fieldset>
                                                    <label className="title-user fw-7">Phone Number</label>
                                                    <input type="text" className="input-form" onChange={e => setUser({ ...user, mobile: e.target.value })} value={user.mobile} required />
                                                </fieldset>
                                                <div id="item_date" >
                                                    <label className="title-user fw-7">Title</label>
                                                    <input type='text' className='input-form' onChange={e => setUser({ ...user, title: e.target.value })} value={user.title} required />
                                                    {/* <a className="btn-selector nolink input-form"> Male</a> */}

                                                </div>
                                                <fieldset>
                                                    <label className="title-user fw-7">Offered Salary ($)</label>
                                                    <input type="text" className="input-form" required />
                                                </fieldset>
                                                <div id="item_1" className="dropdown titles-dropdown">
                                                    <label className="title-user fw-7">Expertise</label>

                                                    <Select
                                                        defaultValue={{ value: 'Communication Skills', label: 'Communication Skills' }}
                                                        isMulti styles={{
                                                            control: (baseStyles, state) => ({
                                                                ...baseStyles,
                                                                borderColor: state.isFocused ? 'green' : 'gray',
                                                            }),
                                                        }}
                                                        options={expertise} />

                                                    {/* <select multiple>
                                                    <option>communication skills</option>
                                                    <option>DSA</option>
                                                   </select> */}

                                                </div>
                                                <fieldset>
                                                    <label className="title-user fw-7">Location</label>
                                                    <input type="text" className="input-form" onChange={e => setUser({ ...user, location: e.target.value })} value={user.location} required />
                                                </fieldset>
                                                <fieldset>
                                                    <label className="title-user fw-7">Job Title</label>
                                                    <input type="text" className="input-form" required />
                                                </fieldset>
                                            </div>
                                            <div className="info-box info-wd">
                                                <fieldset>
                                                    <label className="title-user fw-7">LastName</label>
                                                    <input type="text" className="input-form" onChange={e => setUser({ ...user, lastName: e.target.value })} value={user.lastName} required />
                                                </fieldset>
                                                <fieldset>
                                                    <label className="title-user fw-7">Email</label>
                                                    <input type="email" className="input-form" onChange={e => setUser({ ...user, email: e.target.value })} value={user.email} required />
                                                </fieldset>
                                                {/*
                                                <div id="item_size" className="dropdown titles-dropdown ">
                                                    <label className="title-user fw-7">WorkHistory</label>

                                                    <select>
                                                        <option>abc</option>
                                                        <option>xyz</option>

                                                    </select>
                                                </div> */}
                                                {/* <div id="item_2" className="dropdown titles-dropdown">
                                                    <label className="title-user fw-7">Save Job</label>


                                                    <select>
                                                        <option>aaa</option>
                                                        <option>bbb</option>
                                                    </select>
                                                </div> */}


                                                <fieldset>
                                                    <label className="title-user fw-7">Rate</label>
                                                    <input type="number" className="input-form" onChange={e => setUser({ ...user, rate: e.target.value })} value={user.rate} required />
                                                </fieldset>
                                            </div>
                                        </div>

                                        <div className="tag-wrap border-bt">
                                            <h5 className="title-tag fw-7">Description </h5>
                                            <div className="tag-area " >
                                                <ul>
                                                    <li className="tag"></li>
                                                    <li><input type="text" className="tag-input" onChange={e => setUser({ ...user, description: e.target.value })} value={user.description} required /></li>

                                                </ul>
                                            </div>
                                        </div>
                                        <button type='submit'>Submit</button>
                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="flat-dashboard-bottom">
                <div className="themes-container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 ">
                            <h5 className="center">©2023 Jobtex. All Rights Reserved.</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
