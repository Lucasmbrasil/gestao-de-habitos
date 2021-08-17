import ModalContainer from "..";
import { Title } from "../styles";
import { InputContainer } from "../styles";
import { Container } from "./styles";

const EditUsername = () => {
  return (
    <ModalContainer color="#26A69A">
      <Container>
        <Title>editar username:</Title>
        <InputContainer>
          <div>
            <label>novo nome</label>
          </div>
          <input placeholder="nome de usuário"/>
        </InputContainer>
        </Container>
    </ModalContainer>
  );
};

export default EditUsername;
