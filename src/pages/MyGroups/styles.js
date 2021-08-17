import styled from "styled-components";

export const BodyPage = styled.body`
    background-color: #E0F2F1;
    height: 100%;
    max-width: 1440px;
    padding: 20px;
    margin: 0 auto;
`;

export const HorizontalLine = styled.hr`
    display: none;

    @media screen and (min-width: 900px){
        display: block;
        border: 1px solid #BDBDBD;
        width: 90%;
        margin: 20px auto;
    }
    
`;