import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => `${props.color}`};
  border: 1px solid black;
  border-radius: 5px;
  width: 10%;
  font-size: 16px;
  padding: 3px 3px 3px 3px;
  display: flex;
  justify-content: space-evenly;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: "Karla", sans-serif;
  color: white;

  .plus {
    color: white;
  }
`;
