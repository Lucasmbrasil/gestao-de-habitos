import styled from "styled-components";
import {Grid, Paper} from '@material-ui/core';

export const GridDiv = styled(Grid)`
    && {
        width: 100%;
        @media (max-width: 768px){
        margin-top: 35px
        }
    }
`;

export const Header = styled(Paper)`
    && {
        display: flex;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        background-color: rgb(225, 190, 231, 0.25);
        }
`;

export const Img = styled.img`
    && {
        max-width: 150px;
        width: 30%;
        height: 60%;
        margin: 10px;
    }
`;

export const Container = styled.div`
    && {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        padding: 5px;
        width: 70%;
        font-family: 'Arvo', sans-serif;
    }
    && h1{
        font-size: 2rem;
        font-weight: lighter;
        span {
            font-weight: bold;
        }
        @media (max-width: 768px){
        font-size: 1.2rem;
        }
    }
    && p{
        font-size: 1.2rem;
        font-style: italic;
        @media (max-width: 768px){
            font-size: 1rem;
        }
    }
`;