/** @format */

import React from "react";
import "./Video.css";
import  Avatar  from "@material-ui/core/Avatar";
function Video({ image, title, channelImage, views, timestamp, channel }) {
  return (
    <div className="video__card">
      <img src={image} alt="thumbnail" className='VC__thumbnail' />
      <div className="video_info">
        <Avatar className="video__avatar" alt={channel} src={channelImage} />
      <div className='video__text'>
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
                {views} • {timestamp}
          </p>
      </div>
      </div>
    </div>
  );
}

export default Video;
