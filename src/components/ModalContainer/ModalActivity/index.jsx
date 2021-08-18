import ModalContainer from "..";
import { Title } from "../styles";
import { InputContainer } from "../styles";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateActivity } from "../../../Providers/CreateActivity";

const ModalAtividade = ({
  handleButtonCloseActivities,
  setCreateActivities,
}) => {
  const { handleCreateActivities } = useCreateActivity();

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <ModalContainer
      color="#8BC34A"
      onSubmit={handleSubmit(handleCreateActivities(setCreateActivities))}
      handleButtonClose={handleButtonCloseActivities}
    >
      <Container>
        <Title>nova atividade:</Title>
        <InputContainer>
          <div>
            <label>título</label>
          </div>
          <input placeholder="nome da atividade" {...register("title")} />
          <p>{errors.title?.message}</p>
        </InputContainer>
        <InputContainer>
          <div className="legenda">
            <label>data limite</label>
          </div>
          <div className="campo-data">
            <input type="date" {...register("realization_time")} />
          </div>
          <p>{errors.realization_time?.message}</p>
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

export default ModalAtividade;
