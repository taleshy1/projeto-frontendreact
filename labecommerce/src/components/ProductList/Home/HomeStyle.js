import styled from "styled-components";

export const HomeBoxStyled = styled.div`
  grid-column: 3/10;
`;

export const HomeLabelBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2%;
  font-weight: bolder;
  font-size: 1.5em;
  select {
    background-color: #c8f7eb;
    color: #111212;
  }
  option {
    color: #111212;
  }
`;

export const HomeCardsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
