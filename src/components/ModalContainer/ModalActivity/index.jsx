import ModalContainer from "..";
import { Title } from "../styles";
import { InputContainer } from "../styles";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useCreateActivity } from "../../../Providers/CreateActivity";
import { useSpecificGroup } from "../../../Providers/SpecificGroup";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { useGetGroupActivities } from "../../../Providers/GetGroupActivities";

const ModalAtividade = ({
  handleButtonCloseActivities,
  setCreateActivities,
}) => {
  // const { handleCreateActivities } = useCreateActivity();
  const { specificGroup } = useSpecificGroup();
  const { handleActivities } = useGetGroupActivities();

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleCreateActivities = (data) => {
    console.log(specificGroup.id);
    const getToken = window.localStorage.getItem("token");
    const newData = {
      title: data.title,
      realization_time: `${data.realization_time}T23:59:59Z`,
      group: Number(specificGroup.id),
    };
    console.log(newData);
    api
      .post(`/activities/`, newData, {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((response) =>
        toast.success("Atividade criada com sucesso!", {
          onClose: () => {
            handleActivities();
            setCreateActivities(false);
          },
        })
      )
      .catch((e) => console.log(e));
  };
  return (
    <ModalContainer
      color="#8BC34A"
      onSubmit={handleSubmit(handleCreateActivities)}
      handleButtonClose={handleButtonCloseActivities}
    >
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
