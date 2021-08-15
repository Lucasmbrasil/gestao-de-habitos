import ModalContainer from "..";
import { Title } from "../styles";
import { InputContainer } from "../styles";
import { Container } from "./styles";

const ModalGrupo = () => {
  return (
    <ModalContainer color="#00BCD4">
      <Container>
        <Title>novo grupo:</Title>
        <InputContainer>
          <div className="legenda">
            <label>título</label>
          </div>
          <input className="GrupoTexto" placeholder="nome do grupo" />
        </InputContainer>
        <InputContainer>
          <div className="legenda">
            <label>descrição</label>
          </div>
          <input
            className="desc"
            placeholder="descreva um pouco sobre o grupo aqui"
          />
        </InputContainer>
        <InputContainer>
          <div className="legenda">
            <label>categoria</label>
          </div>
          <div className="select">
            <select>
              <option className="option">selecione uma categoria</option>
            </select>
          </div>
        </InputContainer>
      </Container>
    </ModalContainer>
  );
};

export default ModalGrupo;
