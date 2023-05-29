import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
    }
    body{
        background: radial-gradient(circle, rgba(71,98,134,0.9976365546218487) 0%, rgba(81,87,88,1) 100%);
    }
`;
export default GlobalStyles;
