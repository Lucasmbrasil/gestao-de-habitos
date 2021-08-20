import styled from "styled-components";

export const Container = styled.div`
  && {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Header = styled.header`
  && {
    background: -webkit-linear-gradient(
      to right,
      #006064,
      #159957
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #006064,
      #159957
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    color: white;
    height: 90px;
  }
  && h1 {
    font-family: "Arvo", sans-serif;
    font-weight: lighter;
    font-size: 2vw;
    cursor: pointer;
  }
  && svg {
    cursor: pointer;
    font-size: 2.5vw;
    margin-right: 20px;
  }
  && svg:hover {
    filter: contrast(70%);
  }
  @media (max-width: 768px) {
    && {
      padding: 20px;
    }
    && h1 {
      font-size: 5vw;
    }
    && svg {
      font-size: 7vw;
    }
  }
`;

export const Main = styled.div`
  && {
    display: flex;
    flex-direction: column;
    margin: 0 0 20px 0;
  }
  .devs-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: 10px;
    background-color: "white";
  }
  && h2 {
    color: #212121;
    font-family: "Karla", sans-serif;
  }

  && h1 {
    width: 60%;
    margin: 20px auto 20px auto;
    text-align: center;
    font-size: 5vw;
    font-weight: 300;
    color: #006064;
  }
  && .person-card {
    height: 20%;
    display: flex;
  }
  && .dev {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  && .dev h1 {
    width: 100%;
    margin: 10px 0 5px 0;
  }
  && .dev img {
    width: 50%;
    border-radius: 50%;
    border: 5px solid RGB(0, 96, 100, 0.5);
  }
  && .contact {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    width: 50%;
  }
  && .contact-div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  && .contact h2 {
    margin: 0 0 10px 0;
    font-weight: 500;
    font-size: 4vw;
  }
  && .contact img {
    width: 20%;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    && {
      justify-content: flex-start;
    }
    && .devs-container {
      flex-direction: row;
    }
    && h1 {
      width: 35%;
      margin: 30px auto 30px auto;
      text-align: center;
      font-size: 3vw;
    }
    && .person-card {
      width: 20%;
      height: 100%;
      flex-direction: column;
    }
    && .dev {
      width: 100%;
    }
    && .dev img {
      margin: 0 0 20px 0;
    }
    && .dev h1 {
      font-size: 2vw;
    }
    && .contact {
      width: 100%;
    }
    && .contact h2 {
      font-size: 2vw;
      width: 100%;
    }
    && .contact-div {
      margin: 0 0 10px 0;
    }
  }
`;

export const Footer = styled.footer`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    background: -webkit-linear-gradient(
      to right,
      #006064,
      #159957
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #006064,
      #159957
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    color: white;
    height: 90px;
  }
  && p {
    font-size: 24px;
  }
  && svg {
    font-size: 36px;
    margin-right: 10px;
  }
  @media (max-width: 768px) {
    && {
      padding: 20px;
    }
    && p {
      font-size: 16px;
    }
    && svg {
      font-size: 24px;
    }
  }
`;
