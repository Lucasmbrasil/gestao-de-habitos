import styled from "styled-components";

export const ContainerBody = styled.div`
    height: 90vh;   
    width: 90%; 
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    padding: 20px;

    @media screen and (min-width: 800px){
        width: 90%;
        background-color: lightgray;
        display: flex;
        flex-direction: row;
    }
`;

export const ContainerMyGroups = styled.div`    
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
        box-shadow: 4px 4px 10px 4px lightgray;
        height: 80px;
        background-color: #FFF;
        color: #424242;
        font-family: Arvo;
        border: 1px solid gray;
        text-decoration: underline;
    }

    @media screen and (min-width: 800px){
        width: 50%;
        background-color: #FFF;
        box-shadow: 4px 4px 2px gray;

        h2{
            text-decoration: none;
        }
    }
`;

export const ContainerSuggestionGroups = styled.div`
    width: 100%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 200px;
    

    h2{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px 0 20px;
        padding: 10px;
        width: 90%;
        box-shadow: 4px 4px 10px 4px lightgray;
        height: 80px;
        background-color: #FFF;
        color: #424242;
        font-family: Arvo;
        border: 1px solid gray;
        text-decoration: underline;
    }

    @media screen and (min-width: 800px){
        width: 50%;
        background-color: #FFF;
        box-shadow: 4px 4px 2px gray;
        position: relative;

        h2{
            text-decoration: none;
        }
    }
`;

export const SearchPlace = styled.div`
    display: none;

    @media screen and (min-width: 800px){
        width: 500px;
        height: 100px;  
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Karla;      
        position: absolute;
        bottom: 100px;

        p{
            color: #424242;
            margin: 10px;
        }
        
    }
`;

export const SearchBar = styled.div`
    width: 279px;
    height: 40px;
    font-size: 18px;
    background-color: #E65100;
    color: #FFF;
    height: 50px;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 6px 6px 6px gray;

    :hover{
        background-color: coral;
        cursor: pointer;
    }
`;