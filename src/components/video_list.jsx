import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelected}) => {
  return (
    <ul className="col-md-4 list-group">
      {
        videos.map((video, index) => <VideoListItem  onVideoSelected={onVideoSelected} key={index} video={video} />)
      }
    </ul>
  )
}

export default VideoList;

