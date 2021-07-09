import React from 'react'
import './SearchPage.css'
import ChannelRow from '../Components/ChannelRow'
import TuneOutLinedIcon from '@material-ui/icons/TuneOutlined'
import VideoRow from './VideoRow'
function SearchPage() {
    return (
        <div className = 'SearchPage'>
            <div className='filter'>
                <TuneOutLinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            < ChannelRow
            image ='https://yt3.ggpht.com/ytc/AKedOLTfeBj_kNnldtIyFpL08G6gd1BU1bpDnfkh3PLM1w=s176-c-k-c0x00ffffff-no-rj'
            channel = 'Hafeez Techs'
            verified = {true}
            
            Subscribers = '1.1M'
            noOfVideos = {230}
            description = "Tech guy, who teachs and shares stuff about technology, business and much mroe"
            />
            <VideoRow 
            thumbnail = 'https://lh3.googleusercontent.com/proxy/Z8DwxhVwl9aikl6FymgNJ9ZGx1TpPjQjkToak2mB6OTKWfj63-WEa6biH7zdhDi35zuybhd8PYqubhCscB5-_pJ67FI=w680'
            views = '1.4k'
            title = "Record Screen using VLC Media Player"
            subs = '432k'
            description ='We provide your best trainings ever...'
            timestamp = '50 seconds ago'
            channel = 'Hafeez Techs'
            />
        </div>
    )
}

export default SearchPage
