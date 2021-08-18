import styled from 'styled-components';

export const Main = styled.div`
    && {
        width: 100vw;
        height: 100vh;
    }
`;

export const Header = styled.header`
    && {
        background-color: #006064;
        display: flex;
        justify-content: space-between;
        padding: 30px;
        color: white;
    }
    && h1{
        font-family: 'Arvo', sans-serif;
        font-weight: lighter;
        font-size: 2vw;
    }
    && svg{
        cursor: pointer;
        font-size: 2.5vw;
    }
    && svg:hover{
        filter: contrast(70%);
    }
`;

export const Container = styled.div`
    && {
        display: flex;
        align-items: center;
        justify-content: space-between
        height: 70vh;
        width: 100vw;
        padding: 10px;
        background-color: ${props => props.uncolored ? 'white' : '#E0F2F1'};
    }
    && img{
        width: 50%;
        margin: 0 auto;
        }
    && div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 80vh;
    } 
    && h1 {
        font-size: 5vw;
        font-family: 'Arvo', sans-serif;
        background: rgb(76,153,123);
        background: linear-gradient(90deg, rgba(76,153,123,1) 35%, rgba(103,159,243,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    && h4{
        font-size: 1.3vw;
        font-weight: lighter;
        margin: 0 0 20px 200px;
        color: RGB(0, 96, 100, 0.5);
    }
    && button{
        background: rgb(113,165,187);
        background: linear-gradient(90deg, rgba(113,165,187,1) 0%, rgba(55,184,83,0.21332282913165268) 100%);
        border: none;
        border-radius: 40px;
        padding: 30px;
        color: white;
        font-size: 36px;
        box-shadow: -19px 21px 8px -6px rgba(253,216,53,0.71);
        -webkit-box-shadow: -19px 21px 8px -6px rgba(253,216,53,0.71);
        -moz-box-shadow: -19px 21px 8px -6px rgba(253,216,53,0.71);
    } 
`;

export const Footer = styled.footer`
    && {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #006064;
        padding: 50px;
        color: white;
    }
    && p{
        font-size: 24px;
    }
    && svg{
        font-size: 36px;
    }
`;