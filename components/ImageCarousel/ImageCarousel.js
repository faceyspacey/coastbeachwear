import React, { Component } from 'react'
import styles from './ImageCarousel.css'
import Icons from '../../support/Icons.js'

class ImageCarousel extends Component {
	constructor(props, context) {
		super();
		this.state = {
			selectedIndex: 0,
			top: 0
		}
	}

	setSelectedIndex(index) {
		var newTop;
		var scrollArea;

		scrollArea = 110 * this.props.images.length;

		if (index > 1) newTop = -110 * (index -1 )
		else newTop = 0;

		// No room to move 
		if (scrollArea + newTop < 380) {
			newTop = (scrollArea - 380) * -1
		}

		this.setState({
			selectedIndex: parseInt(index),
			top: newTop
		})
	}

	selectedURL() {
		return this.props.images[this.state.selectedIndex];
	}

	onthumbnailclick(event) {
		 this.setSelectedIndex(event.currentTarget.dataset.key);
	}

	onpreviousclick() {
		var newIndex;

		if (this.state.selectedIndex == 0) return;
		
		newIndex = this.state.selectedIndex - 1;

		this.setSelectedIndex(newIndex);
	}

	onnextclick() {
		var newIndex;

		if (this.state.selectedIndex === this.props.images.length -1) return;
		
		newIndex = this.state.selectedIndex + 1;

		this.setSelectedIndex(newIndex);
	}

	render() {
		return (
			<div className={ styles["main"] }>
				<img src={ this.selectedURL() } className={ styles["main-display"] }/>
				<div className={ styles["controls"] }>
					<div className={ styles["previous"] } onClick={ this.onpreviousclick.bind(this) }>
						{ Icons.insert("next_arrow_outline") }
					</div>
					<div className={ styles["scroll-area"] }>
						<div className={ styles["scroll-content"] } style={{top: this.state.top + "px"}}>
							{
								this.props.images.map((function(img, index) {
									return (
										<div 
											className={ styles["thumbnail-container"] + " " + (index == this.state.selectedIndex? styles["selected"] : "") }
											onClick={ this.onthumbnailclick.bind(this) }
											key={ index }
											data-key={ index }
										>
											<img src={ img }/>
										</div>
									)
								}).bind(this))
							}
						</div>
					</div>
					<div className={ styles["next"] } onClick={ this.onnextclick.bind(this) }>
						{ Icons.insert("next_arrow_outline") }
					</div>
				</div>
				
			</div>
		)

	}


}

export default ImageCarousel