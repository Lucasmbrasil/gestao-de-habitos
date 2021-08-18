import styled from "styled-components";
import { Button } from "@material-ui/core";

export const PageContainer = styled.div`
  display: flex;
`

export const MainContainer = styled.div`
  background-color: #e0f2f1;
  width: calc(100vw - 210px);
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
    padding: 8px;
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
  width: 47%;
  max-width: 520px;
  height: 460px;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Arvo", serif;
  font-style: italic;
  font-weight: normal;
  font-size: 16px;
`;
export const StyledButton = styled(Button)`
  && {
    color: white;
    text-transform: none;
    background-color: #ec9805;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    border: 2px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
  &&:hover {
    background-color: #d68801;
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
