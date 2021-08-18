import styled from 'styled-components';
import { Grid, Paper } from '@material-ui/core';


export const Container = styled(Grid)`
&& {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 95%;
    margin: 0 auto;
}
`;

export const BackgroundDiv = styled(Grid)`
    && {
        background-color: RGB(225, 190, 231, 0.25);
        padding: 15px;
        margin: 10px;
        width: 100%;
        height: 70vh;
        max-height: 600px;
        /* overflow: hidden; */
    }
`;

export const PaperDiv = styled(Paper)`
    && {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 10px;
        background: #ECEFF1;
        height: 65vh;
        max-height: 580px;
        overflow: scroll;
    }
`;

export const InputPaper = styled(Paper)`
    && {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 2px solid #757575;
        border-radius: 10px;
        box-shadow: 0px 10px 15px -8px rgba(0,0,0,0.75);
        padding: 10px;
        margin: 30px;
        width: 50%;
    }
    && input{
        width: 95%;
    }
    && svg{
        width: 30px;
        height: 30px;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    background-color: white;
    width: 32%;
    height: 100px;

    h3{
        font-size: 0.5rem;
    }
    p{
        font-size: 0.5rem;
    }
`;