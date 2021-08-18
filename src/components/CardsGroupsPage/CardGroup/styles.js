import styled from "styled-components";

export const Container = styled.div`
  border-radius: 5px;
  width: 230px;
  height: 150px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 10px;
  
  .card_colored-part {
    background-color: ${(props) => props.color};
    width: 100%;
    height: 16px;
  }

  .card_content {
    height: 118px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .card_header {
    font-family: "Arvo", serif;
    font-size: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    h3 {
      font-weight: 400;
    }
  }

  .card_description {
    font-family: "Karla", sans-serif;
    padding: 0 1rem;
    font-size: 14px;
    overflow: hidden;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    span {
      font-weight: bold;
    }
  }
`;

export const Icon = styled.div`
  svg{
    width: 40px;
    height: 40px;
  }
`;
