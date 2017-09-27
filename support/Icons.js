import React from 'react'
import styles from '../components/UI/UI.css'

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
		<svg id="Layer_1" dataName="Layer 1" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395.33 165.67" style={{"paddingBottom": "42%"}}>
			<defs/>
			<path className="cls-1" d="M174.87,233.88c0-12.54,12.09-17.65,31.91-17.65s31.91,5.11,31.91,17.65-12.15,17.55-31.91,17.55S174.87,246.42,174.87,233.88Zm56.09,0c0-9-9-12.64-24.18-12.64s-24.24,3.66-24.24,12.64,9,12.59,24.24,12.59S231,242.91,231,233.88Z" transform="translate(-50 -167.16)"/>
			<path className="cls-1" d="M304.11,248.54l-4.49-5.06H261l-4.43,5c-1.38,1.55-2.75,2.27-4.67,2-2.63-.36-3.41-2.58-1.62-4.59l22.63-25.49a9.07,9.07,0,0,1,7.42-3.41,8.84,8.84,0,0,1,7.42,3.41L310.52,246c1.8,2,1,4.23-1.56,4.54A5.21,5.21,0,0,1,304.11,248.54ZM265,238.94h30.53L280.23,221.8Z" transform="translate(-50 -167.16)"/>
			<path className="cls-1" d="M374.09,218.55c1.56,0.52,2.33,1.39,2.33,2.37,0,1.44-1.14,2.32-2.75,2.32-2.75,0-9.94-1.81-22.51-1.81-14.25,0-19,1.24-19,5.42,0,4.44,6.71,4.49,12.81,4.49,5,0,9.1-.1,13.29-0.1,11.85,0,20.35,1.81,20.35,9.44,0,8.62-11.49,10.63-26.76,10.63-9.7,0-19.93-.93-24-2.32-1.74-.62-2.27-1.44-2.27-2.53,0-1.34,1.08-2.17,2.81-2.17,2.51,0,9.34,1.91,22.63,1.91,14.25,0,19.87-1.44,19.87-5.52,0-3.1-2.27-4.75-9.76-4.75-5.21,0-10.06.15-14.85,0.15-9.34,0-21.79-.83-21.79-9.55,0-8.05,9.7-10.32,25.86-10.32C359.31,216.23,369.72,217.16,374.09,218.55Z" transform="translate(-50 -167.16)"/>
			<path className="cls-1" d="M417.61,250.65c-2.21,0-3.71-1.29-3.71-3.15V222H392.65a2.53,2.53,0,1,1,0-5h49.8a2.57,2.57,0,0,1,2.87,2.53c0,1.45-1.14,2.48-2.87,2.48H421.26V247.5C421.26,249.36,419.77,250.65,417.61,250.65Z" transform="translate(-50 -167.16)"/>
			<g id="_Group_">
				<path className="cls-1" d="M308.34,327.1a2,2,0,0,1,0,4,149.46,149.46,0,0,1-17,1.56A145.19,145.19,0,0,1,261.2,331c-173.81-32-242.89-73.4-197.74-109.86,27.68-22.35,95.48-40.08,182.06-52.23a223.09,223.09,0,0,1,28.13-1.73,197.87,197.87,0,0,1,27.08,1.46h0c12.92,1.86,12.43,4.88-1.49,7-72.63,10.85-126.38,26.41-143.8,45.53-25.31,27.8,29.74,57.85,153,81.7a2,2,0,0,1-.08,4,235,235,0,0,1-31.68,2.37c-16.1.18-31.17-1.1-41.43-3.5C124,279.72,80,249.12,110,221.13c13.53-12.61,41-23.58,77.4-32.75-18.45,4.64-38,9.48-54.78,14.72-17.51,5.46-32.15,11.38-39.68,18C52.24,257,129.08,297.39,308.34,327.1Z" transform="translate(-50 -167.16)"/>
			</g>
		</svg>
	)},
	twitter: function() { return (
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 56.693 56.693" preserveAspectRatio="xMidYMin slice" style= {{ "enableBackground": "new 0 0 56.693 56.693", color: "black" }} xmlSpace="preserve">
			<path d="M54.082,15.5495c-1.8115,0.8047-3.7597,1.3477-5.8051,1.5913c2.0874-1.25,3.6894-3.2305,4.4443-5.5918 c-1.9531,1.1587-4.1152,2-6.418,2.4536c-1.8432-1.9643-4.4702-3.1919-7.3769-3.1919c-5.5816,0-10.1069,4.5254-10.1069,10.107 c0,0.792,0.0893,1.563,0.2617,2.3027c-8.3999-0.4209-15.8477-4.4443-20.8325-10.5596c-0.8697,1.4922-1.3682,3.2281-1.3682,5.0811 c0,3.5063,1.7842,6.5996,4.4961,8.4126c-1.6563-0.0532-3.2154-0.5073-4.5777-1.2647c-0.0009,0.042-0.0009,0.0845-0.0009,0.128 c0,4.896,3.4839,8.9809,8.1079,9.9101c-0.8482,0.2305-1.7412,0.3545-2.6631,0.3545c-0.6519,0-1.2847-0.063-1.9019-0.1816 c1.2867,4.0151,5.0191,6.9375,9.441,7.019c-3.459,2.711-7.8165,4.3267-12.5523,4.3267c-0.8154,0-1.6196-0.0484-2.4106-0.1411 c4.4736,2.8681,9.7856,4.541,15.4931,4.541c18.5908,0,28.7559-15.4009,28.7559-28.7569c0-0.4375-0.0088-0.8745-0.0283-1.3076 C51.0137,19.3571,52.728,17.5769,54.082,15.5495z"/> 
		</svg> 
	)},
	next_arrow: function() { return (
		<svg viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice"  style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLineJoin: "round", strokeMiterlimit: 1.41421}}>
		    <path d="M56,30.75L131,250L56,469.25L455.842,250L56,30.75Z"/>
		</svg>
	)},
	next_arrow_long: function() { return (
		<svg viewBox="0 0 500 250" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin slice"  style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "1.5", paddingBottom: "44%" }}>
		    <g transform="matrix(1,0,0,1,0,7)">
		        <path d="M0,117L0,200L500,200L307,35L307,117L0,117Z" />
		    </g>
		</svg>
	)},
	next_arrow_outline: function() { return (
		<svg viewBox="0 0 1360 1360" preserveAspectRatio="xMidYMin slice" version="1.1" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 1.41421 }}>
		    <path id="layer1" d="M274,1281C236,1258 216,1211 224,1166C229,1138 253,1111 338,1032C424,952 720.063,723.086 754.063,693.086C759.063,689.086 225,240 225,181C225,139 230,126 253,103C292,63 359,64 417,105C439,122 779,366 799,380C819,394 899,451 977,508C1103,599 1121,616 1131,651C1149,711 1128,746 1028,819C718,1048 400,1275 373,1286C330,1305 311,1304 274,1281Z" style={{ fillRule: "nonzero" }}/>
		</svg>
	)},
	clear: function() { return (
		<svg viewBox="0 0 500 500" version="1.1" preserveAspectRatio="xMidYMin slice" style= {{ fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 1.5 }}>
		    <path d="M478,478L22,22" style={{ fill: "none", strokeWidth:"64px" }}/>
		    <path d="M22,478L478.034,22.025L22,478Z" style={{ fill: "none", strokeWidth:"64px" }}/>
		</svg>

	)},
	amex: function() { return (
		<svg viewBox="0 0 60 40" version="1.1" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={ { fillRule: "evenodd", clipRule: "evenodd", strokeLineJoin: "round", strokeMiterLimit: 1.41421, paddingBottom: "66.666%" } }>
		    <g fillRule='nonzero'>
		        <path d='M349.75,315C349.75,317.75 347.5,320 344.75,320L294.75,320C292,320 289.75,317.75 289.75,315L289.75,285C289.75,282.25 292,280 294.75,280L344.75,280C347.5,280 349.75,282.25 349.75,285L349.75,315Z'
		        fill='#5ec1ec' transform='translate(-289.75 -280)' />
		        <path d='M348.281,281.469C349.187,282.375 349.75,283.625 349.75,285L349.75,315C349.75,316.375 349.188,317.625 348.281,318.531C347.374,319.437 346.125,320 344.75,320L319.75,320L294.75,320C293.375,320 292.125,319.438 291.219,318.531L348.281,281.469Z'
		        fill='#5bbbe6' transform='translate(-289.75 -280)' />
		        <g fill='#fff'>
		            <path d='M307.305,304.922L306.848,303.182L303.833,303.182L303.363,304.922L300.608,304.922L303.636,295.604L306.981,295.604L310.046,304.922L307.305,304.922ZM306.328,301.125L305.928,299.602C305.834,299.264 305.722,298.827 305.588,298.289C305.455,297.751 305.367,297.366 305.324,297.134C305.287,297.35 305.211,297.705 305.099,298.2C304.987,298.695 304.738,299.671 304.353,301.126L306.328,301.125Z'
		            transform='translate(-289.75 -280)' />
		            <path d='M315.094,304.922L313.196,298.237L313.139,298.237C313.228,299.375 313.272,300.259 313.272,300.891L313.272,304.921L311.051,304.921L311.051,295.64L314.389,295.64L316.326,302.23L316.377,302.23L318.274,295.64L321.62,295.64L321.62,304.921L319.315,304.921L319.315,300.852C319.315,300.641 319.319,300.407 319.325,300.148C319.331,299.889 319.36,299.257 319.411,298.25L319.354,298.25L317.481,304.922L315.094,304.922L315.094,304.922Z'
		            transform='translate(-289.75 -280)' />
		            <path d='M328.869,304.922L323.359,304.922L323.359,295.641L328.869,295.641L328.869,297.654L325.865,297.654L325.865,299.114L328.646,299.114L328.646,301.126L325.865,301.126L325.865,302.878L328.869,302.878L328.869,304.922Z'
		            transform='translate(-289.75 -280)' />
		            <path d='M338.854,304.922L335.954,304.922L334.143,302.022L332.354,304.922L329.516,304.922L332.594,300.174L329.699,295.641L332.48,295.641L334.156,298.51L335.767,295.641L338.63,295.641L335.691,300.37L338.854,304.922Z'
		            transform='translate(-289.75 -280)' />
		        </g>
		        <g fill='#fff'>
		            <path d='M307.305,304.922L306.848,303.182L303.833,303.182L303.363,304.922L300.608,304.922L303.636,295.604L306.981,295.604L310.046,304.922L307.305,304.922ZM306.328,301.125L305.928,299.602C305.834,299.264 305.722,298.827 305.588,298.289C305.455,297.751 305.367,297.366 305.324,297.134C305.287,297.35 305.211,297.705 305.099,298.2C304.987,298.695 304.738,299.671 304.353,301.126L306.328,301.125Z'
		            transform='translate(-289.75 -280)' />
		            <path d='M315.094,304.922L313.196,298.237L313.139,298.237C313.228,299.375 313.272,300.259 313.272,300.891L313.272,304.921L311.051,304.921L311.051,295.64L314.389,295.64L316.326,302.23L316.377,302.23L318.274,295.64L321.62,295.64L321.62,304.921L319.315,304.921L319.315,300.852C319.315,300.641 319.319,300.407 319.325,300.148C319.331,299.889 319.36,299.257 319.411,298.25L319.354,298.25L317.481,304.922L315.094,304.922L315.094,304.922Z'
		            transform='translate(-289.75 -280)' />
		            <path d='M328.869,304.922L323.359,304.922L323.359,295.641L328.869,295.641L328.869,297.654L325.865,297.654L325.865,299.114L328.646,299.114L328.646,301.126L325.865,301.126L325.865,302.878L328.869,302.878L328.869,304.922Z'
		            transform='translate(-289.75 -280)' />
		            <path d='M338.854,304.922L335.954,304.922L334.143,302.022L332.354,304.922L329.516,304.922L332.594,300.174L329.699,295.641L332.48,295.641L334.156,298.51L335.767,295.641L338.63,295.641L335.691,300.37L338.854,304.922Z'
		            transform='translate(-289.75 -280)' />
		        </g>
		        <path d='M344.75,281C346.956,281 348.75,282.794 348.75,285L348.75,315C348.75,317.206 346.956,319 344.75,319L294.75,319C292.544,319 290.75,317.206 290.75,315L290.75,285C290.75,282.794 292.544,281 294.75,281L344.75,281M344.75,280L294.75,280C292,280 289.75,282.25 289.75,285L289.75,315C289.75,317.75 292,320 294.75,320L344.75,320C347.5,320 349.75,317.75 349.75,315L349.75,285C349.75,282.25 347.5,280 344.75,280Z'
		        fill='#9bcee0' transform='translate(-289.75 -280)' />
		    </g>
		</svg>
	)},
	mastercard: function() { return (
		<svg viewBox="0 0 60 40" version="1.1" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={ { fillRule: "evenodd", clipRule: "evenodd", strokeLineJoin: "round", strokeMiterLimit: 1.41421, paddingBottom: "66.666%" } }>
			 <g fillRule='nonzero'>
		        <path d='M269.75,315C269.75,317.75 267.5,320 264.75,320L214.75,320C212,320 209.75,317.75 209.75,315L209.75,285C209.75,282.25 212,280 214.75,280L264.75,280C267.5,280 269.75,282.25 269.75,285L269.75,315Z'
		        fill='#5565af' transform='translate(-209.75 -280)' />
		        <path d='M268.281,281.469C269.187,282.375 269.75,283.625 269.75,285L269.75,315C269.75,316.375 269.188,317.625 268.281,318.531C267.374,319.437 266.125,320 264.75,320L239.75,320L214.75,320C213.375,320 212.125,319.438 211.219,318.531L268.281,281.469Z'
		        fill='#fff' fillOpacity='.04' transform='translate(-209.75 -280)' />
		        <g fill='#ea564b'>
		            <path d='M239.75,293.4C237.917,291.32 235.24,290 232.25,290C226.728,290 222.25,294.477 222.25,300C222.25,305.521 226.728,310 232.25,310C235.24,310 237.917,308.68 239.75,306.599C238.198,304.837 237.25,302.534 237.25,300C237.25,297.466 238.198,295.162 239.75,293.4Z'
		            transform='translate(-209.75 -280)' />
		            <path d='M239.75,293.4C238.198,295.162 237.25,297.467 237.25,300C237.25,302.533 238.198,304.837 239.75,306.599C241.302,304.837 242.25,302.534 242.25,300C242.25,297.466 241.302,295.162 239.75,293.4Z'
		            transform='translate(-209.75 -280)' />
		        </g>
		        <path d='M247.25,290C244.26,290 241.583,291.32 239.75,293.4C239.317,293.892 238.938,294.43 238.606,295L240.894,295C241.258,295.625 241.541,296.299 241.765,297L237.721,297C237.518,297.643 237.371,298.309 237.302,299L242.181,299C242.215,299.33 242.249,299.66 242.249,300C242.249,300.338 242.229,300.671 242.196,301L237.301,301C237.37,301.691 237.517,302.357 237.72,303L241.776,303C241.553,303.704 241.254,304.372 240.89,305L238.605,305C238.936,305.568 239.316,306.107 239.749,306.599C241.582,308.68 244.259,310 247.249,310C252.771,310 257.249,305.521 257.249,300C257.25,294.477 252.772,290 247.25,290Z'
		        fill='#e9d419' transform='translate(-209.75 -280)' />
		        <path d='M264.75,281C266.956,281 268.75,282.794 268.75,285L268.75,315C268.75,317.206 266.956,319 264.75,319L214.75,319C212.544,319 210.75,317.206 210.75,315L210.75,285C210.75,282.794 212.544,281 214.75,281L264.75,281M264.75,280L214.75,280C212,280 209.75,282.25 209.75,285L209.75,315C209.75,317.75 212,320 214.75,320L264.75,320C267.5,320 269.75,317.75 269.75,315L269.75,285C269.75,282.25 267.5,280 264.75,280Z'
		        fill='#7684b7' transform='translate(-209.75 -280)' />
		    </g>
		</svg>
	)},
	visa: function() { return (
		<svg viewBox="0 0 60 40" version="1.1" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={ { fillRule: "evenodd", clipRule: "evenodd", strokeLineJoin: "round", strokeMiterLimit: 1.41421, paddingBottom: "66.666%" } }>
			<g fillRule='nonzero'>
		        <path d='M189.75,315C189.75,317.75 187.5,320 184.75,320L134.75,320C132,320 129.75,317.75 129.75,315L129.75,285C129.75,282.25 132,280 134.75,280L184.75,280C187.5,280 189.75,282.25 189.75,285L189.75,315Z'
		        fill='#f3f4f4' transform='translate(-129.75 -280)' />
		        <path d='M130.75,290L130.75,285C130.75,282.25 133,280 135.75,280L183.75,280C186.5,280 188.75,282.25 188.75,285L188.75,290'
		        fill='#5565af' transform='translate(-129.75 -280)' />
		        <path d='M188.75,310L188.75,315C188.75,317.75 186.5,319 183.75,319L135.75,319C133,319 130.75,317.75 130.75,315L130.75,310'
		        fill='#e6a124' transform='translate(-129.75 -280)' />
		        <g fill='#5565af'>
		            <path d='M147.137,303.379C147.543,302.229 147.828,301.492 147.996,301.168L151.371,294.293L153.84,294.293L147.996,305.715L145.387,305.715L144.395,294.293L146.7,294.293L147.098,301.168C147.118,301.402 147.129,301.75 147.129,302.207C147.117,302.744 147.102,303.135 147.082,303.379L147.137,303.379Z'
		            transform='translate(-129.75 -280)' />
		            <path d='M152.809,305.715L155.247,294.293L157.63,294.293L155.192,305.715L152.809,305.715Z'
		            transform='translate(-129.75 -280)' />
		            <path d='M164.934,302.34C164.934,303.43 164.547,304.289 163.778,304.922C163.007,305.555 161.962,305.871 160.645,305.871C159.493,305.871 158.567,305.637 157.864,305.168L157.864,303.027C158.868,303.589 159.802,303.871 160.661,303.871C161.243,303.871 161.7,303.762 162.028,303.539C162.356,303.318 162.52,303.016 162.52,302.629C162.52,302.406 162.485,302.209 162.415,302.039C162.345,301.871 162.243,301.713 162.114,301.566C161.983,301.42 161.661,301.156 161.145,300.769C160.426,300.252 159.92,299.744 159.629,299.237C159.336,298.732 159.191,298.188 159.191,297.604C159.191,296.932 159.351,296.333 159.675,295.803C159.997,295.275 160.456,294.864 161.054,294.569C161.65,294.275 162.335,294.128 163.113,294.128C164.242,294.128 165.277,294.386 166.215,294.901L165.363,296.721C164.551,296.336 163.801,296.143 163.113,296.143C162.679,296.143 162.326,296.26 162.051,296.495C161.774,296.729 161.637,297.04 161.637,297.425C161.637,297.743 161.723,298.021 161.895,298.257C162.067,298.494 162.452,298.808 163.051,299.198C163.68,299.615 164.153,300.075 164.465,300.577C164.777,301.082 164.934,301.668 164.934,302.34Z'
		            transform='translate(-129.75 -280)' />
		            <path d='M172.598,302.996L168.903,302.996L167.559,305.715L165.059,305.715L171.043,294.246L173.957,294.246L175.105,305.715L172.785,305.715L172.598,302.996ZM172.48,300.965L172.277,298.231C172.224,297.549 172.199,296.89 172.199,296.254L172.199,295.973C171.969,296.598 171.685,297.26 171.347,297.957L169.878,300.965L172.48,300.965Z'
		            transform='translate(-129.75 -280)' />
		        </g>
		        <path d='M188.281,281.469C189.187,282.375 189.75,283.625 189.75,285L189.75,315C189.75,316.375 189.188,317.625 188.281,318.531C187.374,319.437 186.125,320 184.75,320L159.75,320L134.75,320C133.375,320 132.125,319.438 131.219,318.531L188.281,281.469Z'
		        fill='#fff' fillOpacity='.04' transform='translate(-129.75 -280)' />
		        <path d='M184.75,281C186.956,281 188.75,282.794 188.75,285L188.75,315C188.75,317.206 186.956,319 184.75,319L134.75,319C132.544,319 130.75,317.206 130.75,315L130.75,285C130.75,282.794 132.544,281 134.75,281L184.75,281M184.75,280L134.75,280C132,280 129.75,282.25 129.75,285L129.75,315C129.75,317.75 132,320 134.75,320L184.75,320C187.5,320 189.75,317.75 189.75,315L189.75,285C189.75,282.25 187.5,280 184.75,280Z'
		        fill='#f8f8f9' transform='translate(-129.75 -280)' />
		    </g>
		</svg>
	)},
	discover: function() { return (
		<svg viewBox="0 0 60 40" version="1.1" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={ { fillRule: "evenodd", clipRule: "evenodd", strokeLineJoin: "round", strokeMiterLimit: 1.41421, paddingBottom: "66.666%" } }>
			<path d='M509.75,315C509.75,317.75 507.5,320 504.75,320L454.75,320C452,320 449.75,317.75 449.75,315L449.75,285C449.75,282.25 452,280 454.75,280L504.75,280C507.5,280 509.75,282.25 509.75,285L509.75,315Z'
		    fill='#fff9f0' fillRule='nonzero' transform='translate(-449.75 -280)' />
		    <g transform='translate(-449.75 -280)'>
		        <path d='M464.885,299.943C464.885,300.945 464.6,301.712 464.031,302.245C463.46,302.777 462.636,303.044 461.559,303.044L459.835,303.044L459.835,296.959L461.745,296.959C462.739,296.959 463.51,297.222 464.058,297.746C464.61,298.27 464.885,299.003 464.885,299.943ZM463.545,299.977C463.545,298.67 462.967,298.017 461.815,298.017L461.127,298.017L461.127,301.978L461.681,301.978C462.924,301.979 463.545,301.311 463.545,299.977Z'
		        fill='#414042' fillRule='nonzero' />
		        <rect x='465.976' y='296.959' width='1.29' height='6.085' fill='#414042'
		        fillRule='nonzero' />
		        <path d='M472.391,301.354C472.391,301.905 472.194,302.336 471.797,302.653C471.401,302.969 470.852,303.129 470.147,303.129C469.499,303.129 468.923,303.006 468.423,302.763L468.423,301.564C468.834,301.749 469.182,301.876 469.466,301.953C469.75,302.027 470.011,302.064 470.247,302.064C470.529,302.064 470.747,302.009 470.898,301.902C471.046,301.795 471.125,301.632 471.125,301.42C471.125,301.301 471.092,301.195 471.024,301.102C470.959,301.008 470.86,300.918 470.73,300.833C470.601,300.748 470.338,300.609 469.942,300.421C469.571,300.246 469.293,300.077 469.105,299.917C468.918,299.757 468.771,299.57 468.66,299.355C468.549,299.14 468.494,298.89 468.494,298.605C468.494,298.067 468.676,297.644 469.041,297.336C469.407,297.027 469.91,296.874 470.555,296.874C470.871,296.874 471.173,296.911 471.46,296.986C471.747,297.06 472.048,297.167 472.361,297.302L471.945,298.305C471.62,298.172 471.35,298.077 471.138,298.026C470.925,297.974 470.716,297.947 470.512,297.947C470.267,297.947 470.079,298.003 469.95,298.118C469.819,298.232 469.754,298.38 469.754,298.563C469.754,298.677 469.78,298.775 469.833,298.861C469.886,298.946 469.97,299.027 470.085,299.106C470.2,299.185 470.474,299.327 470.903,299.533C471.471,299.805 471.861,300.078 472.073,300.351C472.285,300.622 472.391,300.957 472.391,301.354Z'
		        fill='#414042' fillRule='nonzero' />
		        <path d='M476.078,297.945C475.592,297.945 475.217,298.129 474.95,298.492C474.682,298.857 474.551,299.367 474.551,300.018C474.551,301.374 475.06,302.053 476.078,302.053C476.506,302.053 477.021,301.949 477.631,301.733L477.631,302.815C477.131,303.024 476.573,303.127 475.957,303.127C475.072,303.127 474.395,302.857 473.926,302.32C473.457,301.784 473.223,301.013 473.223,300.008C473.223,299.375 473.339,298.821 473.57,298.346C473.799,297.868 474.131,297.505 474.562,297.251C474.995,296.997 475.5,296.87 476.08,296.87C476.671,296.87 477.266,297.013 477.861,297.299L477.445,298.348C477.216,298.24 476.989,298.146 476.757,298.065C476.526,297.984 476.3,297.945 476.078,297.945Z'
		        fill='#414042' fillRule='nonzero' />
		        <path d='M487.959,296.959L489.262,296.959L487.195,303.044L485.788,303.044L483.724,296.959L485.028,296.959L486.173,300.58C486.236,300.795 486.304,301.042 486.371,301.328C486.437,301.613 486.48,301.808 486.498,301.92C486.528,301.665 486.632,301.221 486.81,300.58L487.959,296.959Z'
		        fill='#414042' fillRule='nonzero' />
		        <path d='M493.532,303.044L490.027,303.044L490.027,296.959L493.532,296.959L493.532,298.017L491.317,298.017L491.317,299.353L493.379,299.353L493.379,300.41L491.317,300.41L491.317,301.978L493.532,301.978L493.532,303.044Z'
		        fill='#414042' fillRule='nonzero' />
		        <path d='M496.092,300.709L496.092,303.044L494.802,303.044L494.802,296.959L496.575,296.959C497.402,296.959 498.013,297.109 498.411,297.411C498.807,297.712 499.006,298.168 499.006,298.782C499.006,299.139 498.907,299.459 498.711,299.737C498.514,300.016 498.235,300.235 497.875,300.393C498.79,301.759 499.386,302.644 499.664,303.043L498.232,303.043L496.779,300.708L496.092,300.709ZM496.092,299.66L496.509,299.66C496.916,299.66 497.218,299.592 497.412,299.457C497.605,299.32 497.703,299.106 497.703,298.815C497.703,298.526 497.603,298.322 497.405,298.199C497.207,298.076 496.9,298.016 496.484,298.016L496.09,298.016L496.092,299.66Z'
		        fill='#414042' fillRule='nonzero' />
		        <circle cx='480.816' cy='300.002' r='3.043' fill='#e6a124' />
		    </g>
		    <path d='M509.75,307.5L509.75,315C509.75,315.688 509.609,316.344 509.355,316.941C509.1,317.538 508.734,318.078 508.281,318.531C507.828,318.984 507.289,319.35 506.691,319.605C506.092,319.859 505.437,320 504.75,320L482.293,320L459.836,320L509.75,307.5Z'
		    fill='#e6a124' fillRule='nonzero' transform='translate(-449.75 -280)' />
		    <path d='M508.281,281.469C509.187,282.375 509.75,283.625 509.75,285L509.75,315C509.75,316.375 509.188,317.625 508.281,318.531C507.374,319.437 506.125,320 504.75,320L479.75,320L454.75,320C453.375,320 452.125,319.438 451.219,318.531L508.281,281.469Z'
		    fill='#fff' fillOpacity='.08' fillRule='nonzero' transform='translate(-449.75 -280)'
		    />
		    <path d='M504.75,281C506.956,281 508.75,282.794 508.75,285L508.75,315C508.75,317.206 506.956,319 504.75,319L454.75,319C452.544,319 450.75,317.206 450.75,315L450.75,285C450.75,282.794 452.544,281 454.75,281L504.75,281M504.75,280L454.75,280C452,280 449.75,282.25 449.75,285L449.75,315C449.75,317.75 452,320 454.75,320L504.75,320C507.5,320 509.75,317.75 509.75,315L509.75,285C509.75,282.25 507.5,280 504.75,280Z'
		    fill='#f7f5f2' fillRule='nonzero' transform='translate(-449.75 -280)' />
		</svg>
	)},
	cvv: function() { return (
		<svg viewBox="0 0 60 40" version="1.1" preserveAspectRatio="xMidYMin slice" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" style={ { fillRule: "evenodd", clipRule: "evenodd", strokeLineJoin: "round", strokeMiterLimit: 1.41421, paddingBottom: "66.666%" } }>
			<g transform='matrix(.98765 0 0 1 -602.222 -279.209)'>
		        <path d='M669.75,314.209C669.75,316.959 667.5,319.209 664.75,319.209L614.75,319.209C612,319.209 609.75,316.959 609.75,314.209L609.75,284.209C609.75,281.459 612,279.209 614.75,279.209L664.75,279.209C667.5,279.209 669.75,281.459 669.75,284.209L669.75,314.209Z'
		        fill='#cdcdcd' fillRule='nonzero' />
		        <rect x='611.5' y='285.5' width='59' height='8' fill='#424143' />
		        <rect x='617.5' y='297.5' width='36' height='8' fill='#fff' />
		        <rect x='620.5' y='300.5' width='29' height='2' fill='#424143' />
		        <path d='M664.75,280.209C666.956,280.209 668.75,282.003 668.75,284.209L668.75,314.209C668.75,316.415 666.956,318.209 664.75,318.209L614.75,318.209C612.544,318.209 610.75,316.415 610.75,314.209L610.75,284.209C610.75,282.003 612.544,280.209 614.75,280.209L664.75,280.209M664.75,279.209L614.75,279.209C612,279.209 609.75,281.459 609.75,284.209L609.75,314.209C609.75,316.959 612,319.209 614.75,319.209L664.75,319.209C667.5,319.209 669.75,316.959 669.75,314.209L669.75,284.209C669.75,281.459 667.5,279.209 664.75,279.209Z'
		        fill='#dfdedd' fillRule='nonzero' />
		        <rect x='656.5' y='297.5' width='8' height='8' fill='#fff' />
		        <rect x='657.5' y='300.5' width='6' height='2' fill='#424143' />
		        <circle cx='660' cy='301.396' r='7.75' fill='none' stroke='#e9564b' strokeWidth='2'
		        />
		    </g>
		</svg>
	)},
	checkmark: function() {
		return (
			<svg viewBox="0 0 24.05 23.08" preserveAspectRatio="xMidYMin slice" style={ { paddingBottom: "105%" } }>
				<defs/>
				<path className="cls-1" d="M57.74,2.13a2.66,2.66,0,0,0-1.18.9c-0.67.71-1.31,1.45-2,2.15-0.13.13-9.44,12.17-9.62,12.23-1.37.45-6.43-7.43-8.71-4.14-0.68,1,.28,2.06.81,2.85,1.55,2.33,3.15,4.63,4.77,6.91,0.57,0.81,1.19,2.31,2.39,2.12a2.69,2.69,0,0,0,1.54-1.4c0.84-1.17,1.72-2.31,2.58-3.46,2.59-3.45,5.15-6.92,7.74-10.37C57.34,8.24,59.16,6.43,60,4.46,60.45,3.36,58.84,1.87,57.74,2.13Z" transform="translate(-36.02 -2.1)"/>
			</svg>
		)
	}
};

Icons.insert = function(name, style) {
	style = style || "";

	return (
		<div className={`${styles['scaling-svg-container']} ${style}`}>
			{this[name]()}
		</div>
	)
}

export default Icons