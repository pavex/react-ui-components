import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Symbol extends Component {
	
	static propTypes = {
		x: PropTypes.bool,
		padding: PropTypes.number
	};
	
	static defaultProps = {
		padding: 16
	};

	_renderSymbol() {		
		if (this.props.x) {
			return String.fromCharCode(10799);
		}
	};
	
	_getStyle() {
		if (!!this.props.padding) {
			let {padding} = this.props;
			return {
				paddingLeft: padding,
				paddingRight: padding
			};
		}
		return null;
	};
	
	render() {
		return (
			<span style={this._getStyle()}>{this._renderSymbol()}</span>
		);
	
	};
	
	
};
