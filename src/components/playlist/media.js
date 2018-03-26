import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';
class Media extends Component {
	/*Ecma Script 7*/
	state = {
		author: this.props.author
	}
	/*Ecma Script 6*/
	// constructor(props){
	// 	super(props)
	// 	//this.handleClick = this.handleClick.bind(this);
	// 	this.state = {
	// 		author: props.author	
	// 	}
	// }
	handleClick = (event) => {
		// this.setState({
		// 	author: 'Alexander Pedrozo'
		// })
	}
	render() {

		return(
			<div className="Media" onClick={this.handleClick}>
				<div className="Media-cover">
					<img src={this.props.cover} alt="" width={260} height={160} className="Media-image" />
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
			</div>
		)
	}
}

Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;