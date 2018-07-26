import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class FormRow extends Component {

	static propTypes = {
		title: PropTypes.bool,
		checkbox: PropTypes.bool,
		indent: PropTypes.bool,
		padding: PropTypes.number
	};

	
	_styles = {
		title: {
			display: 'block',
			paddingTop: 18,
			paddingLeft: this.props.padding || 24
		},
		checkbox: {
			paddingLeft: this.props.padding || 12
		},
		indent: {
			paddingLeft: this.props.padding || 24
		}
	};
	
	_getStyle() {
		if (!!this.props.title) {
			return this._styles.title;
		}
		else if (!!this.props.checkbox) {
			return this._styles.checkbox;
		}
		else if (this.props.indent) {
			return this._styles.indent;
		}
		return null;
	};
	
	
	render() {
		return (
			<div style={this._getStyle()}>
				{this.props.children}
			</div>
		);
	
	};

};
