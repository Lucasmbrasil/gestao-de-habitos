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
          <div className="legenda">
            <label>novo nome</label>
          </div>
          <input className="usuario" placeholder="nome de usuario" />
        </InputContainer>
        </Container>
    </ModalContainer>
  );
};

export default EditUsername;
