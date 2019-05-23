import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	html {
		height:100%;
        width:100%;
        overflow:hidden;
	}
	body {
		height:100%;
        width:100%;
		overflow:hidden;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Poppins';
	}
	*:focus {
		outline: none;
	}

	p{
		font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    margin-top: 16px;
    color: #505050;
	}

	span.text{
		color: #717171;
	}

	.h0{
		font-size:56px;
		font-weight:bold;
	}

	h1{
		font-weight:900;
		font-size:64px;
		line-height:60px;
		text-transform: uppercase;
	}
	
	h2{
		font-weight:100;
		font-size:18px;
	}
	

	.react-swipeable-view-container{
		height:100%;
	}

	.MuiButtonBase-root-232.MuiButtonBase-disabled-233{
		padding:0;
	}

	.ElementsApp .InputElement, input{
		font-family: 'Poppins';
		font-weight:100 !important;
		border-color: rgba(0, 0, 0, 0.23) !important;
		border-radius: 4px !important;
	}

	.gradient {
		color: #fff;
		background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
		background-size: 400% 400%;
		-webkit-animation: Gradient 15s ease infinite;
		-moz-animation: Gradient 15s ease infinite;
		animation: Gradient 15s ease infinite;
	}

	.animatedBackground{
		animation animatedBackground 20s linear infinite;
	}

	@keyframes animatedBackground 
	{
		from { background-position: 0 100%; }
		to { background-position: 100% 100%; }
	}
	@-webkit-keyframes  animatedBackground 
	{
		from { background-position: 0 100%; }
		to { background-position: 100% 100%; }
	}
	
	@-webkit-keyframes Gradient {
		0% {
			background-position: 0% 50%
		}
		50% {
			background-position: 100% 50%
		}
		100% {
			background-position: 0% 50%
		}
	}
	
	@-moz-keyframes Gradient {
		0% {
			background-position: 0% 50%
		}
		50% {
			background-position: 100% 50%
		}
		100% {
			background-position: 0% 50%
		}
	}
	
	@keyframes Gradient {
		0% {
			background-position: 0% 50%
		}
		50% {
			background-position: 100% 50%
		}
		100% {
			background-position: 0% 50%
		}
	}

	.game-list-item-statement{
		color: white;
		text-shadow: 0 0 10px black;
		text-transform: uppercase;
		max-width: 200px !important;
		display: inline-block;
		font-weight: 500;
		margin-top:10px;
	}

	.card-statement{
		text-shadow: 0 0 20px black;
		text-transform: uppercase;
		font-weight: 500;
	}

	.dark-background{
		/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.65+100 */
		background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%); /* FF3.6-15 */
		background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 ); /* IE6-9 */
		height:70%;
		position:absolute;
		bottom:0;
		left:0;
		width:100%;
		z-index:0;
	}

	.z1{
		z-index:1;
	}
	
	.userDisplayName{
		/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.65+100 */
		background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%); /* FF3.6-15 */
		background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 ); /* IE6-9 */
		padding: 5px 10px;
		font-size: 12px;
		z-index: 1;
		border-radius:50px;
	}

	.statement-glimpse{
		position: relative;
		word-break: break-word;
		width: 85%;
		display: inline-block;
	}

	.add-comment-input{
		background:rgba(0,0,0,0.9);
	}

	.user-comment {
		background-color: white;
		background: rgba(0,0,0,0.8);
		padding: 10px;
		border-radius: 50px;
		color: white;
	}

	.elementToFadeInAndOut {
		opacity: 0;
		animation: fade 1200ms ease-out;
	}
	
	@keyframes fade {
	  0%,100% { opacity: 0, display:none }
	  50% { opacity: 1 }
	}

	span{
		word-break: break-word;
	}



	.wrapper {
		position: relative;
		width: 100%;
		margin: 0 auto;
		max-width: 1000px;
		margin:auto;
		
		video {
			width: 100%; 
		}
		
		svg { 
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			
			text {
				font-family: 'Montserrat', sans-serif;
				font-weight: 900;
				text-transform: uppercase;
				font-size: 20px;
			}
			
			> rect {
				-webkit-mask: url(#mask);
				mask: url(#mask);
			}
			
			rect {
				fill: #fff;
			}
		}
	}
	
	.wrapper {
		&:before,
		&:after {
			content: '';
			position: absolute;
			top: 0;
			width: 10px;
			height: 100%;
			background-color: #fff;
		}
		
		&:before {
			left: -9px;
		}
		
		&:after {
			right: -5px;
		}
	}
	

	.box-green{
    position: absolute;
    top: -200px;
    left: 0;
    width: 100%;
    height: 200px;
    box-shadow: 0 0 300px 0px #6dad0b;
	}

	.box-red{
    position: absolute;
    top: -200px;
    left: 0;
    width: 100%;
    height: 200px;
		box-shadow: 0 0 300px 0px #1577e0;
	}

	.box-blue{
    position: absolute;
    bottom: -200px;
    left: 0;
    width: 100%;
    height: 200px;
		box-shadow: 0 0 300px 0px #fe6eb5;
	}

	.color-green{
		color: #6dad0b;
	}

	.color-red{
		color:  #063390;
	}

	.color-blue{
		color:  #fe6eb5;
	}

	.section{
		position:relative;
		overflow:hidden;
	}


	.home-logo-bottom{
		position:absolute;
		top:0;
		left:0;
		right:0;
		z-index:10;
		margin:auto;
		margin-left:20px;
		margin-top:20px;
	}

	.btn-primary{
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    padding: 0.5em 1em;
    outline: none;
    border: none;
    border-radius: 2px;
		background-image: linear-gradient(to right,#6dad0b,#94c228,#92c525);
    overflow: hidden;
    transition: 0.08s ease;
		margin-top: 20px;
		cursor:pointer;
	}

	.home-shadow-both{
		box-shadow: 0 0 500px #d8d8d8;
	}

	.border-tb{
		border-top:1px solid #ccc;
		border-bottom:1px solid #ccc;
	}

	.home-box{
		transition: 1s all ease-in;
		z-index:5
	}

	.home-box-1{
		background-red;
		width:100%;
		height:200px;
		position:absolute;

	}

	.home-box-2{
		background-blue;
		width:100%;
		height:200px;
		position:absolute;

	}
	.home-box-3{
		background-white;
		width:100%;
		height:200px;
		position:absolute;

	}
	.home-box-4{
		background-red;
		width:100%;
		height:200px;
		position:absolute;

	}
	.home-box-5{
		background-green;
		width:100%;
		height:200px;
		position:absolute;

	}


	.blob {
		position: absolute;
		top: 0;
		left: 0;
		fill: #023F92;
		width: 50vmax;
		z-index: -1;
		animation: move 10s ease-in infinite;
		transform-origin: 50% 50%;
	}


	.blob2 {
		position: absolute;
		bottom: 0;
		left: 0;
		fill: #023F92;
		width: 50vmax;
		z-index: -1;
		animation: move2 10s ease-in infinite;
		transform-origin: 50% 50%;
	}
	
	@keyframes move {
		0%   { transform: scale(1)   translate(10px, -30px); }
		38%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
		40%  { transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg); }
		78%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
		80%  { transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg); }
		100% { transform: scale(1)   translate(10px, -30px); }
	}

	@keyframes move2 {
		0%   { transform: scale(1)   translate(-20px, 50px); }
		38%  { transform: scale(0.7, 1) translate(80vw, 30vh) rotate(50deg); }
		40%  { transform: scale(0.7, 1) translate(80vw, 30vh) rotate(50deg); }
		78%  { transform: scale(1.6) translate(0vw, 50vh) rotate(-120deg); }
		80%  { transform: scale(1.6) translate(0vw, 50vh) rotate(-120deg); }
		100% { transform: scale(1)   translate(-20px, 50px); }
	}

	.home-header {
		z-index:100;
		background:white;
	}

	.home-header button{
		margin-top: 0 !important;
		background: red;
		border-radius: 0;
		text-align:right;
	}

	.home-video{
		position:absolute;
		top:0;
		left:0;
		height:100%;
		width:100%;
		opacity:0.12
	}

	.home-video video{
		/* Make video to at least 100% wide and tall */
		min-width: 100%; 
		min-height: 100%; 
		
		/* Setting width & height to auto prevents the browser from stretching or squishing the video */
		width: auto;
		height: auto;
		
		/* Center the video */
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}

	.juicy{
		filter: drop-shadow(0px 13px 18px #6dad0b);
		transform: translate(0px,500px);
		transition:  .45s all ease-in-out;
	}

	.phone{
		filter: drop-shadow(0px 13px 18px #bbb);
		transform: translate(0px,500px);
		transition:  .45s all ease-in-out;
	}

	.sweet{
		filter: drop-shadow(0px 13px 18px #fe6eb5);
		transform: translate(0px,500px);
		transition:  .45s all ease-in-out;
	}

	.active img.juicy,.active img.sweet,.active img.phone {
    transform: translate(0,0);
}

.proj1 {
	filter: drop-shadow(0px 13px 18px #fe6eb5);
}

.proj2 {
	filter: drop-shadow(0px 13px 18px blue);
}


.proj3 {
	filter: drop-shadow(0px 13px 18px orange);
}


.proj1 {
	filter: drop-shadow(0px 13px 18px #fe6eb5);
}


.proj1{

	position:absolute;
	top:50px;
	left:150px;
	transform: translate(0px,1000px);
	transition:  .5s all ease-in-out;
}

.active  .proj1{
	transform: translate(0,0);
}

.proj2{
	position:absolute;
	top:300px;
	right:150px;
	transform: translate(0px,1000px);
	transition: 1s all ease-in-out;

}

.active  .proj2{
	transform: translate(0,0);
}

.proj3{
	position:absolute;
	bottom:300px;
	left:120px;
	transform: translate(0px,1000px);
	transition:  1.5s all ease-in-out;
}

.active  .proj3{
	transform: translate(0,0);
}

.proj4{
	position:absolute;
	bottom:100px;
	right:200px;
	transform: translate(0px,1000px);
	transition:  2s all ease-in-out;
}

.active  .proj4{
	transform: translate(0,0);
}

`
