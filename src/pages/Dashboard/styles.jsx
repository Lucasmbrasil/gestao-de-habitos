import styled from "styled-components";
import { Button } from "@material-ui/core";

export const PageContainer = styled.div`
  display: flex;
`

export const MainContainer = styled.div`
  background-color: #e0f2f1;
  width: calc(100vw - 240px);
  min-height: 100vh;
`;

export const HabitsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: rgba(255, 253, 231, 0.5);
  width: 95%;
  margin: 0 auto;
  min-height: 75%;

  .habits_header {
    width: 100%;
    text-align: center;

    h2 {
    width: 100%;
    height: fit-content;
    font-family: "Arvo", serif;
    }

    p {
      font-family: "Karla", sans-serif;
    }
  }
  
`;

export const Habits = styled.section`
  width: 45%;
  max-width: 520px;
  height: 460px;
  background-color: #ffffff;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  padding: 1rem;
  margin-bottom: 1rem;
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
