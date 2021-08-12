import styled from "styled-components";

export const CardUnMarked = styled.div`
  border: 1px solid black;
  height: 64px;
  width: 37%;
  display: flex;
  .check {
    background-color: #f8bbd0;
    height: 100%;
    width: 14%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;

    .check-icon {
      font-size: 7vh;
    }
  }

  .text {
    font-family: "Arvo", serif;
    display: flex;
    flex-direction: column;
    margin-top: 0.7rem;
    margin-left: 1rem;
    width: 74%;
    span {
      font-family: "Karla", sans-serif;
    }
  }

  .icons {
    width: 10%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;
