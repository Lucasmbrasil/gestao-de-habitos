import styled, { keyframes } from "styled-components";

export const ContainerRight = styled.div`
  @media (min-width: 768px) {
    width: 50vw;
    height: 100vh;
    background: #006064; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #006064,
      #159957
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #006064,
      #159957
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    h1 {
      font-family: "Arvo", sans-serif;
      font-weight: normal;
      font-size: 3rem;
    }

    img {
      max-width: 400px;
      margin-top: 30px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  display: none;
`;

export const RegisterContainer = styled.div`
  display: flex;
  color: white;
`;
