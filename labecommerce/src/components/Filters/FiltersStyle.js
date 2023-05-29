import styled from "styled-components";

export const FilterBoxStyle = styled.div`
  grid-column: 1/3;
  display: flex;
  flex-direction: column;
  gap: 3vh;
  padding: 5%;
  width: 100%;
  position: sticky;
  top: 0px;
  font-size: 1.5em;
`;

export const InputStyled = styled.input`
  max-width: 100%;
  background-color: #caebe2;
  color: #1a1c21;
  height: 50%;
  border-radius: 20px;
  &:focus {
    background-color: aquamarine;
    color: black;
  }
`;

export const FilterTittle = styled.h2`
  font-weight: bolder;
  font-size: 3em;
`;
