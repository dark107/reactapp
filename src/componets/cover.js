import React from 'react';
import "../componets/cover.css"
import coverVideo from "../media/Cover-video.mp4";
const Cover = () => {
    return (
        <div className="cover-container">

        <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>Urano  developer </h1>
            <p>Developer | Content Create | Designer web</p>
        </div>
    )
}

export default Cover
