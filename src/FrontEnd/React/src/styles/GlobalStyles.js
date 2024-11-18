import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
body{
    padding: 0;

    margin: 0;
    color: #333;
   
}

ul, li{
    list-style:  none;
    padding: 0;
    margin: 0;
}

@font-face {
  font-family: 'Neurial Grotesk';
  src: url('../public/font/NeurialGrotesk-Extrabold.otf') format('opentype'); 
}

@font-face {
  font-family: 'Frank Furter';
  src: url('../public/font/FrankfurterRegular.ttf') format('truetype'); 
  

}


`


export default GlobalStyles