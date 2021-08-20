import styled from "styled-components";

export const CardMarked = styled.div`
  border: 1px solid black;
  height: 100px;
  width: 80vw;
  max-width: 360px;
  display: flex;
  margin: 0.5rem;
  @media(min-width: 340px){
    height: 64px;
  }
  
  .check {
    background-color: #f8bbd0;
    height: 100%;
    width: 20%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;

    svg {
      height: 35px;
      width: 35px;
    }
  }

  .text {
    font-family: "Karla", sans-serif;
    display: flex;
    flex-direction: column;
    margin-top: 0.7rem;
    margin-left: 1rem;
    width: 65%;
    span {
      font-family: "Arvo", serif;
      font-weight: bold;
      font-size: 1rem;
    }
  }

  .icons {
    width: 15%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    svg {
      opacity: 60%;
      cursor: pointer;
    }

    button {
      background-color: #B71C1C;
      color: #fff;
      font-family: "Karla", sans-serif;
      font-weight: bold;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.5);
      font-size: 1rem;
      cursor: pointer;
    }
  }
`;
