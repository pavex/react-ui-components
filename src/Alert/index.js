import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Rows, Row} from 'pavex-react-ui-layout';
import Dialog from './../Dialog';
import Button from 'preact-material-components/Button';
import 'preact-material-components/Button/style.css';
import Typography from 'preact-material-components/Typography';
import 'preact-material-components/Typography/style.css';


export default class Alert extends Component {


	static propTypes = {
		message: PropTypes.string.isRequired,
		title: PropTypes.string,
		closeButtonTitle: PropTypes.string,
		onClose: PropTypes.func,
	};





	static defaultProps = {
		closeButtonTitle: 'Close'
	};





	_closeClick() {
		if (this.props.onClose) {
			this.props.onClose.call(this);
		}
	};





//
	render() {
		let {message, title, closeButtonTitle} = this.props;
		return (
			<Dialog width={480}>
				<Rows stretch>
					<Row stretch padding>
						{title ? <div><Typography headline6>{title}</Typography></div> : null}
						<Typography body1>{message}</Typography>
					</Row>
					<Row padding={8} containerStyle={{textAlign: 'right'}}>
						<Button outline onClick={this._closeClick.bind(this)}>{closeButtonTitle}</Button>
					</Row>
				</Rows>
			</Dialog>
		);
	};





};
