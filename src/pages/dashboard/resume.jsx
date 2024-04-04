import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Resume() {

    const [employer, setEmployer] = useState({})
    let { userId } = useParams();


    function getSingleEmployer() {

        fetch(process.env.REACT_APP_API + "/user-by-id/" + userId, {
        }).then(e => e.json()).then(res => {
            setEmployer(res.data)
        })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        getSingleEmployer()
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
                                            <li><a href="#">CV Details</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="candidates-section">
                    <div className="tf-container">


                        <div className="row" >
                            <div className="col-lg-8">
                                <div className="wd-cv-item">
                                    <div className="item-group">
                                        <div className="content-left">
                                            <div className="avatar">
                                                <img src="http://127.0.0.1:4000/avatar.jpg" alt="images" />
                                                {/* <img src={process.env.REACT_APP_API + (employer?.user && employer?.user[0]?.img)} alt="logo" /> */}
                                            <span className='fs-5'>{employer.email}</span>
                                            </div>
                                            <h6>tools</h6>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--premiere"><span className="path1"></span><span className="path2"></span></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">ADOBE PHOTOSHOP</div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--illustrator"><span className="path1"></span><span className="path2"></span></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">ADOBE ILLUStrator</div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--indesign"><span className="path1"></span><span className="path2"></span></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">ADOBE INDESIGN</div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--aftereffects"><span className="path1"></span><span className="path2"></span></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">ADOBE AFTER EFFECTS</div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--premiere"><span className="path1"></span><span className="path2"></span></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">ADOBE Premiere</div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--xd"><span className="path1"></span><span className="path2"></span><span className="path3"></span></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">ADOBE XD</div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--figma"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">Figma</div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--sketch"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">Sketch</div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--zeplin"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">ZEPLIN</div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--invision"><span className="path1"></span><span className="path2"></span></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">INVISION</div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--abstract"></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">Abstract</div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--principle"></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">Principle</div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill mg-bt-40">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--protopie"><span className="path1"></span><span className="path2"></span><span className="path3"></span></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">PROTOPIE</div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <h6 className="mg-bt-26">Other Tools</h6>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--magento"></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">MAGENTO / ADOBE </div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--salesforce"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span><span className="path11"></span></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">SALESFORCE </div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--jira"></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">ATLASSIAN JIRA </div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="wd-cv-skill">
                                                <div className="progress-item">
                                                    <div className="icon"><span className="icon-logo--slack"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span></div>
                                                    <div className="progress-heading">
                                                        <div className="heading-progress">SLACK</div>
                                                        <div className="donat-bg" data-percent="50%">
                                                            <div className="custom-donat"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="content-right">
                                            <div className="profile">
                                                <h2>{employer.firstName}</h2>
                                                <h4>{employer.mobile}</h4>
                                                <h6>{employer.title}</h6>
                                                <p>{employer.description}</p>
                                            </div>
                                            <h6 className="title-cv">Experience</h6>
                                            <div className="cv-road-map">
                                                <div className="inner">
                                                    <div className="history">2020-2021</div>
                                                    <div className="dot-icon"></div>
                                                    <div className="content">
                                                        <h6>At vero eos et accusamus et</h6>
                                                        <div className="sub-heading">Company name - TOWN</div>
                                                        <ul className="list-dot">
                                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="inner">
                                                    <div className="history">2020-2021</div>
                                                    <div className="dot-icon"></div>
                                                    <div className="content">
                                                        <h6>At vero eos et accusamus et</h6>
                                                        <div className="sub-heading">Company name - TOWN</div>
                                                        <ul className="list-dot">
                                                            <li>Sed ut perspiciatis unde omnis iste natus error sit</li>
                                                            <li>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti </li>
                                                            <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="inner">
                                                    <div className="history">2020-2021</div>
                                                    <div className="dot-icon"></div>
                                                    <div className="content">
                                                        <h6>At vero eos et accusamus et</h6>
                                                        <div className="sub-heading">Company name - TOWN</div>
                                                        <ul className="list-dot">
                                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit elit</li>
                                                            <li>Excepteur sint occaecat cupidatat non proident</li>
                                                            <li>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="title-cv">Education</h6>
                                            <div className="cv-road-map">
                                                <div className="inner">
                                                    <div className="history">2020-2021</div>
                                                    <div className="dot-icon"></div>
                                                    <div className="content">
                                                        <h6>At vero eos et accusamus et</h6>
                                                        <div className="sub-heading">Company name - TOWN</div>
                                                    </div>
                                                </div>
                                                <div className="inner">
                                                    <div className="history">2020-2021</div>
                                                    <div className="dot-icon"></div>
                                                    <div className="content">
                                                        <h6>Sed ut perspiciatis unde omnis</h6>
                                                        <div className="sub-heading">Company name - TOWN</div>
                                                    </div>
                                                </div>
                                                <div className="inner">
                                                    <div className="history">2020-2021</div>
                                                    <div className="dot-icon"></div>
                                                    <div className="content">
                                                        <h6>Et harum quidem rerum facilis </h6>
                                                        <div className="sub-heading">Company name - TOWN</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
