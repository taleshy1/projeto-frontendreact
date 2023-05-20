import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: red;
    }
    body{
        background: rgb(39,62,88);
background: radial-gradient(circle, rgba(39,62,88,1) 0%, rgba(20,27,62,1) 100%);

    }
    
`;
export default GlobalStyles;
