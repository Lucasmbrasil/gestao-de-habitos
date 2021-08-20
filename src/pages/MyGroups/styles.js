import styled from "styled-components";

export const BodyPage = styled.div`
  background-color: #e0f2f1;
  height: 100%;
  min-height: 100vh;
  padding: 20px;
  margin: 0 auto;
  /* DISPLAY FLEX ADICIONADO PARA MELHOR VISUALIZAÇÃO DE TESTE */

  display: flex;
  flex-direction: column;
  @media(min-width: 769px){
    width: calc(100vw - 210px);
  }

  /* ------------------------ */
`;

export const HorizontalLine = styled.hr`
  display: none;

  @media screen and (min-width: 900px) {
    display: block;
    border: 1px solid #bdbdbd;
    width: 90%;
    margin: 20px auto;
  }
`;
