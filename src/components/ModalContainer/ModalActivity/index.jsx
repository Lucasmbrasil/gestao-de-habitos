import TodayRoundedIcon from "@material-ui/icons/TodayRounded";
import ModalContainer from "..";
import { Title } from "../styles";
import { InputContainer } from "../styles";
import { Container } from "./styles";

const ModalAtividade = () => {
  return (
    <ModalContainer color="#8BC34A">
      <Container>
        <Title>nova atividade:</Title>
        <InputContainer>
          <div>
            <label>título</label>
          </div>
          <input type="text" placeholder="nome da atividade" />
        </InputContainer>
        <InputContainer>
          <div className="legenda">
            <label>data limite</label>
          </div>
          <div className="campo-data">
            <input placeholder="20/10/2021"/>
            <TodayRoundedIcon style={{ color: "#424242", opacity: "42%" }} />
          </div>
        </InputContainer>
      </Container>
    </ModalContainer>
  );
};

export default ModalAtividade;
