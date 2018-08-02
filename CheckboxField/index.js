import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'preact-material-components/Checkbox';
import Formfield from 'preact-material-components/FormField';
import './mdc.checkbox-field.css';
import 'preact-material-components/Checkbox/style.css';
import '@material/form-field/dist/mdc.form-field.min.css';


export default class CheckboxField extends Component {


	static propTypes = {
		label: PropTypes.string,
		style: PropTypes.object
	};





	static defaultProps = {
		label: null
	};





/**
 * @static
 * @private
 * @type {Number}
 */	
	static _id = 1;





/**
 * @private
 * @return {String}
 */	
	_getId() {
		return this.constructor.name + CheckboxField._id++;
	};





	render() {
		let {label, style, ...props} = this.props;
		let id = this._getId();
		return (
			<Formfield className={this.props.disabled ? 'mdc-form-field--disabled' : null} style={style}>
				<Checkbox {...props} id={id} />
				<label for={id} disabled={this.props.disabled}>{label}</label>
			</Formfield>
		);
		
	};


};
