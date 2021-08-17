import Rating from "@material-ui/lab/Rating";
import ModalContainer from "..";
import Radio from "@material-ui/core/Radio";
import { useState } from "react";
import { Title } from "../styles";
import { InputContainer } from "../styles";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, RadioGroup } from "@material-ui/core";

const ModalHabito = ({ handleButton }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [value, setValue] = useState(2);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    // status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleAdd = (data) => {
    console.log(data);
  };

  return (
    <ModalContainer
      color="#aed4b0"
      onSubmit={handleSubmit(handleAdd)}
      handleButton={handleButton}
    >
      <Container>
        {/* <form onSubmit={handleSubmit(handleAdd)}> */}
        <Title>novo hábito:</Title>
        <InputContainer>
          <div>
            <label>título</label>
          </div>
          <input placeholder="nome do hábito" {...register("title")} />
        </InputContainer>
        <InputContainer>
          <div >
            <label>categoria</label>
          </div>
          <div className="select">
            <select {...register("category")}>
              <option>selecione uma categoria</option>
              <option value="Alimentação">Alimentação</option>
              <option value="Educação">Educação</option>
              <option value="Saúde">Saúde</option>
            </select>
          </div>
        </InputContainer>
        <RadioGroup
          {...register("frequency")}
          value="a"
          defaultValue={selectedValue}
        >
          <div className="frequency-container">
            <label>frequência:</label>

            <Radio
              id="1"
              type="radio"
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              // name="radio-button"
              // inputProps={{ "aria-label": "A" }}
            />
            <label htmlFor="1">diária</label>

            <Radio
              type="radio"
              id="2"
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              // name="radio-button"
              // inputProps={{ "aria-label": "B" }}
            />
            <label htmlFor="2">semanal</label>
          </div>
        </RadioGroup>
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
        {/* <Button type="submit" variant="contained" color="secondary">
            Salvar
          </Button> */}
        {/* </form> */}
      </Container>
    </ModalContainer>
  );
};

export default ModalHabito;
