import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 220px;
  width: 100%;

  .campo-data {
    input {
      border: none;
    }
    border: 1px solid #424242;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 8px;
    padding-right: 1rem;
  }
`;
