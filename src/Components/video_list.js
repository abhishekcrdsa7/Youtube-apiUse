import React, { Component } from 'react';
import VideoItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((d) => <VideoItem onVideoSelect={props.onVideoSelect} key={d.etag} video={d} />);
	return(
		<div className="col-md-4 list-group">
			<ul>
				{videoItems}
			</ul>
		</div>
	);
}

export default VideoList;