import styled from "styled-components";

export const CartBoxStyled = styled.div`
  grid-column: 10/13;
  display: flex;
  flex-direction: column;
  gap: 3vh;
  margin-top: 2vh;
`;

export const CarrinhoTitle = styled.h2`
  align-self: center;
  font-weight: bolder;
  font-size: 3em;
`;

export const Total = styled.p`
  text-align: center;
  font-weight: bolder;
  font-size: 2.5em;
`;

export const Button = styled.button`
  max-width: 50%;
  background-color: #c8f7eb;
  padding: 0.7rem 2rem;
  border-radius: 10px;
  color: #0f241f;
  font-size: 1.2em;
  font-weight: bold;
  align-self: center;

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
`;
