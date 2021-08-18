import Rating from "@material-ui/lab/Rating";
import ModalContainer from "..";
import { Title } from "../styles";
import { useState } from "react";
import { InputContainer } from "../styles";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../../services/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSpecificGroup } from "../../../Providers/SpecificGroup";
import { useGetGroupGoals } from "../../../Providers/GetGroupGoals";
const labels = {
  1: "Fácil",
  2: "Normal",
  3: "Difícil",
  4: "Muito Difícil",
};

const ModalObjetivo = ({ handleButtonClose, setCreateGoal }) => {
  const { specificGroup } = useSpecificGroup();
  const { handleGoal } = useGetGroupGoals();

  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleCreateGoal = (data) => {
    const getToken = window.localStorage.getItem("token");
    const newData = {
      title: data.title,
      difficulty: Number(data.difficulty),
      how_much_achieved: Number(0),
      group: Number(specificGroup.id),
    };

    api
      .post(`/goals/`, newData, {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((response) =>
        toast.success("Objetivo criado com sucesso!", {
          onClose: () => {
            handleGoal();
            setCreateGoal(false);
          },
        })
      )
      .catch((e) => console.log(e));
  };
  return (
    <ModalContainer
      color="#7986CB"
      onSubmit={handleSubmit(handleCreateGoal)}
      handleButtonClose={handleButtonClose}
    >
      <Container>
        <Title>novo objetivo:</Title>
        <InputContainer>
          <div>
            <label>título</label>
          </div>
          <input
            type="text"
            placeholder="título do ojetivo"
            {...register("title")}
          />
          <p>{errors.title?.message}</p>
        </InputContainer>
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
      <ToastContainer
        className="toast"
        autoClose={2000}
        position="top-center"
      />
    </ModalContainer>
  );
};

export default ModalObjetivo;
