import React, { Component } from 'react';

const VideoItem = ({video,onVideoSelect}) => {
	const imgUrl = video.snippet.thumbnails.default.url;
	return(<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list-media">
				<div className="media-left">
					<img src={imgUrl}/>
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title.substring(0,50)}</div>
				</div>
			</div>
		</li>
	);
}

export default VideoItem;