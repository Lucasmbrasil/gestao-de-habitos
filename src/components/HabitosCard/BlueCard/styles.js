import styled from "styled-components";

export const HabitCardBlue = styled.div`
  border: 1px solid black;
  display: flex;
  height: 100px;
  width: 450px;
  justify-content: space-between;
  margin-bottom: 10px;
  font-family: "Karla", sans-serif;
  .filled {
    background-color: #bbdefb;
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      border: 2px solid #000000;
      border-radius: 100%;
      padding: 31px;
    }
  }

  .filled2 {
    background-color: #bbdefb;
    width: 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .title {
    font-family: "Arvo", sans-serif;
    font-weight: bold;
  }
  .text {
    display: flex;
    justify-content: space-evenly;
    font-size: 0.875rem;
    flex-direction: column;
    width: 50%;
  }
  .text div {
    margin-left: 10px;
  }
  .text2 {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;

    justify-content: space-evenly;
    .pen {
      text-align: end;
    }
  }
  .text2 div {
    margin-right: 10px;
  }
  .category {
    background-color: #bbdefb;
    border-radius: 5px;
    border: none;
    opacity: 50%;
    text-align: center;
    font-size: 12px;
  }
  button {
    border-radius: 50%;
    border: 1px solid black;
    width: 18px;
    box-shadow: 0 1px 2px #000000;
  }
  button:active {
    position: relative;
    top: 1px;
    box-shadow: none;
  }
`;
