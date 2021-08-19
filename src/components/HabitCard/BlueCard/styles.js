import styled from "styled-components";
export const HabitCardBlue = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.6);
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
  font-family: "Karla", sans-serif;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .filled {
    background-color: #bbdefb;
    width: 50px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 30px;
    }

    div {
      border: 2px solid #000000;
      border-radius: 100%;
      padding: 31px;
    }
  }

  .filled2 {
    background-color: #bbdefb;
    padding: 2px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 0.4rem;

    /* button {
      border-radius: 50%;
      border: 1px solid black;
      width: 18px;
      font-weight: bold;
      box-shadow: 0 1px 2px #000000;
      background-color: #fff;
    } */

    button:active {
      position: relative;
      top: 1px;
      box-shadow: none;
    }
  }
  .title {
    font-family: "Arvo", sans-serif;
    font-weight: bold;
    font-size: 14px;
    padding-left: 0.5rem;
  }
  .text {
    display: flex;
    justify-content: space-evenly;
    font-size: 0.875rem;
    flex-direction: column;
    width: 170px;
  }
  .text div {
    margin-left: 10px;
  }
  .text2 {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    justify-content: space-evenly;
    align-items: center;
    .pen {
      text-align: end;
    }

    /* button {
      background-color: #b71c1c;
      color: #fff;
      font-family: "Karla", sans-serif;
      font-weight: bold;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.5);
      font-size: 1rem;
      cursor: pointer;
    } */
  }
  .text2 div {
    margin-right: 10px;
  }
  #buttons {
    svg {
      cursor: pointer;
    }
    width: 50px;
    margin-right: 0px;
    height: 25px;
    align-items: flex-end;
    justify-content: space-between;
    display: flex;
  }
  .category {
    background-color: #bbdefb;
    border-radius: 5px;
    border: none;
    opacity: 50%;
    text-align: center;
    font-size: 14px;
    padding: 2px;
    width: 100%;
  }
`;
