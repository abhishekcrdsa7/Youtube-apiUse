import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail';
const API_KEY = 'AIzaSyAc6OoJpHmkMnWY8JcLF0pANKJlDTYE9GE';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.onVideoSelect = this.onVideoSelect.bind(this);
		this.onVideoSearch = this.onVideoSearch.bind(this);
		this.onVideoSearch('real madrid');
	}
	onVideoSelect(selectedVideo){
		this.setState({selectedVideo});
	}

	onVideoSearch(term) {
		YTSearch({key: API_KEY,term: term},(videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {

		return(
			<div>
				<SearchBar onVideoSearch={this.onVideoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
			</div>
			);
	}
}

ReactDOM.render(<App/>, document.querySelector(".container"));