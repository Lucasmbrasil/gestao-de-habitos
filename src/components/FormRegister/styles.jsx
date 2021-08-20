import { Button, Input, CircularProgress } from "@material-ui/core";
import styled from "styled-components";

export const ContainerLeft = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0f2f1;
  font-family: "Karla", sans-serif;

  && h2 {
    font-family: "Arvo", sans-serif;
    font-weight: normal;
  }
  p {
    font-size: 0.9rem;
    color: #fbc02d;
    text-align: initial;
  }
  h5:hover {
    cursor: pointer;
  }
  width: 100vw;
  @media (min-width: 768px) {
    width: 50vw;
  }
`;
export const FormContainer = styled.div`
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #006064;
  border-radius: 15px;
  a {
    color: #fdd835;
    text-decoration: underline;
  }

  @media (min-width: 992px) {
    width: 400px;
  }
  @media (max-width: 768px) {
    width: 400px;
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
  }
  @media (max-width: 576px) {
    width: 320px;
  }
`;
export const Form = styled.div`
  width: 70%;
  text-align: center;
  .toast {
    width: 430px;
    font-family: "Karla", sans-serif;
  }
`;
export const InputStyled = styled(Input)`
  && {
    background-color: rgb(255, 255, 255);
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 20px;
    font-family: "Karla", sans-serif;
  }
`;
export const ButtonStyled = styled(Button)`
  && {
    margin: 20px 0px 10px;
    background-color: #fdd835;
    color: #000000;
    text-transform: none;
    font-size: 1rem;
    padding: 5px 16px;
  }
  &&:hover {
    background-color: #fbc02d;
  }
  &&:disabled {
    background-color: #b4b4b4;
  }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  && {
    margin: 0 auto 10px;
    color: #fbc02d;
    margin-top: 20px;
  }
`;
