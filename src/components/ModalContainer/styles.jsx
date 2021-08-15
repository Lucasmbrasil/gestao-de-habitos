import styled from "styled-components";

export const Title = styled.h3`
  font-family: "Arvo", serif;
  margin: 0.5rem 0 0 0;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;
  color: #212121;
`
export const InputContainer = styled.div`
  font-size: 1rem;
  color: #424242;
  font-family: "Karla", sans-serif;
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  width: 90%;

  input {
    height: 35px;
    border: 1px solid #424242;
    border-radius: 0.5rem;
    width: 100%;
    opacity: 87%;
    padding-left: 1rem;
  }
`

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

  .middle {
    background-color: #fafafa;
    display: flex;
    justify-content: center;

    .modalGrupo {
      height: 244px;
      width: 100%;
      .titulo {
        font-family: "Arvo", serif;
        margin: 0.5rem 0 0 0;
        text-align: center;
      }
      .input {
        display: flex;
        flex-direction: column;

        width: 94%;
        align-items: center;

        .legenda {
          font-family: "Karla", sans-serif;
          width: 87%;
        }

        .GrupoTexto {
          border: 1px solid #424242;
          opacity: 87%;
          height: 29px;
          padding-left: 1rem;
          width: 87%;
          border-radius: 5px;
        }
      }
      .input {
        display: flex;
        flex-direction: column;

        width: 94%;
        align-items: center;
        .legenda {
          font-family: "Karla", sans-serif;
          width: 87%;
        }

        .desc {
          border: 1px solid #424242;
          opacity: 87%;
          height: 56px;
          padding-left: 1rem;
          padding-bottom: 2rem;
          width: 87%;
          border-radius: 5px;
        }
      }
      .input {
        display: flex;
        flex-direction: column;

        width: 94%;
        align-items: center;
        .legenda {
          font-family: "Karla", sans-serif;
          width: 87%;
        }

        .select {
          width: 87%;
          .option {
            font-family: "Karla", sans-serif;
            color: "#0000";
            opacity: 54%;
          }
        }
      }
    }

    .modal {
      height: 310px;
      width: 100%;

      .title {
        font-family: "Arvo", serif;
        margin: 0.5rem 0 0 0;
        text-align: center;
      }

      .input {
        display: flex;
        flex-direction: column;

        width: 94%;
        align-items: center;

        .text {
          font-family: "Karla", sans-serif;
          width: 87%;
        }

        .habitoName {
          border: 1px solid #424242;
          opacity: 87%;
          height: 29px;
          padding-left: 1rem;
          width: 87%;
          border-radius: 5px;
        }
      }

      .input {
        display: flex;
        flex-direction: column;

        width: 94%;
        align-items: center;
        .text2 {
          font-family: "Karla", sans-serif;
          width: 87%;
        }

        .desc {
          border: 1px solid #424242;
          opacity: 87%;
          height: 56px;
          padding-left: 1rem;
          padding-bottom: 2rem;
          width: 87%;
          border-radius: 5px;
        }
      }

      .input {
        display: flex;
        flex-direction: column;

        width: 94%;
        align-items: center;
        .text3 {
          font-family: "Karla", sans-serif;
          width: 87%;
        }

        .select {
          width: 87%;
          .option {
            font-family: "Karla", sans-serif;
            color: "#0000";
            opacity: 54%;
          }
        }
      }

      .frequency {
        height: 52px;
        display: flex;
        align-items: center;
      }
    }
  }

  .modalDelete {
    height: 20vh;
    width: 100%;
    h1 {
      font-family: "Arvo", serif;
      color: #424242;
      text-align: center;
    }
  }

  .modalObjetivo {
    height: 23vh;
    width: 100%;

    .titulo {
      font-family: "Arvo", serif;
      margin: 0.5rem 0 0 0;
      text-align: center;
    }

    .divLegenda {
      display: flex;
      flex-direction: column;

      width: 94%;
      align-items: center;
      .legenda {
        font-family: "Karla", sans-serif;
        width: 87%;
      }
      .objetivo-texto {
        border: 1px solid #424242;
        opacity: 87%;
        height: 29px;
        padding-left: 1rem;
        width: 87%;
        border-radius: 5px;
      }
    }
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
      font-family: "Karla", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 37px;
      color: #ffffff;
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
      bottom: 1rem;
    }
  }
`;
