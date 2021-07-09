import React from 'react'
import './VideoRow.css'
function VideoRow({thumbnail, title,description,views, subs,timestamp, channel}) {
    return (
        <div className ='VideoRow'>
            <img src = {thumbnail} alt ='thumbnail'/>
            <div className= 'text'>
                <h3>{title }</h3>
                <p className = 'vide_headline'>
                    {channel} • <span className='subs'> {subs} Subscribers  </span>  {views} • {timestamp}
                </p>
                <p className='video_info'>
                    {description}
                </p>
                </div>

            
        </div>
    )
}

export default VideoRow
