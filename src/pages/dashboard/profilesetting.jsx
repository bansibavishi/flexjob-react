import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import Select from 'react-select'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import Multiselect from 'multiselect-react-dropdown';
import { Link, useParams } from 'react-router-dom'
// axios.defaults.withCredentials = true
import CreatableSelect from 'react-select/creatable';

export default function Profile() {

    const cUser = useSelector(state => state.user)
    const [expertise, setExpertise] = useState([])

    const [user, setUser] = useState({
        firstName: cUser?.firstName,
        lastName: cUser?.lastName,
        email: cUser?.email,
        mobile: cUser?.mobile,
        expertise: cUser?.expertise,
        workHistory: cUser?.workHistory,
        title: cUser?.title,
        description: cUser?.description,
        location: cUser?.location,
        rate: cUser?.rate,
        image: cUser?.image
    })

    useEffect(() => {
        setUser({
            firstName: cUser?.firstName,
            lastName: cUser?.lastName,
            email: cUser?.email,
            mobile: cUser?.mobile,
            expertise: cUser?.expertise,
            workHistory: cUser?.workHistory,
            title: cUser?.title,
            description: cUser?.description,
            location: cUser?.location,
            rate: cUser?.rate,
            image: cUser?.image
        })
    }, [cUser])



    function getExpertise() {

        axios.get(process.env.REACT_APP_API + "/expertise-data")
            .then(res => {
                // console.log(res);
                if (res.data.data.length) {
                    var ex = res.data.data.map(e => {
                        return {
                            name: e.technology,
                            // label: e.technology,
                            id: e._id
                        }
                    })
                    setExpertise(ex)
                }
                // console.log(res);
            })

    }

    function update(e) {
        e.preventDefault();

        var pData = new FormData()
        for (const k in user) {
            if (k != '_id' && k != 'email' && k != 'savedJob')
                if (k == "expertise" || k == 'workHistory') {
                    user[k].map(e => {
                        pData.append(k, e)
                    })
                } else
                    pData.append(k, user[k])
        }


        var token = localStorage.getItem('token')

        axios.postForm(process.env.REACT_APP_API + "/profile-update", pData, { headers: { Authorization: 'Bearer ' + token } })
            .then(res => {
                // console.log(res.data);
                if (res.data?.status) {
                    toast.success(res.data?.message)
                } else {
                    toast.error(res.data?.message)
                }
                if (res.data?.error) {
                    toast.error(res.data?.error)
                }
            })

    }


    function wHistorySelect(ex) {
        console.log(ex);
        setUser({ ...user, workHistory: ex.map(e => e.value) })
    }


    useEffect(() => {
        getExpertise()
    }, [])

    function expertiseSelect(ex) {
        setUser({ ...user, expertise: ex.map(e => e.id) })
        console.log(ex);
    }


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

                                    {/* <div className="tt-button button-style">
                                        <a href="#" className="btn-3">Save Profile</a>
                                    </div> */}
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

                                                    {/* <Select
                                                        options={expertise}
                                                        value={expertise.filter(e => cUser?.expertise.includes(e.id))}
                                                        // value={cUser?.expertise.map(u => {
                                                        //     var ee = expertise.filter(e =>{
                                                        //         return e.id === u
                                                        //     })
                                                        //     // console.log(ee[0]);
                                                        //     return ee[0]
                                                        // })}

                                                        onChange={expertiseSelect} isMulti styles={{
                                                            control: (baseStyles, state) => ({
                                                                ...baseStyles,
                                                                borderColor: state.isFocused ? 'green' : 'gray',
                                                            }),
                                                        }}
                                                    /> */}

                                                    <Multiselect
                                                        options={expertise} // Options to display in the dropdown
                                                        selectedValues={expertise.filter(e => cUser?.expertise.includes(e.id))} // Preselected value to persist in dropdown
                                                        onSelect={expertiseSelect} // Function will trigger on select event
                                                        onRemove={expertiseSelect} // Function will trigger on remove event
                                                        displayValue="name" // Property name to display in the dropdown options
                                                    />

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

                                                <fieldset>
                                                    <label className="title-user fw-7">Work History</label>
                                                    <CreatableSelect
                                                        isMulti onChange={wHistorySelect}
                                                        value={user?.workHistory?.map(h => ({ label: h, value: h }))}
                                                    />
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
                                        <div>
                                            <button className="tf-button bg-success text-white" type='submit'>Submit</button>
                                        </div>

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
                            <h5 className="center">©2024 Job Place</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
