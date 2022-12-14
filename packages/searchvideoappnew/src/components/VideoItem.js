import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    const { description } = video.snippet.description;
  return (
    <div onClick={()=>onVideoSelect(video)} className="video-item item">
      <img
        alt={description}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
