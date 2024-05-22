import {createGlobalStyle } from 'styled-components'




const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Space Mono", monospace;
    }

    body {
        min-width: 375px;
        min-height: 100vh;
        background-color: ${({ mode}:{mode:boolean}) => mode ? "#141d2f" : "#f6f8ff"};
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media only screen and (min-width:768px){
        body{
  
        }
    }

    @media only screen and (min-width:1440px){
        body{
  
        }
    }

`

export default GlobalStyles;