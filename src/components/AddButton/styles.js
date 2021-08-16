import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => `${props.color}`};
  border: 2px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 10%;
  font-size: 1rem;
  padding: 5px;
  display: flex;
  justify-content: space-evenly;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  color: #fff;

  .plus {
    color: white;
  }
`;
