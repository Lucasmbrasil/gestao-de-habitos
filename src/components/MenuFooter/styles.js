import styled from "styled-components";

export const Footer = styled.div`
  display: none;
  @media (min-width: 320px) {
    display: flex;

    position: absolute;
    top: 20%;
    background-color: #006064;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    height: 55px;

    .icons {
      font-size: 100%;
      color: #ffffff;
    }
  }
`;
