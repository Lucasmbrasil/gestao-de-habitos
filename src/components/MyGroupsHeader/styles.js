import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: #FFFDE7;
    padding: 20px;
    margin: 0 auto;
    height: 160px;
    border-bottom: 4px solid lightgray;    
`;

export const ContainerIconTitleSubtitle = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 70%;   
    padding: 20px;
    color: black; 

    h2{
        font-family: Arvo;
        padding: 10px 0;
    }
`;
export const ButtonAddGroup = styled.button` 
    display: flex;
    align-items: center;
    justify-content: space-around;   
    background-color: #EC407A;
    border: 2px solid gray;
    color: #FFF;
    padding: 10px;
    border-radius: 8px;    
    width: 183px;
    height: 42px;
`;