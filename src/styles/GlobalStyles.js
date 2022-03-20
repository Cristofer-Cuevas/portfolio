import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`



:root {
	--500-font-weight: 500;
	--600-font-weight: 600;
	--800-font-weight: 800;
	--900-font-weight: 900;
	--color-white: #fff;

}


* {
	scroll-behavior: smooth;
	box-sizing: border-box;
}

html{
	width: 100%;
	height: 100%;
	
}

body {
	font-family: Poppins, sans-serif;
  background-color: #182538;
	width: 100%;
	height: 100%;
	margin: 0;
	}

#root {
	width: 100%;
	height: 100%;
}

h1 {
	font-size: 2rem;
	margin: 0.67em 0;
}

a {
	 background-color: transparent;
	 text-decoration: none;
	 color: white;
   }



img {
	width: 100%;
	border-style: none;
}

input {
	border: none;
}

button {
background-color: transparent;
border: none;
box-shadow: none;
cursor: pointer;
padding: 0;
}

button:hover, a:hover {
transform: scale(95%);
}

 .showBgSticky {
	 background-color: #6736dd;
 }
  }

`;

export default GlobalStyles;
