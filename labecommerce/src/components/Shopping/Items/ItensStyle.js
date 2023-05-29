import { styled } from "styled-components";

export const ItemStyled = styled.div`
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  gap: 1vh;
  font-size: 1.2em;
  align-items: center;
  border-radius: 20px;
  padding: 1.5vh 0;
  font-weight: bold;
  button {
    padding: 1vh;
    border-radius: 10px;
    max-width: 50%;
    background-color: #c8f7eb;
    padding: 0.4rem;
    border-radius: 10px;
    color: #0f241f;
    font-size: 100%;
    &:hover {
      background-color: #b0f5e3;
      color: #f53d56;
      cursor: pointer;
    }
    &:active {
      background-color: #669488;
      color: #000000;
      cursor: pointer;
    }
  }
`;
export const Nome = styled.p`
  font-size: 1.7em;
  font-weight: bolder;
`;
