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
  background-color: blue;
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

  @media (max-width: 768px) {
    background-color: #e0f2f1;
    height: "Main";
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    .MiniBanner {
      background-color: red;
      height: 8%;
      margin-top: 1rem;
      width: 54%;
      display: flex;

      align-items: center;
      -webkit-box-pack: unset;
      -webkit-justify-content: unset;
      -ms-flex-pack: unset;
      justify-content: space-between;

      .image {
        background-color: blue;
        width: 18%;
        height: 92%;
      }
    }
    .ContainerContent {
      background-color: rgba(225, 190, 231, 0.25);
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
        background-color: white;
        width: 91%;
        height: 82%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .test {
          border: 1px solid black;
        }
      }
    }
  }
`;

export const ContentDiv = styled.div`
  background-color: #e0f2f1;
  height: 97vh;
  margin-top: 1.5rem;
  width: 93%;
  display: flex;
  flex-direction: column;
  .line {
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98%;
    div {
      background-color: #bdbdbd;
      height: 3%;
      border-radius: 79%;
      width: 91%;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Banner = styled.div`
  box-shadow: 1px 5px 5px -3px #000000;
  border: 1px solid;
  width: 93%;
  display: flex;
  height: 15%;
  margin: 1rem 1rem 1rem 2rem;
`;
export const IconImage = styled.div`
  width: 11%;
  height: 100%;
`;
export const GroupText = styled.div`
  width: 64%;
  div {
    font-family: "Arvo", serif;
    font-weight: bold;
    font-size: 36px;
  }
`;
export const ButtonsDIV = styled.div`
  display: flex;
  width: 17%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
`;
export const ContentContainer = styled.div`
  background-color: rgba(225, 190, 231, 0.25);
  height: 74vh;
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
    width: 46%;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .text {
      border: 1px solid black;
      box-shadow: 1px 1px 6px -1px #000000;
      width: 86%;
      height: 12%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      display: flex;
      margin-top: 1rem;
    }
  }
`;
