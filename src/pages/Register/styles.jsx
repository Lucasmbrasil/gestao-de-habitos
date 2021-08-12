import styled from "styled-components";

export const ContainerRight = styled.div`
  width: 50vw;
  height: 100vh;
  background: #159957; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #006064,
    #159957
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #006064,
    #159957
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  img {
    max-width: 400px;
    margin-top: 30px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RegisterContainer = styled.div`
  display: flex;
  color: white;
`;
