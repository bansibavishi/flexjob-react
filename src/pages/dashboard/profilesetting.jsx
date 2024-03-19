import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import Select from 'react-select'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
// axios.defaults.withCredentials = true

export default function Profile() {

    const cUser = useSelector(state => state.user)
    const [expertise, setExpertise] = useState([])

    const [user, setUser] = useState({
        // type: cUser?.type,
        firstName: cUser?.firstName,
        lastName: cUser?.lastName,
        email: cUser?.email,
        password: cUser?.password,
        mobile: cUser?.mobile,
        expertise: cUser?.expertise,
        title: cUser?.title,
        description: cUser?.description,
        location: cUser?.location,
        rate: cUser?.rate,
        image: cUser?.image
    })
    console.log(user, cUser);



    function getExpertise() {

        axios.get(process.env.REACT_APP_API + "/expertise-data")
            .then(res => {
                console.log(res);
                if (res.data.data.length) {
                    var ex = res.data.data.map(e => {
                        return {
                            value: e.technology,
                            label: e.technology
                        }
                    })
                    setExpertise(ex)
                }
                console.log(res);
            })

    }

    function update(e) {
        e.preventDefault();

        var pData = new FormData()
        for (const k in user) {
            if (k != '_id' && k != 'email' && k != 'savedJob' && k != 'workHistory')
                if (k == "expertise") {
                    user[k].map(e => {
                        pData.append(k, e)
                    })
                } else
                    pData.append(k, user[k])
        }


        var token = localStorage.getItem('token')

        axios.postForm(process.env.REACT_APP_API + "/profile-update", pData, { headers: { Authorization: 'Bearer ' + token } })
            .then(res => {
                console.log(res.data);
                    if (res.data?.status) {
                        toast.success(res.data?.message)
                    }
                    if (res.data?.error) {
                        toast.error(res.data?.error)
                    }
            })

        // fetch(, {
        //     method: "post",
        //     body: pData,
        //     headers: {
        //         "content-type": "multipart/form-data",
        //         Authorization: 'Bearer ' + token
        //     }
        // }).then(e => e.json()).then(res => {
        //     console.log(res);

        // })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }


    useEffect(() => {
        getExpertise()

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
                                            <img className="avatar " id="profileimg" src={cUser?.link} alt="" />
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

                                                </div>
                                                <fieldset>
                                                    <label className="title-user fw-7">Location</label>
                                                    <input type="text" className="input-form" onChange={e => setUser({ ...user, location: e.target.value })} value={user.location} required />
                                                </fieldset>
                                                <fieldset>
                                                    <label className="title-user fw-7">Job Title</label>
                                                    <input type="text" className="input-form" onChange={e => setUser({ ...user, title: e.target.value })} value={user.title} required />
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
