import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 320px;
  width: 100%;

  @media (max-width: 768px) {
    height: 313px;
    width: 89%;
  }

  textarea {
    height: 70px;
    border: 1px solid #424242;
    border-radius: 0.5rem;
    width: 100%;
    opacity: 87%;
    padding-left: 1rem;
    font-family: "Karla", sans-serif;
  }

  textarea {
    height: 70px;
    border: 1px solid #424242;
    border-radius: 0.5rem;
    width: 100%;
    opacity: 87%;
    padding-left: 1rem;
    font-family: "Karla", sans-serif;
  }

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

  .frequency-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;
    color: #424242;
    font-family: "Karla", sans-serif;
    margin: 0.5rem 0;
    width: 90%;
  }

  .rating {
    display: flex;
    align-items: center;
  }
`;
