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
          <div>
            <label>título</label>
          </div>
          <input type="text" placeholder="nome do grupo" />
        </InputContainer>
        <InputContainer>
          <div>
            <label>descrição</label>
          </div>
          <input type="text" placeholder="descreva um pouco sobre o grupo aqui"
          />
        </InputContainer>
        <InputContainer>
          <div>
            <label>categoria</label>
          </div>
          <div className="select">
            <select>
              <option>selecione uma categoria</option>
            </select>
          </div>
        </InputContainer>
      </Container>
    </ModalContainer>
  );
};

export default ModalGrupo;
