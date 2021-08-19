import styled from "styled-components";
import { Grid, Paper } from "@material-ui/core";

export const Container = styled(Grid)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 95%;
    margin: 20px auto;
  }
`;

export const BackgroundDiv = styled(Grid)`
  && {
    background-color: RGB(225, 190, 231, 0.25);
    padding: 15px;
    margin-bottom: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const PaperDiv = styled(Paper)`
  && {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    background: #eceff1;
    height: 100%;
  }
`;

export const InputPaper = styled(Paper)`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #757575;
    border-radius: 10px;
    box-shadow: 0px 10px 15px -8px rgba(0, 0, 0, 0.75);
    padding: 10px;
    margin: 30px 0 10px;
    @media (min-width: 768px) {
      width: 50%;
    }
  }
  && input {
    width: 95%;
  }
  && SearchIcon {
    width: 5%;
    heigth: 95%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  background-color: white;
  width: 32%;
  height: 100px;
  cursor: pointer;
  h3 {
    font-size: 0.5rem;
  }
  p {
    font-size: 0.5rem;
  }
`;

export const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ec407a;
  border: 2px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  padding: 8px;
  font-family: "Karla", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 0 0 8px 0;
  width: 50%;
  height: 42px;
  @media (min-width: 768px) {
    width: 183px;
    border-radius: 8px;
    margin-top: 10px;
    text-align: right;
  }
`;
export const ButtonPrevious = styled(ButtonNext)`
  border-radius: 0 0 0 8px;
  @media (min-width: 768px) {
    width: 183px;
    border-radius: 8px;
    margin-top: 10px;
    text-align: right;
    /* margin-right: auto; */
  }
`;
