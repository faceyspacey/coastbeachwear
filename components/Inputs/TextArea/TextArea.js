import React, { Component } from 'react'
import Input from '../Input.js'
import styles from './TextArea.css'

class TextArea extends Input {

	styles = Object.assign({}, this.styles, styles);

	inputElement() {
		return (
			<textarea 
				className={ this.hasContent()? this.styles["input-filled"] : this.styles["input"] } 
				placeholder={ this.props.placeholder }
				onChange={ this.onchange.bind(this) } 
				style={{ width: this.props.inputWidth, height: this.props.inputHeight }}
				type= { this.constructor.type }
				value= { this.formatedValue() }
			/>
		)
	}

}

export default TextArea