import styled from "styled-components";

export const CardBox = styled.div`
  width: 30%;
  border: 3px solid ${(props) => (props.color ? props.color : "black")};
  border-radius: 10%;
  margin: 1%;
  height: 35vh;
  background: transparent;
  font-size: 1.2em;
`;

export const BoxImage = styled.div`
  height: 70%;
  width: 70%;
  margin: auto;
`;

export const ProductInfoBox = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
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
`;
