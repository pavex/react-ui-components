import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from 'preact-material-components/TextField';
import 'preact-material-components/TextField/style.css';


export default class NumberField extends Component {


	static propTypes = {
		integer: PropTypes.bool,
		signed: PropTypes.bool,
		min: PropTypes.number,
		max: PropTypes.number
	};





	static defaultProps = {
		integer: false,
		signed: false,
		min: null,
		max: null
	};





//	_keypressFilter(e) {
//		let ch = String.fromCharCode(e.keyCode);
//		if (!ch.match(/[0-9]/)) {
//			e.preventDefault();
//		}
//	};






	_parseValue(str) {
		let {integer, signed, min, max} = this.props;
		let value = parseFloat(str.replace(',', '.'));
		value = signed ? Math.abs(value) : value;
		value = min ? Math.max(min, value) : value;
		value = max ? Math.min(max, value) : value;	
		value = integer ? parseInt(value, 10) : value;
		return value;
	};





	_setValue(value) {
		if (this.props.onChange) {
			value = this._parseValue(String(value));
			this.props.onChange.call(this, value);
		}
	};





	_formatValue(value) {
		value = this._parseValue(String(value));
		return String(value).replace('.', ','); // Formatting
	};





	render() {
//				onKeypress={this._keypressFilter.bind(this)}
		return (
			<TextField {...this.props}
				value={this._formatValue(this.props.value)}
				onChange={(e) => {this._setValue(e.target.value)}}
			/>
		)
	};





};
