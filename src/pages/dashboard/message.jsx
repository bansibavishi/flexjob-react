import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import SendbirdApp from '@sendbird/uikit-react/App';
import '@sendbird/uikit-react/dist/index.css';
import { Helmet } from 'react-helmet';

import SendbirdChat from '@sendbird/chat';
import { OpenChannelModule } from '@sendbird/chat/openChannel';
import ChannelList from '@sendbird/uikit-react/ChannelList';
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';
import OpenChannel from '@sendbird/uikit-react/OpenChannel';

const sbAppId = process.env.REACT_APP_SBID


export default function Message() {

    const cUser = useSelector(state => state.user)
    const [search] = useSearchParams();
    const otherUserId = search.get('id')
    const [channel, setChannel] = useState(null);

    // const sb = SendbirdChat.init({ appId: sbAppId, modules: [new OpenChannelModule()] })



    function getUser() {
        fetch(process.env.REACT_APP_API + "/user-by-id/" + otherUserId, {})
            .then(e => e.json()).then(res => {
                // setEmployer(res.data)
            }).catch(err => { console.log(err); })
    }


    async function createChannel(channelUrl) {

        const params = {
            // name: NAME,
            channelUrl: channelUrl,
            operatorUserIds: [cUser._id, otherUserId],
        };

        // sb.connect(cUser._id).then(async () => {
        //     var isExist = await sb.groupChannel.getChannel(channelUrl).catch(err => err)
        //     console.log(isExist, 5555555555555555555);
        //     if (isExist?._url) {
        //         isExist.sendUserMessage({ message: "Hello from " + cUser.firstName })
        //         setChannel(isExist)
        //     } else {
        //         sb.groupChannel.createChannel(params)
        //             .then(channel => {
        //                 setChannel(channel)
        //             })
        //     }
        // })

    }

    // useEffect(() => {
    //     if (cUser && otherUserId) {
    //         createChannel(strMix(cUser._id, otherUserId));
    //     }
    // }, [cUser, otherUserId]);

    if (!cUser) return

    return (<>
        <Helmet>
            <body className='dashboard show sendbird-theme--light' />
        </Helmet>
        <div className="App vh-100" style={{ paddingTop: "100px" }}>
            {/* <SendbirdProvider
                appId={sbAppId}
                profileUrl={cUser.link}
                nickname={cUser.firstName}
            >
                <div style={{ height: '90vh' }}>



                    <OpenChannel
                        useMessageGrouping={false}  // To determine whether to use message grouping,
                        disableUserProfile  // to determine whether to display user profile on clicking userIcons,
                        channelUrl={channel?._url} // pass your channel URL here.
                    />
                    {console.log(channel?._url,44444444444444444)}
                </div>
                <div className='sendbird-app__wrap'>
                    <ChannelList activeChannelUrl={channel?._url} />
                </div>
            </SendbirdProvider> */}
            <SendbirdApp
                // Add the two lines below.
                // You can find your Sendbird application ID on the Sendbird dashboard.
                appId={sbAppId}
                profileUrl={cUser.link}
                nickname={cUser?.type == 'employer' ? cUser.title : cUser.firstName + " " + cUser.lastName}
                // disableUserProfile={true}
                allowProfileEdit={false}



                // Specify the user ID you've created on the dashboard.
                // Or you can create a user by specifying a unique userId.
                userId={cUser._id}
            />
        </div>
    </>
    );

}




function strMix(str1, str2) {
    let val = ''
    if (str2 && str1) for (let i = 0; i < str1.length; i++)  val += (str1.charCodeAt(i) + str2.charCodeAt(i))
    return val
}
