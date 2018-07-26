import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Rows, Row} from 'pavex-react-ui-layout';
import Scrollbox from './../Scrollbox';
import './style.css';


export default class Dialog extends Component {


	static propTypes = {
		id: PropTypes.string,
		style: PropTypes.object,
		className: PropTypes.string,
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		fullpage: PropTypes.bool,
		scrolling: PropTypes.bool,
		loading: PropTypes.bool,
		toolbarRenderer: PropTypes.object
	};





	static defaultProps = {
		id: null,
		className: null,
		width: '60%',
		height: null,
		fullpage: false,
		scrolling: false,
		loading: false,
		toolbarRenderer: null
	};


	
	
/** @private @type {string} */	
	_cssClassName = 'ui-dialog';




//
	_renderChildren() {
		let {scrolling, children} = this.props;
		return scrolling ? (<Scrollbox>{children}</Scrollbox>) : children;
	};





//
	_renderContents() {
		if (this.props.toolbarRenderer) {
			return (
				<Rows stretch>
					<Row>{this.props.toolbarRenderer}</Row>
					<Row stretch>{this._renderChildren()}</Row>
				</Rows>
			);
		}
		return this._renderChildren();
	};





//
	render() {
/*
				<div className={this._cssClassName + "__progress"}>
					<LinearProgress indeterminate={true} />
				</div>
*/
		let {id, style, width, height} = this.props;
		width = !this.props.fullpage ? width : null;
		let className = this._cssClassName
			+ (this.props.fullpage ? ' ' + this._cssClassName + '--fullpage' : '')
			+ (this.props.loading ? ' ' + this._cssClassName + '--loading' : '')
			+ (this.state.progress ? ' ' + this._cssClassName + '--progress' : '')
			+ (this.props.className ? ' ' + this.props.className : '');
		return (
			<div className={className} id={id} style={{...style, ...{width, height}}}>
				<div className={this._cssClassName + "__dimmer"}></div>
				{this._renderContents()}
			</div>
		);
	
	};





};
