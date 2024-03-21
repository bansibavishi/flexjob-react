import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { StreamChat, User } from 'stream-chat';



import {
    Chat,
    Channel,
    ChannelHeader,
    MessageInput,
    MessageList,
    Thread,
    Window,
    LoadingIndicator
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';


export default function Message() {

    const cUser = useSelector(state => state.user)
    const [client, setClient] = useState(null);
    const [channel, setChannel] = useState(null);


    useEffect(() => {

        async function init() {
            const chatClient = StreamChat.getInstance("yf4v8e7zzc6u");
            await chatClient.connectUser({ id: cUser._id, name: cUser.firstName, image: cUser.link }, chatClient.devToken(cUser._id))

            console.log(cUser._id);
            const channel = chatClient.channel('messaging', 'react-talk', {
                // add as many custom fields as you'd like
                image: 'https://www.drupal.org/files/project-images/react.png',
                name: 'Talk about React',
                members: [cUser._id],
            });

            await channel.watch();
            setChannel(channel)
            setClient(chatClient)
        }
        init()
        if (client) return () => client.disconnectUser()
    }, [])

    console.log(12);
    if (!channel || !client) return <LoadingIndicator />
    console.log(1);
    return (
        <Chat client={client} theme='str-chat__theme-light'>
            <Channel channel={channel}>
                <Window>
                    <ChannelHeader />
                    <MessageList />
                    <MessageInput />
                </Window>
                <Thread />
            </Channel>
        </Chat>
    )

// async function connect() {

//     if (!cUser) return

// const userId = cUser._id;

// const apiKey = 'yf4v8e7zzc6u';
// const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibXV0ZS1uaWdodC0wIn0.1OYofxNZ1ixYkACHr-i1dqpP-QGNkRJs4-32pr7l-ag';

// const chatClient = new StreamChat(apiKey);





// return (
//     <Chat client={chatClient} theme='str-chat__theme-light'>
//         <Channel channel={channel}>
//             <Window>
//                 <ChannelHeader />
//                 <MessageList />
//                 <MessageInput />
//             </Window>
//             <Thread />
//         </Channel>
//     </Chat>
// )



return (
    <>
        {/* <div className="left-menu">
                <div id="sidebar-menu">
                    <ul className="downmenu list-unstyled" id="side-menu">
                        <li>
                            <a href="candidates-dashboard.html" className="tf-effect">
                                <span className="icon-dashboard dash-icon"></span>
                                <span className="dash-titles">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a className="has-arrow tf-effect">
                                <span className="icon-profile dash-icon"></span>
                                <span className="dash-titles">Profile</span>
                            </a>
                            <ul className="sub-menu2" aria-expanded="false">
                                <li><a href="candidates-overview.html">Overview</a></li>
                                <li><a href="candidates-profile-setting.html">Profile Setting</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="candidates-resumes.html" className="tf-effect">
                                <span className="icon-resumes dash-icon"></span>
                                <span className="dash-titles">Resumes</span>
                            </a>
                        </li>
                        <li>
                            <a href="candidates-my-applied.html" className="tf-effect">
                                <span className="icon-my-apply dash-icon"></span>
                                <span className="dash-titles">My Applied</span>
                            </a>
                        </li>
                        <li>
                            <a href="candidates-save-jobs.html" className="tf-effect">
                                <span className="icon-work dash-icon"></span>
                                <span className="dash-titles">Saved Jobs</span>
                            </a>
                        </li>
                        <li>
                            <a href="candidates-alerts-jobs.html" className="tf-effect">
                                <span className="icon-bell1 dash-icon"></span>
                                <span className="dash-titles">Alerts Jobs</span>
                            </a>
                        </li>
                        <li>
                            <a href="candidates-messages.html" className="tf-effect">
                                <span className="icon-chat dash-icon"></span>
                                <span className="dash-titles">Messages</span>
                            </a>
                        </li>
                        <li>
                            <a href="candidates-following-employers.html" className="tf-effect">
                                <span className="icon-following dash-icon"></span>
                                <span className="dash-titles">Following Employers</span>
                            </a>
                        </li>
                        <li>
                            <a href="candidates-meetings.html" className="tf-effect">
                                <span className="icon-meeting dash-icon"></span>
                                <span className="dash-titles">Meeting</span>
                            </a>
                        </li>
                        <li>
                            <a href="candidates-change-passwords.html" className="tf-effect">
                                <span className="icon-change-passwords dash-icon"></span>
                                <span className="dash-titles">Change passwords</span>
                            </a>
                        </li>
                        <li>
                            <a href="candidates-delete-profile.html" className="tf-effect ">
                                <span className="icon-trash dash-icon"></span>
                                <span className="dash-titles">Delete Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="../home-01.html" className="tf-effect">
                                <span className="icon-log-out dash-icon"></span>
                                <span className="dash-titles">Log out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> */}

        <section className="page-title-dashboard">
            <div className="themes-container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 ">
                        <div className="title-dashboard">
                            <div className="title-dash flex2">Messages</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="flat-dashboard-messages">
            <div className="themes-container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 ">

                        <div className="wrapper-messages">
                            <div className="content flex">
                                <div className="left">
                                    <div className="dash-search">
                                        <div className="widget search">
                                            <div className="search-flat">
                                                <form action="#" method="get" role="search" className="search-form">
                                                    <input type="search" className="search-field" placeholder="Search" value="" name="s"
                                                        title="Search for" required="" />
                                                    <button className="search-icon search-submit" type="submit" title="Search"></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className="people" style={{ minHeight: "500px" }}>
                                        <li className="person flex" data-chat="person1">
                                            <div className="images">
                                                <span className="status-icon online"></span>
                                                <img src="../images/dashboard/messages-1.jpg" alt="" />
                                            </div>
                                            <div>
                                                <div className="name fw-7">Initech</div>
                                                <div className="preview fs-12 fw-5 ">Hey! there I'm available</div>
                                            </div>
                                            <span className="time fs-12">05 min</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right">
                                    <div className="top flex2">
                                        <div className="images-box flex2">
                                            <div className="images">
                                                <img src="../images/dashboard/messages-2.jpg" alt="" />
                                            </div>
                                            <div>
                                                <div className="name fw-7 lh-24">Avitex Agency</div>
                                                <div className="map fs-12 flex2">Las Vegas, NV 89107, USA</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat" data-chat="person1" data-message="message1">
                                        <div className="history-time you style">
                                            Today, 5:02 Am
                                        </div>
                                        <div className="bubble you style">
                                            Hello
                                        </div>

                                        <div className="bubble me">
                                            I was wondering...
                                        </div>
                                        <div className="conversation-start">
                                            <span>August 22</span>
                                        </div>
                                    </div>
                                    <div className="chat" data-chat="person2" data-message="message2">

                                        <div className="history-time you style">
                                            Today, 5:02 Am
                                        </div>
                                        <div className="bubble you style">
                                            Hello
                                        </div>

                                        <div className="bubble me">
                                            How are you?
                                        </div>
                                        <div className="history-time">
                                            Today, 5:02 Am
                                        </div>
                                        <div className="conversation-start">
                                            <span>August 22</span>
                                        </div>
                                        <div className="bubble you">
                                            I'm good and you?
                                        </div>
                                        <div className="history-time you">
                                            Today, 5:02 Am
                                        </div>

                                        <div className="bubble me">
                                            Tell me about yourself
                                        </div>
                                        <div className="history-time">
                                            Today, 5:02 Am
                                        </div>

                                        <div className="bubble me">
                                            What are your strengths?
                                        </div>
                                        <div className="history-time">
                                            Today, 5:02 Am
                                        </div>

                                        <div className="bubble you">
                                            I’m a punctual person. I always arrive early and complete my work on time. My previous job
                                            had a lot of deadlines (time when you must finish something by) and I made sure that I
                                            was organized and adhered to (respected) all my jobs.
                                        </div>
                                        <div className="history-time you">
                                            Today, 5:02 Am
                                        </div>
                                    </div>
                                    <div className="chat" data-chat="person3">
                                        <div className="conversation-start">
                                            <span>Today, 3:38 AM</span>
                                        </div>
                                        <div className="bubble you">
                                            Hey human!
                                        </div>
                                        <div className="bubble you">
                                            Umm... Someone took a shit in the hallway.
                                        </div>
                                        <div className="bubble me">
                                            ... what.
                                        </div>
                                        <div className="bubble me">
                                            Are you serious?
                                        </div>
                                        <div className="bubble you">
                                            I mean...
                                        </div>
                                        <div className="bubble you">
                                            It’s not that bad...
                                        </div>
                                        <div className="bubble you">
                                            But we’re probably gonna need a new carpet.
                                        </div>
                                    </div>
                                    <div className="chat" data-chat="person4">
                                        <div className="conversation-start">
                                            <span>Yesterday, 4:20 PM</span>
                                        </div>
                                        <div className="bubble me">
                                            Hey human!
                                        </div>
                                        <div className="bubble me">
                                            Umm... Someone took a shit in the hallway.
                                        </div>
                                        <div className="bubble you">
                                            ... what.
                                        </div>
                                        <div className="bubble you">
                                            Are you serious?
                                        </div>
                                        <div className="bubble me">
                                            I mean...
                                        </div>
                                        <div className="bubble me">
                                            It’s not that bad...
                                        </div>
                                    </div>
                                    <div className="chat" data-chat="person5">
                                        <div className="conversation-start">
                                            <span>Today, 6:28 AM</span>
                                        </div>
                                        <div className="bubble you">
                                            Wasup
                                        </div>
                                        <div className="bubble you">
                                            Wasup
                                        </div>
                                        <div className="bubble you">
                                            Wasup for the third time like is <br />you blind bitch
                                        </div>

                                    </div>
                                    <div className="chat" data-chat="person6">
                                        <div className="conversation-start">
                                            <span>Monday, 1:27 PM</span>
                                        </div>
                                        <div className="bubble you">
                                            So, how's your new phone?
                                        </div>
                                        <div className="bubble you">
                                            You finally have a smartphone :D
                                        </div>
                                        <div className="bubble me">
                                            Drake?
                                        </div>
                                        <div className="bubble me">
                                            Why aren't you answering?
                                        </div>
                                        <div className="bubble you">
                                            howdoyoudoaspace
                                        </div>
                                    </div>
                                    <div className="chat" data-chat="person7">

                                        <div className="history-time you style">
                                            Today, 5:02 Am
                                        </div>
                                        <div className="bubble you style">
                                            Hello
                                        </div>

                                        <div className="bubble me">
                                            I was wondering...
                                        </div>
                                        <div className="conversation-start">
                                            <span>August 22</span>
                                        </div>
                                    </div>
                                    <div className="chat" data-chat="person8">

                                        <div className="history-time you style">
                                            Today, 5:02 Am
                                        </div>
                                        <div className="bubble you style">
                                            Hello
                                        </div>

                                        <div className="bubble me">
                                            I was wondering...
                                        </div>
                                        <div className="conversation-start">
                                            <span>August 22</span>
                                        </div>
                                    </div>
                                    <div className="chat" data-chat="person9">
                                        <div className="history-time you style">
                                            Today, 5:02 Am
                                        </div>
                                        <div className="bubble you style">
                                            Hello
                                        </div>

                                        <div className="bubble me">
                                            I was wondering...
                                        </div>
                                        <div className="conversation-start">
                                            <span>August 22</span>
                                        </div>
                                    </div>
                                    <div className="chat" data-chat="person10">
                                        <div className="history-time you style">
                                            Today, 5:02 Am
                                        </div>
                                        <div className="bubble you style">
                                            Hello
                                        </div>

                                        <div className="bubble me">
                                            I was wondering...
                                        </div>
                                        <div className="conversation-start">
                                            <span>August 22</span>
                                        </div>
                                    </div>
                                    <div className="write flex2">
                                        <div className="write-box flex2">
                                            <input type="text" placeholder="Enter Message..." />
                                            <a href="javascript:;" className="write-link attach-icon"><i className="fa fa-paperclip"
                                                aria-hidden="true"></i></a>
                                            <a href="javascript:;" className="write-link smile-icon"><i className="fa fa-smile-o"
                                                aria-hidden="true"></i></a>
                                        </div>
                                        <a className="icon-send flex2"></a>
                                    </div>
                                </div>
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
