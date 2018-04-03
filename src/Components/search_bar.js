import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			term: ''
		};
	}
	render(){
		return(
			<div className="search-bar">
				<div className="flex-li">
					<header id="logo"><strong>VideoHall</strong> </header>
				</div>
				<div className="input-text">
					<input type="text" 
					value={this.state.term} 
					onChange={e => {
							this.setState({term: e.target.value});
						}
					}

					onKeyPress={(e) => {
						if(e.which == 13){
							const v = this.state.term;
							console.log(v);
							this.props.onVideoSearch(v);
						}
					}}	 
				/>
				<div className="flex-li">
					<i className="fas fa-search" onClick={(e) => {
						const v = this.state.term;
						this.props.onVideoSearch(v)}}></i>
				</div>
				</div>
			</div>
		);	
	}
}

export default SearchBar;