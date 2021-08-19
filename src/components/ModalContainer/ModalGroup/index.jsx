import ModalContainer from "..";
import { Title } from "../styles";
import { InputContainer } from "../styles";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateGroup } from "../../../Providers/CreateGroup";
import { toast } from "react-toastify";

const ModalGrupo = ({ handleButtonClose, setCreateGroup }) => {
  const { handleCreateGroup } = useCreateGroup();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    category: yup.string().min(1, "Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
  });
  const onCloseToast = () => {
    toast.success("Grupo criado com sucesso!", {
      onClose: () => {
        setCreateGroup(false);
      },
    });
  };
  const newCreate = (data) => {
    handleCreateGroup(data);
    onCloseToast();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <ModalContainer
      color="#00BCD4"
      onSubmit={handleSubmit(newCreate)}
      handleButtonClose={handleButtonClose}
    >
      <Container>
        <Title>novo grupo:</Title>
        <InputContainer>
          <div>
            <label>título</label>
          </div>
          <input
            type="text"
            placeholder="nome do grupo"
            {...register("name")}
          />
          <p>{errors.category?.message}</p>
        </InputContainer>
        <InputContainer>
          <div>
            <label>descrição</label>
          </div>
          <input
            type="text"
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
    </ModalContainer>
  );
};

export default ModalGrupo;
