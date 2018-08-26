import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onVideoSelected}) => {
  
  const videoList = videos.map((video, index) => <VideoListItem  onVideoSelected={onVideoSelected} key={index} video={video} />)

  return (
    <ul className="col-md-4 list-group"> { videoList } </ul>
  )
}

export default VideoList;

