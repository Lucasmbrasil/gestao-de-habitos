import styled from "styled-components";
import { Button } from "@material-ui/core";

export const PageContainer = styled.div`
  display: flex;
`

export const HabitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: rgba(255, 253, 231, 0.5);

  h2 {
    width: 100%;
    text-align: center;
    height: fit-content;
    font-family: "Arvo", sans-serif;
  }
`;
export const Habits = styled.div`
  width: 45%;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;
export const MainContainer = styled.div`
  background-color: #e0f2f1;
`;
export const TextHabits = styled.div`
  width: 450px;
  border: 1px solid black;
  text-align: center;
  padding: 15px 0;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const StyledButton = styled(Button)`
  && {
    color: white;
    text-transform: none;
    background-color: #ffab00;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
  }
  &&:hover {
    background-color: #ffa000;
  }
`;
export const StyledPinkButton = styled(StyledButton)`
  && {
    background-color: #ec407a;
  }
  &&:hover {
    background-color: #e91e63;
  }
`;
