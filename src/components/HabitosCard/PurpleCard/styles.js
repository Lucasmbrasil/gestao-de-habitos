import styled from "styled-components";

export const HabitCard = styled.div`
  border: 1px solid black;
  display: flex;
  height: 100px;
  width: 45%;
  justify-content: space-between;
  .filled {
    background-color: #bbdefb;
    width: 16%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      border: 3px solid #651fff;
      background-color: #bbdefb;
      border-radius: 100%;
      padding: 31px;
    }
  }

  .filled2 {
    background-color: #bbdefb;
    width: 16%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .plus {
      order: 1px solid #000000;
      width: 30%;
      height: 33%;
      border-radius: 88%;
    }

    .minus {
      border: 1px solid #000000;

      width: 30%;
      height: 33%;
      border-radius: 88%;
    }
  }

  .text {
    display: flex;
    justify-content: space-evenly;

    flex-direction: column;
    width: 46%;
  }

  .text2 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .pen {
      text-align: end;
    }
    .btn {
      background-color: #f8bbd0;
      border-radius: 5px;
      border: none;
      opacity: 50%;
    }
  }
`;
