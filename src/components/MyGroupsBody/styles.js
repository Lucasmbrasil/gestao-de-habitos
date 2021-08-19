import styled from "styled-components";

export const ContainerBody = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  
  @media screen and (min-width: 900px) {
    height: 90vh;
    width: 90%;
    background-color: lightgray;
    display: flex;
    flex-direction: row;
    padding: 20px;
  }
`;

export const ContainerGroups = styled.div`
min-width: 270px;
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  min-height: 200px;
  @media (max-width: 768px){
    flex-direction: column;
    align-items: center;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0 20px;
    padding: 10px;
    width: 90%;
    min-width: 250px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
    height: 80px;
    background-color: #fff;
    color: #424242;
    font-family: "Arvo", sans-serif;
    text-decoration: underline;

    @media (max-width: 768px){
      width: 100%;
      padding: 0;
    }
  }

  @media screen and (min-width: 900px) {
    width: 48%;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    h2 {
      text-decoration: none;
    }
  }
`;

export const SearchPlace = styled.div`

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    }

    /* COMENTADO PARA MELHOR VISUALIZAÇÃO DE TESTE */

    /* position: absolute; */

    /* --------------------------------------------- */
    bottom: 100px;

    p {
      font-weight: bold;
      font-size: 1rem;
      color: #424242;
      padding: 5px;
      margin: 10px;
      
  }
`;

export const SearchBar = styled.div`
  width: 260px;
  height: 40px;
  font-size: 18px;
  background-color: #e65100;
  color: #fff;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  :hover {
    background-color: coral;
    cursor: pointer;
  }
`;

export const ButtonAddGroup = styled.button` 
    display: flex;
    align-items: center;
    justify-content: space-around;   
    background-color: #EC407A;
    border: 2px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #FFF;
    padding: 8px;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 8px;    
    width: 183px;
    height: 42px;
    margin-top: 1rem;
    
`;
