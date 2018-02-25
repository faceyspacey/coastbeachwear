import React, { Component } from 'react'
import styles from './FooterMenu.css'
import Icons from '../../support/Icons.js'
import FooterMenuItem from './FooterMenuItem.js'

class FooterMenu extends Component {

	constructor(props, context) {
		super(props, context)
	}

	toggle() {
		this.props.open(this.props.dataKey);
	}

	onoptionclick(option) {
		this.props.onselect(option);
		this.props.open(undefined);
	}

	render() {
		return (
			<div className={ this.props.isOpen? styles["main-open"]: styles["main"] }>
				<div className={ styles["anchor"] } onClick={ this.toggle.bind(this) } >
					<div className={ styles["caption-area"] }> 
						{
							!this.props.isOpen && <div className={ styles["caption-triangle"] } >
							</div>
						}

						<div className={ styles["caption"] }>
							{ this.props.caption }
						</div>
					</div>
				</div>
				{
					this.props.isOpen &&
					<div className={ styles["pop-up"] }>
						<div  className={ styles["pop-up-title"] }>
							{ this.props.title }
						</div>
						{
							this.props.options.map((function(option) {
								return <FooterMenuItem
										key={ option }
										selected={ option === this.props.selected }
										option={ option }
										onselect={ this.onoptionclick.bind(this) }
									/>
							}).bind(this))
						}
						<div className={ styles["pop-up-triangle-container"] }>
							<div className={ styles["pop-up-triangle"] }>
							</div>
						</div>
					</div>
				}
			</div>
		)
	}
}

export default FooterMenu