import styled from "styled-components";

export const CardGroup = styled.div`
  border-radius: 5px;
  width: 25%;

  position: absolute;
  flex-direction: column;
  display: flex;

  left: 34%;
  transform: translate(50%, 10px);
  height: 36%;
  justify-content: space-between;
  border: 1px solid black;

  .red {
    background-color: #e57373;
    height: 27%;
  }

  .main {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .group {
    text-align: center;
    div {
      font-family: "Arvo", serif;
    }
  }
  .description {
    margin-left: 1rem;
    span {
      font-weight: bold;
    }
  }

  .details {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
      font-family: "Karla", sans-serif;
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;
      display: flex;
      align-items: center;

      width: 41%;
      height: 55%;
      background-color: #00695c;
      border-radius: 15px;
      border: none;

      .plus {
        margin-left: 1rem;
      }
      .sign {
        margin-left: 1rem;
      }
    }
    .more {
      border-bottom: 1px solid #e65100;
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
`;

export const ImagePlus = styled.img`
  width: 10px;
  height: 10px;
`;
