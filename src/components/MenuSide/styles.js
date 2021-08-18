import styled from "styled-components";

export const ListItemMenu = styled.p`
  color: #ffffff;
  font-family: "Arvo", serif;
  font-size: 16px;
`
export const ListItemMenuGroup = styled.p`
  color: #ffffff;
  font-family: "Arvo", serif;
  font-size: 14px;
  text-align: right;
`

export const LogoutDiv = styled.div`
    color: #ffffff;
    display: flex;
    align-items: center;
    padding: 1rem;
    font-weight: 500;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    :hover{
      background: rgba(255, 255, 255, 0.25);
    }
`

export const Container = styled.aside`
  /* position: fixed; */
  width: 220px;
  margin: 0 auto;
  height: 100%;
  float: left;
  align-content: flex-end;
  flex-direction: column;
  display: flex;
`;

export const TitleBar = styled.div`
  background-color: rgb(184, 195, 195, .8);
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Arvo", serif;
  font-weight: bold;
  color: #ffffff;
  font-size: 24px;
 
`;
