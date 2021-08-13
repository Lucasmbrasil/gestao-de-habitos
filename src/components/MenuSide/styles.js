import styled from "styled-components";

export const TitleBar = styled.div`
  background-color: #006064;
  opacity: 50%;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11%;

  .title {
    font-family: "Arvo", serif;
    font-weight: bold;
    color: #ffffff;
  }
`;

export const MenuBar = styled.div`
  background-color: #006064;
  height: 100vh;
  float: left;
  width: 11%;
  .pages {
    height: 93%;
  }
  .option {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    font-family: "Karla", sans-serif;
    color: #ffffff;
    cursor: pointer;
    .text {
      margin-left: 1rem;
    }
  }

  .group {
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
    font-family: "Karla", sans-serif;
    color: #ffffff;

    .down-arrow {
      margin-left: 1rem;
      cursor: pointer;
    }
  }
  .main-groups {
    margin-left: 1rem;
    cursor: pointer;
  }

  .notAppear {
    display: none;
  }
  .Appear {
    display: flex;
    font-family: "Karla", sans-serif;
    color: #ffffff;
    cursor: pointer;
    transition: ease-in 10ms;
  }

  .notShow {
    display: none;
  }

  .showDiv {
    margin-left: 3.1rem;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    height: 69px;
    font-size: 13px;
    transition: ease-in 10ms;
  }

  .logout {
    font-family: "Karla", sans-serif;
    color: #ffffff;
    display: flex;
    margin-left: 1rem;
    margin-right: 1rem;

    div {
      margin-left: 1rem;
    }
  }
`;
