import Rating from "@material-ui/lab/Rating";
import ModalContainer from "..";
import Radio from "@material-ui/core/Radio";
import { useState } from "react";
import { Title } from "../styles";
import { InputContainer } from "../styles";
import { Container } from "./styles";

const ModalHabito = () => {
  const [selectedValue, setSelectedValue] = useState("a");
  const [value, setValue] = useState(2);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <ModalContainer color="#81C784">
      <Container>
        <Title>novo hábito:</Title>
        <InputContainer>
          <div>
            <label>título</label>
          </div>
          <input placeholder="nome do hábito" />
        </InputContainer>
        <InputContainer>
          <div>
            <label>descrição</label>
          </div>
          <textarea placeholder="descreva um pouco sobre o hábito aqui" />
        </InputContainer>
        <InputContainer>
          <div >
            <label>categoria</label>
          </div>
          <div className="select">
            <select>
              <option>selecione uma categoria</option>
            </select>
          </div>
        </InputContainer>
        <div className="frequency-container">
            <label>frequência:</label>
              <Radio
                checked={selectedValue === "a"}
                onChange={handleChange}
                value="a"
                name="radio-button"
                inputProps={{ "aria-label": "A" }}
              />
              <label>diária</label>
              
              <Radio
                checked={selectedValue === "b"}
                onChange={handleChange}
                value="b"
                name="radio-button"
                inputProps={{ "aria-label": "B" }}
              />
              <label>semanal</label>
        </div>
        <InputContainer>
            <div className="rating">
              <label>nível de dificuldade:</label>
              <Rating
                name="habito"
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

export default ModalHabito;
