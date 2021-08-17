import styled from "styled-components";

export const Container = styled.aside`
  width: 220px;
  margin: 0 auto;
  height: 100vh;
  float: left;
  align-content: flex-end;
  flex-direction: column;
  display: flex;
`;

export const TitleBar = styled.div`
  background-color: #006064;
  opacity: 50%;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .title {
    font-family: "Arvo", serif;
    font-weight: bold;
    color: #ffffff;
    font-size: 24px;
  }
`;

export const MenuBar = styled.div`
  background-color: #006064;
  height: 100vh;
  float: left;
  width: 100%;
  font-size: 16px;

  .pages {
    height: 91%;
  }

  .option {
    padding:1rem;
    display: flex;
    align-items: center;
    font-family: "Arvo", serif;
    color: #ffffff;
    cursor: pointer;
    font-weight: 400;
    :hover{
      background: rgba(255, 255, 255, 0.25);
    }
    .text {
      margin-left: 1rem;
    }
  }

  .group {
    padding: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    font-family: "Arvo", serif;
    color: #ffffff;
    cursor: pointer;

    :hover{
      background: rgba(255, 255, 255, 0.25);
    }

    .down-arrow {
      margin-left: 2rem;
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
    font-family: "Arvo", serif;
    color: #ffffff;
    cursor: pointer;
    transition: ease-in 300ms;
  }

  .notShow {
    display: none;
  }

  .showDiv {
    margin-top: 0.5rem;
    padding-right: 2rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 100px;
    font-size: 0.9rem;
    transition: ease-in 300ms;

    div {
      width: 70%;
      padding: 0.2rem;

      :hover{
      background: rgba(255, 255, 255, 0.25);
      }
    }
  }

  .logout {
    font-family: "Arvo", serif;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding: 1rem;
    font-weight: 500;
    cursor: pointer;
    :hover{
      background: rgba(255, 255, 255, 0.25);
    }

    div {
      margin-left: 1rem;
    }
  }
`;
