import styled from "styled-components";

export const ContainerBody = styled.div`
    height: 90vh;   
    width: 100%; 
    display: flex;
    flex-direction: column;
    margin: 30px auto;
    padding: 20px;

    @media screen and (min-width: 750px){
        width: 90%;
        background-color: lightgray;
        display: flex;
        flex-direction: row;
    }
`;

export const ContainerGroups = styled.div`    
    width: 100%;    
    margin: 10px;
    display: flex;
    justify-content: center;
    min-height: 200px;   

    h2{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px 0 20px;
        padding: 10px;
        width: 90%;
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
        height: 80px;
        background-color: #FFF;
        color: #424242;
        font-family: "Arvo", sans-serif;
        text-decoration: underline;
    }

    @media screen and (min-width: 750px){
        width: 50%;
        background-color: #FFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        h2{
            text-decoration: none;
        }
    }
`;

export const SearchPlace = styled.div`
    display: none;

    @media screen and (min-width: 750px){
        width: 500px;
        height: 100px;  
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "Karla", sans-serif;
        font-weight: bold;
        font-size: 18px;      
        position: absolute;
        bottom: 100px;

        p{  
            font-weight: 400;
            font-size: 1rem;
            color: #424242;
            margin: 10px;
        }  
    }
`;

export const SearchBar = styled.div`
    width: 280px;
    height: 40px;
    font-size: 18px;
    background-color: #E65100;
    color: #FFF;
    height: 40px;
    border: 1px solid #FFFFFF;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    :hover{
        background-color: coral;
        cursor: pointer;
    }
`;