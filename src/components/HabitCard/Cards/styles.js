import styled from "styled-components";

export const CardRed = styled.div`
  border-radius: 5px;
  width: 25%;

  position: absolute;
  flex-direction: column;
  display: flex;

  left: 0%;
  transform: translate(50%, 10px);
  height: 36%;
  justify-content: space-between;
  border: 1px solid black;

  .red {
    background-color: #e57373;
    height: 13%;
  }

  .main-red {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .group-red {
    text-align: center;
    div {
      font-family: "Arvo", serif;
    }
  }
  .description-red {
    margin-left: 1rem;
    span {
      font-weight: bold;
    }
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
`;

export const CardBlue = styled.div`
  border-radius: 5px;
  width: 25%;

  position: absolute;
  flex-direction: column;
  display: flex;

  left: 0%;
  transform: translate(50%, 136%);
  height: 36%;
  justify-content: space-between;
  border: 1px solid black;

  .blue {
    background-color: #7986cb;
    height: 13%;
  }

  .main-blue {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .group-blue {
    text-align: center;
    div {
      font-family: "Arvo", serif;
    }
  }
  .description-blue {
    margin-left: 1rem;
    span {
      font-weight: bold;
    }
  }
`;

export const Image2 = styled.img`
  width: 80px;
  height: 80px;
`;

export const CardGreen = styled.div`
  border-radius: 5px;
  width: 25%;

  position: absolute;
  flex-direction: column;
  display: flex;

  left: 0%;
  transform: translate(187%, 136%);
  height: 36%;
  justify-content: space-between;
  border: 1px solid black;

  .green {
    background-color: #81c784;
    height: 13%;
  }

  .main-green {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .group-green {
    text-align: center;
    div {
      font-family: "Arvo", serif;
    }
  }
  .description-green {
    margin-left: 1rem;
    span {
      font-weight: bold;
    }
  }
`;

export const Image3 = styled.img`
  width: 80px;
  height: 80px;
`;
