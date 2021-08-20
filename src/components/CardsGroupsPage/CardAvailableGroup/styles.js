import styled from "styled-components";

export const Container = styled.div`
  border-radius: 5px;
  width: 320px;
  height: 190px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0.5rem;

  .card_colored-part {
    background-color: ${(props) => props.color};
    width: 100%;
    height: 18px;
  }

  .card_content {
    height: 158px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #fff;
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

  .card_actions {
    font-family: "Karla", sans-serif;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button {
      background-color: #00695C;
      border: none;
      color: #fff;
      font-weight: 700;
      font-size: 1rem;
      width: 128px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;

      span {
        padding-left: 0.5rem;
      }
    }

    .seeMore{
      font-weight: 700;
      color: #212121;
      font-size: 18px;
      border: 3px solid transparent;
      border-bottom: 3px solid #E65100;
      cursor: pointer;
      border-radius: 5px;
      transition: 0.5s;
      padding: 4px;

      :hover{
        border: 3px solid #E65100;
      }
    }
  }
`;

export const Icon = styled.div`
  svg{
    width: 40px;
    height: 40px;
  }
`;


export const ImagePlus = styled.img`
  width: 10px;
  height: 10px;
`;
