import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 350px;
    border: 2px solid ${(props) => props.color};
    border-radius: 16px;
    background-color: ${(props) => props.color};

    .div {
        width: 100%;
    }

    .middle{
        background-color: #FAFAFA;
    }

    .colored_part {
        background-color: ${(props) => props.color};
        height: 38px;  
    }

    .superior {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        span {
            position: relative;
            float: right;
            font-family: 'Karla', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 37px;
            color: #FFFFFF;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            margin-right: 0.5rem;
            cursor: pointer;
        }
    }
    
    .inferior {
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        button {
            position: relative;
            left: 250px;
            bottom: 1rem 
        }
    }
`