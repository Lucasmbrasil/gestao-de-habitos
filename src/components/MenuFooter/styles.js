import styled from "styled-components";

export const Footer = styled.div`
  display: none;
  font-family: "Arvo", serif;

  @media (max-width: 768px) {
    display: flex;
    background-color: #006064;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 55px;

    .icons {
      font-size: 100%;
      color: #ffffff;
    }

    svg {
      height: 26px;
      width: 26px;
    }
  }
`;
