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
		font-family: 'Roboto';
	}
	*:focus {
		outline: none;
	}

	#main-wrapper > div,.react-swipeable-view-container, .react-swipeable-view-container> div{
		height:100%; width:100%;
	}

`
