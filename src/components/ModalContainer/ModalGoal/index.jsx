import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import ModalContainer from "..";
import { Title } from "../styles";
import { useState } from "react";
import { InputContainer } from "../styles";
import { Container } from "./styles";

const ModalObjetivo = () => {
  const [value, setValue] = useState(2);
  
  return (
    <ModalContainer color="#7986CB">
      <Container>
        <Title>novo objetivo:</Title>
        <InputContainer>
          <div className="legenda">
            <label>título</label>
          </div>
          <input type="text" placeholder="título do ojetivo" />
        </InputContainer>
        <InputContainer>
        <div className="rating">
          <label>nível de dificuldade:</label>
          <Rating
            name="objetivo"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
        </InputContainer>
      </Container>
    </ModalContainer>
  );
};

export default ModalObjetivo;
