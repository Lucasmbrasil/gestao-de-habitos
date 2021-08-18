import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: none;
    
    @media screen and (min-width: 680px){
        width: 95%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        background-color: rgba(255, 253, 231, 0.5);
        padding: 20px;
        margin: 0 auto;
        height: 130px;
        border-bottom: 4px solid lightgray; 
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

export const ContainerIconTitleSubtitle = styled.div` 
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 70%;   
    color: #212121; 
    font-family: "Karla", sans-serif;
    svg{
        width: 75px;
        height: 75px;
    }

    h2{
        font-family: "Arvo", serif;
        padding: 10px 0;
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
    padding: 10px;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 8px;    
    width: 183px;
    height: 42px;
`;