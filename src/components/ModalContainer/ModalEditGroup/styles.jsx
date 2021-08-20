import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 320px;
  width: 100%;

  .select {
    select {
      height: 35px;
      border: 1px solid #424242;
      border-radius: 0.5rem;
      width: 100%;
      opacity: 87%;
      padding-left: 1rem;
      font-family: "Karla", sans-serif;

      option {
        font-family: "Karla", sans-serif;
        color: #424242;
      }
    }
  }
`;
