import React, {Component} from 'react';
import LineRipple from 'preact-material-components/LineRipple';
import 'preact-material-components/TextField/style.css';
import 'preact-material-components/LineRipple/style.css';
import './style.css';


export default class TextFieldContents extends Component {

/** {Element} */
	_textarea = null;

/** {MDComponent} */
	_ripple = null;





	select() {
		this._textarea.select();
	};





	_focusin() {
		if (this._ripple) {
			this._ripple.MDComponent.activate();
		}
		this.select();
	};





	_focusout() {
		if (this._ripple) {
			this._ripple.MDComponent.deactivate();
		}
	};





	render() {
		return (
			<div
				{...this.props}
				className="mdc-text-field mdc-text-field--selectable-contents"
				tabIndex={0}
				onFocusin={this._focusin.bind(this)}
				onFocusout={this._focusout.bind(this)}
			>
				<textarea className="mdc-text-filed__contents"
					ref={(ref) => this._textarea = ref}
					autoComplete="off"
					autoCorrect="off"
					autoCapitalize="off"
					spellCheck="false"
					readOnly="true"
				>
					{this.props.code}
				</textarea>
				<LineRipple ref={(ref) => this._ripple = ref} />
			</div>
		);
	};
	
}