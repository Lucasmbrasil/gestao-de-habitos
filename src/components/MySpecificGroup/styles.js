import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${(props) => props.color ? props.color : "#ec407a"};
  border: 2px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  padding: 8px;
  font-family: "Karla", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 8px;
  height: 35px;
  span {
    padding-left: 0.2rem;
    font-weight: bold;
  }

  :hover {
    background-color: ${(props) => props.color ? props.color : "#ec407a"};
  }
`;

export const PageContainer = styled.div`
  @media(min-width: 769px){
    display: flex;
  }
  
`

export const MainContainer = styled.main`
  background-color: #e0f2f1;
  @media(min-width: 769px){
    width: calc(100vw - 210px);
  }
  min-height: 100vh;
  
`;

export const ContainerHeader = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(255, 253, 231, 0.5);
    padding: 10px;
    margin: 50px auto;
    height: 130px;
    border-bottom: 4px solid lightgray; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media screen and (min-width: 768px){
        margin: 10px auto;
        padding: 20px;
    }

    .buttons {
      display: flex;
      flex-direction: column;

      /* width: 15%; */
      height: 90%;
      justify-content: space-around;
      @media screen and (min-width: 768px){
        flex-direction: column;
    }
    }
`;

export const ContainerTitle = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 70%;   
    color: #212121; 
    font-family: "Karla", sans-serif;

    svg{
        width: 35px;
        height: 35px;
        @media (max-width: 560px){
          display: none;
        }
    }

    h1{
        font-family: "Arvo", serif;
        padding: 10px 0;
        font-size: 1.2rem;
    }
    
    @media (min-width: 769px){
      width: 70%; 

      svg{
        width: 75px;
        height: 75px;
    }

    h1{
        padding: 10px 0;
     }
    }
`;

export const SubscribeGroupButton = styled.button`
      background-color: ${(props) => props.disabled ? "#E0E0E0" : "#00695C"};
      border: none;
      color: ${(props) => props.disabled ? "#212121" : "#fff"};
      font-weight: 700;
      font-size: 1rem;
      width: 160px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      cursor: ${(props) => props.disabled ? "default" : "pointer"}; 
      border: 2px solid rgba(0, 0, 0, 0.5);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      span {
        padding-left: 0.5rem;
      }
      @media(max-width: 768px){
        width: 100%;
        color: ${(props) => props.disabled ? "#212121" : "#fff"};
        background-color: ${(props) => props.disabled ? "#E0E0E0" : "#00695C"};
      } 
`

export const Container = styled.section`
  display: flex;
  @media (min-width: 769px){
    flex-wrap: wrap;
    flex-direction: row;
  }
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  background: rgba(225, 190, 231, 0.25);
  width: 95%;
  margin: 2.5rem auto;
  min-height: 600px;

  .header {
    padding: 8px;
    width: 100%;
    text-align: center;
    height: 100px;

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

export const ContainerText = styled.div`
  width: 100%;
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

export const ContentContainer = styled.section`
  width: 80%;
  height: 460px;
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media(max-width: 980px){
    width: 80%;
    margin: 1rem auto;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`