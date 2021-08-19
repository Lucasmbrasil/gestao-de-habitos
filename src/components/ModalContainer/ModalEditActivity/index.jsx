import ModalContainer from "..";
import { Title } from "../styles";
import { Container } from "./styles";
import { InputContainer } from "../styles";

const EditAtividade = () => {
  return (
    <ModalContainer color="#8BC34A">
      <Container>
        <Title>editar atividade:</Title>
        <InputContainer>
          <div>
            <label>novo título</label>
          </div>
          <input type="text" placeholder="nome da atividade" />
        </InputContainer>
      </Container>
    </ModalContainer>
  );
};

export default EditAtividade;
