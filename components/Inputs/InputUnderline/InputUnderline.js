import React, { Component } from 'react'
import Input from '../Input.js'
import Icons from '../../../support/Icons.js'
import styles from './InputUnderline.css'

class InputUnderline extends Input {
	styles = Object.assign({}, this.styles, styles);
}

export default InputUnderline