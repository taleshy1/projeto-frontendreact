import { styled, keyframes } from "styled-components";


export const AppBox = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(12, 1fr);
    padding: 1%;

`

const fadeIn = keyframes`

    from{
        opacity: 0;
    }

    to{
        opacity: 1;
    }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const Content = styled.div`
opacity: ${({ showContent }) => (showContent ? 1 : 0)};
  animation: ${({ showContent }) => (showContent ? fadeIn : "none")} 5s ease ;
`;