import styled from "styled-components";

export const BodyPage = styled.div`
  background-color: #e0f2f1;
  height: 100%;
  max-width: 1440px;
  padding: 20px;
  margin: 0 auto;
  /* DISPLAY FLEX ADICIONADO PARA MELHOR VISUALIZAÇÃO DE TESTE */

  display: flex;
  flex-direction: column;

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
