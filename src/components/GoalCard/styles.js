import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.6);
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
  font-family: "Karla", sans-serif;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 769px) {
    width: 48%;
  }

  .filled {
    background-color: #bbdefb;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    font-size: 14px;
    padding: 2px;
    width: 100%;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b71c1c;
  color: #fff;
  font-family: "Karla", sans-serif;
  font-weight: bold;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  cursor: pointer;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid black;
  width: 26px;
  height: 26px;
  font-weight: bold;
  box-shadow: 0 1px 2px #000000;
  background-color: #fff;
  font-size: 1rem;

  :active {
    position: relative;
    top: 1px;
    box-shadow: none;
  }
`;

export const ButtonsContainer = styled.div`
  background-color: #bbdefb;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  svg {
    cursor: pointer;
  }
`;
