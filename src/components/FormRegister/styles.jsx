import { Button, Input } from "@material-ui/core";
import styled from "styled-components";

export const ContainerLeft = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0f2f1;
  && h2 {
    font-family: "Arvo", sans-serif;
    font-weight: normal;
  }
  p {
    font-size: 0.9rem;
    color: #fbc02d;
    text-align: initial;
  }
`;
export const FormContainer = styled.div`
  width: 400px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #006064;
  border-radius: 15px;
`;
export const Form = styled.div`
  width: 70%;
  text-align: center;
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
    margin-top: 20px;
    background-color: #fdd835;
    color: #000000;
    text-transform: none;
    font-size: 1rem;
    padding: 5px 16px;
  }
  &&:hover {
    background-color: #fbc02d;
  }
`;
