import styled from "styled-components";
import { Paper, Button } from "@material-ui/core";

export const Main = styled.div`
  && {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #e0f2f1;
  }
`;

export const Container = styled.div`
  && {
    width: 100%;
    margin: auto;
  }
  @media (min-width: 768px) {
    && {
      width: 50%;
    }
  }
`;

export const StyledPaper = styled(Paper)`
  && {
    background-color: #006064;
    padding: 40px;
    border-radius: 10px;
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
  }
`;

export const StyledInput = styled.input`
  && {
    background-color: rgb(255, 255, 255);
    padding: 10px 20px;
    border: 1px solid white;
    border-radius: 5px;
    margin-top: 20px;
    font-family: "Karla", sans-serif;
    text-align: center;
  }
`;

export const Form = styled.div`
  && form {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    font-family: "Karla", sans-serif;
  }
  && h2 {
    font-family: "Arvo", sans-serif;
    font-weight: normal;
    color: white;
  }
  && h6 {
    font-size: 0.9rem;
    margin-top: 10px;
  }
  && h5 {
    margin-top: 5px;
    font-weight: bolder;
    cursor: pointer;
  }
  && p {
    margin-top: 10px;
  }
`;

export const Erro = styled.p`
  font-size: 0.9rem;
  color: #fbc02d;
  text-align: initial;
  width: 100%;
`;

export const DivFigure = styled.div`
  && {
    display: none;
  }
  @media (min-width: 768px) {
    && {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 50%;
      background: #159957;
      background: -webkit-linear-gradient(to right, #159957, #006064);
      background: linear-gradient(to right, #159957, #006064);
    }
    && h1 {
      font-size: 4rem;
      margin-bottom: 50px;
      font-family: "Arvo", sans-serif;
      font-weight: normal;
      color: white;
    }
    && img {
      max-width: 400px;
      width: 80%;
    }
  }
`;

export const StyledButton = styled(Button)`
  && {
    margin-top: 20px;
    background-color: #fdd835;
    color: #000;
    text-transform: none;
    font-size: 1rem;
    padding: 5px 16px;
  }
  &&:hover {
    background-color: #fbc02d;
  }
`;
