import styled from 'styled-components';

export const Main = styled.div`
    && {
        width: 100vw;
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
        margin-right: 20px;
    }
    && svg:hover{
        filter: contrast(70%);
    }
    @media (max-width: 768px){
        && {
            padding: 20px;
        }
        && h1{
            font-size: 5vw;
        }
        && svg{
            font-size: 7vw;
        }
    }
`;

export const TopContainer = styled.div`
    && {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80vh;
        width: 100vw;
        padding: 10px;
        background-color: 'white';
    }
    && .content-box, .image-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 80vh;
    }    
    && .title{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: fit-content;
        align-items: flex-end;
    }
    && .start-button{
        max-width: 300px;
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
        color: RGB(0, 96, 100, 0.5);
    }
    && img{
        width: 80%;
        max-width: 500px;
    }
    @media (max-width: 768px){
        && {
            flex-direction: column;
        }
        && h1{
            font-size: 10vw;
        }
        && h4{
            font-size: 4.5vw;
        }
        && .start-button{
            margin-top: 30px;
            width: 50%;
        }
        && .content-box{
          width: 100%;
        }
        && .image-box{
          display: none;
        }
    }
`;
export const TopMidContainer = styled.div`
&& {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80vh;
    width: 100vw;
    padding: 10px;
    background-color: #D8E5D4;
}
&& .content-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80vh;
}
&& h2{
    color: #006064;
    font-size: 3vw;
    margin-bottom: 50px;
} 
&& p{
    color: #006064;
    font-size: 3vw;
    padding: 40px;
    font-weight: 350;
}
&& span{
    color: RGB(0, 96, 100, 0.5)
}
&& img{
    width: 80%;
    max-width: 500px;
}
@media (max-width: 768px){
    && {
        flex-direction: column;
    }
    && .content-box{
        width: 100%;
        justify-content: center;
    }
    && img{
        width: 60%;
        max-width: 500px;
    }
    && h2{
        font-size: 6vw;
        margin: 20px 0 20px 0;
    }
    && p{
        text-align: center;
        font-size: 4.5vw;
        padding: 0;
    }
}
`;
export const LastMidContainer = styled.div`
&& {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80vh;
    width: 100vw;
    padding: 10px;
    background-color: 'white';
}
&& .content-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80vh;
}
&& .groups{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;
}
&& .content-box-groups{
    display: flex;
    height: 80vh;
    width: 100%;
}
&& .groups img{
    width: 80%;
    max-width: 300px;
}
&& h3{
    color: #006064;
    font-size: 2.2vw;
    text-align: center;
    padding: 0 100px 50px 100px;
    font-weight: 350;
}
}
@media (max-width: 768px){
    && {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: 100vh;
        height: 100vw;
    }
    && .content-box{
      width: 100%;
    }
    && h2{
        margin: 30px 0 20px 0;
        font-size: 7vw;
    }
    && img{
        width: 70%;
    }        
    && .content-box-groups{
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
    && .groups{
        width: 100%;
        height: 33%;
    }
    && h3{
        margin: 20px 0 20px 0;
        font-size: 3.5vw;
        padding: 0;
    }
    && .groups img{
        width: 40%;
    }
}
`;
export const LastContainer = styled.div`
&& {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80vh;
    width: 100vw;
    padding: 10px;
    background-color: #D8E5D4;
}
&& .content-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80vh;
} 
&& .last-box{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
}
&& img{
    width: 80%;
    max-width: 700px;
}
@media (max-width: 768px){
    && {
        display: none;
    }
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
        cursor: pointer;
    }
    && svg{
        font-size: 36px;
        margin-right: 10px;
    }
    @media (max-width: 768px){
        && {
            padding: 20px;
        }
        && p{
            font-size: 16px;
        }
        && svg{
            font-size: 24px;
        }
    }
`;