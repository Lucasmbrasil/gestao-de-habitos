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
import { RadioGroup } from "@material-ui/core";
import api from "../../../services/api";
import { useHabitList } from "../../../Providers/HabitsList";
const labels = {
  1: "Fácil",
  2: "Normal",
  3: "Difícil",
  4: "Muito Difícil",
};

const ModalHabito = ({ handleButtonClose, addBadHabit, userID, getToken }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);
  const { handleList } = useHabitList();

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().min(1, "Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
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
    const newData = {
      title: data.title,
      category: data.category,
      difficulty: Number(data.difficulty),
      frequency: data.frequency,
      achieved: false,
      how_much_achieved: Number(0),
      user: Number(userID),
    };
    api
      .post("/habits/", newData, {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((res) => handleList())
      .catch((e) => console.log(e));
  };

  return (
    <ModalContainer
      color="#aed4b0"
      onSubmit={handleSubmit(handleAdd)}
      handleButtonClose={handleButtonClose}
    >
      <Container>
        <Title>novo hábito:</Title>
        <InputContainer>
          <div>
            <label>título</label>
          </div>
          <input type="text" placeholder="nome do hábito" {...register("title")} />
          <p>{errors.title?.message}</p>
        </InputContainer>
        <InputContainer>
          <div>
            <label>categoria</label>
          </div>
          <div className="select">
            <select {...register("category")} defaultValue="">
              <option disabled value="">
                selecione uma categoria
              </option>
              <option value={addBadHabit ? "NãoAlimentação" : "Alimentação"}>
                Alimentação
              </option>
              <option value={addBadHabit ? "NãoEstudo" : "Estudo"}>
                Educação
              </option>
              <option value={addBadHabit ? "NãoSaúde" : "Saúde"}>Saúde</option>
            </select>
            <p>{errors.category?.message}</p>
          </div>
        </InputContainer>
        <RadioGroup className="frequency-container" {...register("frequency")}>
          {/* <div className="frequency-container"> */}
          <label>frequência:</label>

          <Radio
            id="1"
            type="radio"
            checked={selectedValue === "Diária"}
            onChange={handleChange}
            value="Diária"
          />
          <label htmlFor="1">diária</label>

          <Radio
            type="radio"
            id="2"
            checked={selectedValue === "Semanal"}
            onChange={handleChange}
            value="Semanal"
          />
          <label htmlFor="2">semanal</label>
          {/* </div> */}
          <p>{errors.frequency?.message}</p>
        </RadioGroup>

        <InputContainer>
          <div className="rating">
            <label>nível de dificuldade:</label>
            <Rating
              defaultValue={0}
              max={4}
              name="habito"
              {...register("difficulty")}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && (
              <p ml={2}>{labels[hover !== -1 ? hover : value]}</p>
            )}
          </div>
          <p>{errors.difficulty?.message}</p>
        </InputContainer>
      </Container>
    </ModalContainer>
  );
};

export default ModalHabito;
