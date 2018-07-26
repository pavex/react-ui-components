import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';


export default class Scrollbox extends Component {


	static propTypes = {
		scrolling: PropTypes.bool
	};





	static defaultProps = {
		scrolling: false // TODO
	};


	
	
/** @private @type {string} */	
	_cssClassName = 'ui-scrollbox';





//
	render() {
		return (
			<div className={this._cssClassName}>
				<div className={this._cssClassName + '__container'}>
					{this.props.children}
				</div>
			</div>
		);
	};





};
