import ModalContainer from "..";
import { Title } from "../styles";
import { InputContainer } from "../styles";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCreateGroup } from "../../../Providers/CreateGroup";

const ModalGrupo = ({ handleButtonClose, setCreateGroup }) => {
  const { handleCreateGroup } = useCreateGroup();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    category: yup.string().min(1, "Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <ModalContainer
      color="#00BCD4"
      onSubmit={handleSubmit(handleCreateGroup)}
      handleButtonClose={handleButtonClose}
    >
      <Container>
        <Title>novo grupo:</Title>
        <InputContainer>
          <div>
            <label>título</label>
          </div>
          <input placeholder="nome do grupo" {...register("name")} />
          <p>{errors.category?.message}</p>
        </InputContainer>
        <InputContainer>
          <div>
            <label>descrição</label>
          </div>
          <input
            placeholder="descreva um pouco sobre o grupo aqui"
            {...register("description")}
          />
          <p>{errors.category?.message}</p>
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
              <option value="Alimentação">Alimentação</option>
              <option value="Estudo">Educação</option>
              <option value="Saúde">Saúde</option>
            </select>
            <p>{errors.category?.message}</p>
          </div>
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

export default ModalGrupo;
