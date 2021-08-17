import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 100vh;

  .header {
    display: none;
  }
  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    height: "container";
    .header {
      background-color: rgba(0, 96, 100, 0.5);
      color: white;
      height: 7%;
      align-items: center;
      justify-content: center;
      display: flex;
      font-family: "Arvo", serif;
    }
  }
`;
export const Main = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .MiniBanner {
    display: none;
  }

  .ContainerContent {
    display: none;
  }
  .Activities {
    display: none;
  }

  @media (max-width: 768px) {
    background-color: #e0f2f1;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .Activities {
      display: flex;
    }
    .MiniBanner {
      background-color: red;
      height: 8%;
      margin-top: 1rem;
      width: 54%;
      display: flex;
      align-items: center;

      .image {
        background-color: blue;
        width: 18%;
        height: 92%;
      }

      .GroupName {
        margin-left: 1rem;
      }
    }

    .ContainerContent {
      background-color: white;
      width: 94%;
      height: 64%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;

      .GroupTitle {
        font-family: "Arvo", serif;
        height: 11%;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }

      .whitebox {
        background-color: #eceff1;
        width: 99%;
        height: 95%;
        display: flex;
        margin-top: 0.5rem;
        flex-direction: column;
      }
    }
  }
`;

export const ContentDiv = styled.div`
  background-color: #e0f2f1;
  height: 100vh;

  width: 93%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  background-color: rgba(225, 190, 231, 0.25);
  height: 100vh;
  width: 96%;
  margin: 0 1rem 0 1rem;
`;
export const TextDiv = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  div {
    font-family: "Arvo", serif;
    font-weight: bold;
    font-size: 36px;
  }
  p {
    font-family: "Karla", sans-serif;
  }
`;
export const ActivitiesContainer = styled.div`
  height: 62vh;
  display: flex;
  justify-content: space-around;
  .whitebox {
    background-color: white;
    width: 95%;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .grayBox {
      background-color: rgba(236, 239, 241, 0.5);
      width: 94%;
      margin-top: 1rem;
      height: 93%;

      .test {
        border: 1px solid;
        width: 300px;
        margin-left: 2rem;
        margin-top: 1rem;
      }
    }
  }
`;
