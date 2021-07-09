import React from 'react'
import  Avatar  from "@material-ui/core/Avatar";
import './ChannelRow.css'
import VerfiedIcon from '@material-ui/icons/CheckCircleOutlineRounded'
function ChannelRow({image, channel, description, Subscribers, verified, noOfVideos}) {
    return (
        <div className = 'channelRow'>
            <Avatar  className = 'channel__logo'
            alt = {channel} src = {image} />
           <div className='text'>

            <h4>{channel} {verified && <VerfiedIcon />}</h4>
            <p>
                {Subscribers} subscribers • {noOfVideos} videos
            </p>
            <p>{description}</p>
           </div>
        </div>
    )
}

export default ChannelRow
