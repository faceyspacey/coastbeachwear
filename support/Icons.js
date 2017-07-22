import React from 'react'
import styles from '../components/App/App.css'

const Icons = {
	facebook: function () { return ( 
		<svg className={styles} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56.693 56.693" preserveAspectRatio="xMidYMin slice" style= {{ "enableBackground": "new 0 0 56.693 56.693", color: "black" }} xmlSpace="preserve">
	 		<path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029 c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77 L40.43,21.739z"/>
	 	</svg>
	)},
	instagram: function() { return (
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56.7 56.7" preserveAspectRatio="xMidYMin slice" style= {{ "enableBackground": "new 0 0 56.7 56.7" , color: "black" }} xmlSpace="preserve">
			 <g> 
				<path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7 c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"/>
				<circle cx="41.5" cy="16.4" r="2.9"/>
				<path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9 h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.4,39.9c0,3.1-0.9,5.6-2.7,7.3 c-1.8,1.7-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6 c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9z"/> 
			</g> 
		</svg> 
	)},
	logo: function() { return (
		<svg id="Layer_1" dataName="Layer 1" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 901.93 389.97" style={{"paddingBottom": "44%"}}>
			<title>logo_rc3</title>
			<path className="cls-1" d="M305.93,467.53c0-29.65,28.59-41.73,75.45-41.73s75.45,12.08,75.45,41.73S428.09,509,381.38,509,305.93,497.18,305.93,467.53Zm132.64,0c0-21.23-21.37-29.9-57.19-29.9S324,446.3,324,467.53s21.38,29.77,57.33,29.77S438.57,488.88,438.57,467.53Z" transform="translate(-43.52 -305.01)"/>
			<path className="cls-1" d="M611.54,502.18l-10.62-12H509.48L499,502.06c-3.26,3.66-6.51,5.37-11,4.76-6.23-.85-8.07-6.1-3.82-10.86l53.51-60.28c4.81-5.37,9.77-8.05,17.55-8.05,8.07,0,12.88,2.68,17.55,8.05l53.93,60.4c4.25,4.64,2.26,10-3.68,10.74A12.32,12.32,0,0,1,611.54,502.18Zm-92.44-22.7h72.19L555.06,439Z" transform="translate(-43.52 -305.01)"/>
			<path className="cls-1" d="M777,431.29c3.68,1.22,5.52,3.29,5.52,5.61,0,3.42-2.69,5.49-6.51,5.49-6.51,0-23.5-4.27-53.22-4.27-33.69,0-45,2.93-45,12.81,0,10.49,15.85,10.62,30.29,10.62,11.75,0,21.52-.24,31.43-0.24,28,0,48.13,4.27,48.13,22.33,0,20.38-27.18,25.14-63.28,25.14-22.93,0-47.14-2.2-56.76-5.49-4.11-1.46-5.38-3.42-5.38-6,0-3.17,2.55-5.12,6.65-5.12,5.95,0,22.08,4.51,53.51,4.51,33.69,0,47-3.42,47-13.06,0-7.32-5.38-11.23-23.07-11.23-12.32,0-23.78.37-35.11,0.37-22.08,0-51.53-2-51.53-22.57,0-19,22.93-24.4,61.15-24.4C742,425.8,766.67,428,777,431.29Z" transform="translate(-43.52 -305.01)"/>
			<path className="cls-1" d="M879.91,507.19c-5.24,0-8.78-3.05-8.78-7.44V439.46H820.88c-4,0-6.79-2.44-6.79-5.86s2.83-6,6.79-6H938.66c4.1,0,6.79,2.44,6.79,6s-2.69,5.86-6.79,5.86H888.54v60.28C888.54,504.14,885,507.19,879.91,507.19Z" transform="translate(-43.52 -305.01)"/>
			<g id="_Group_" data-name="&lt;Group&gt;">
				<path className="cls-1" d="M642,683.16a4.07,4.07,0,0,1,0,8,312.93,312.93,0,0,1-37.57,3.54c-23.16.87-46.12-.46-63.43-3.64C131.79,615.86-31,518.67,75.09,433,141.32,379.55,305.9,337.07,518,308.32c15.09-2,35.28-3.24,55.84-3.3s39.85,1,53.27,2.95h0.05c25.72,3.75,24.09,9.78-4.37,13.84C440,347.92,304,386,258.87,433c-66,68.76,71.63,143.67,383.23,202.48a4.07,4.07,0,0,1-.12,8,461.34,461.34,0,0,1-63.08,5.06c-32.14.51-62.6-1.9-83.87-6.6C207.52,578.42,92.94,502.26,168.84,433c34.93-31.86,107.15-59.31,202.64-81.85C323.9,362.28,276.45,374.11,236,387c-43.64,13.88-79.42,29.06-98.84,46C40.37,517.61,220.11,612.84,642,683.16Z" transform="translate(-43.52 -305.01)"/>
			</g>
		</svg>
	)},
	twitter: function() { return (
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56.693 56.693" preserveAspectRatio="xMidYMin slice" style= {{ "enableBackground": "new 0 0 56.693 56.693", color: "black" }} xmlSpace="preserve">
			<path d="M54.082,15.5495c-1.8115,0.8047-3.7597,1.3477-5.8051,1.5913c2.0874-1.25,3.6894-3.2305,4.4443-5.5918 c-1.9531,1.1587-4.1152,2-6.418,2.4536c-1.8432-1.9643-4.4702-3.1919-7.3769-3.1919c-5.5816,0-10.1069,4.5254-10.1069,10.107 c0,0.792,0.0893,1.563,0.2617,2.3027c-8.3999-0.4209-15.8477-4.4443-20.8325-10.5596c-0.8697,1.4922-1.3682,3.2281-1.3682,5.0811 c0,3.5063,1.7842,6.5996,4.4961,8.4126c-1.6563-0.0532-3.2154-0.5073-4.5777-1.2647c-0.0009,0.042-0.0009,0.0845-0.0009,0.128 c0,4.896,3.4839,8.9809,8.1079,9.9101c-0.8482,0.2305-1.7412,0.3545-2.6631,0.3545c-0.6519,0-1.2847-0.063-1.9019-0.1816 c1.2867,4.0151,5.0191,6.9375,9.441,7.019c-3.459,2.711-7.8165,4.3267-12.5523,4.3267c-0.8154,0-1.6196-0.0484-2.4106-0.1411 c4.4736,2.8681,9.7856,4.541,15.4931,4.541c18.5908,0,28.7559-15.4009,28.7559-28.7569c0-0.4375-0.0088-0.8745-0.0283-1.3076 C51.0137,19.3571,52.728,17.5769,54.082,15.5495z"/> 
		</svg> 
	)}

}

Icons.insert = function(name, style) {
	return (
		<div className={`${styles['scaling-svg-container']} ${style}`}>
			{this[name]()}
		</div>
	)
}

export default Icons