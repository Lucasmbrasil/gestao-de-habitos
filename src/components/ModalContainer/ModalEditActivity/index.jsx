import ModalContainer from "..";
import { Title } from "../styles";
import { Container } from "./styles";
import { InputContainer } from "../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { useGetGroupActivities } from "../../../Providers/GetGroupActivities";

const ModalEditActivity = ({ setEditActivity, activity }) => {
  const { handleActivities } = useGetGroupActivities();

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });
  console.log(activity.id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleButtonCloseEditActivities = () => {
    setEditActivity(false);
  };
  const handleEditActivities = (data) => {
    const getToken = window.localStorage.getItem("token");
    const newData = {
      title: data.title,
      realization_time: `${data.realization_time}T23:59:59Z`,
    };
    api
      .patch(`/activities/${activity.id}/`, newData, {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((response) =>
        toast.success("Atividade editada com sucesso!", {
          onClose: () => {
            handleActivities();
            setEditActivity(false);
          },
        })
      )
      .catch((e) => console.log(e));
  };

  return (
    <ModalContainer
      color="#8BC34A"
      onSubmit={handleSubmit(handleEditActivities)}
      handleButtonClose={handleButtonCloseEditActivities}
    >
      <Container>
        <Title>editar atividade:</Title>
        <InputContainer>
          <div>
            <label>novo título</label>
          </div>
          <input
            type="text"
            placeholder="nome da atividade"
            {...register("title")}
          />
          <p>{errors.title?.message}</p>
        </InputContainer>
        <InputContainer>
          <div className="legenda">
            <label>nova data limite</label>
          </div>
          <div className="campo-data">
            <input type="date" {...register("realization_time")} />
          </div>
          <p>{errors.realization_time?.message}</p>
        </InputContainer>
      </Container>
    </ModalContainer>
  );
};

export default ModalEditActivity;

// const schema = yup.object().shape({
//   title: yup.string().required("Campo obrigatório"),
//   realization_time: yup.string().required("Campo obrigatório"),
// });

// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm({ resolver: yupResolver(schema) });

// const handleCreateActivities = (data) => {
//   const getToken = window.localStorage.getItem("token");
//   const newData = {
//     title: data.title,
//     realization_time: `${data.realization_time}T23:59:59Z`,
//     group: Number(specificGroup.id),
//   };
//   console.log(newData);
//   api
//     .post(`/activities/`, newData, {
//       headers: { Authorization: `Bearer ${getToken}` },
//     })
//     .then((response) =>
//       toast.success("Atividade criada com sucesso!", {
//         onClose: () => {
//           handleActivities();
//           setCreateActivities(false);
//         },
//       })
//     )
//     .catch((e) => console.log(e));
// };
// return (
//   <ModalContainer
//     color="#8BC34A"
//     onSubmit={handleSubmit(handleCreateActivities)}
//     handleButtonClose={handleButtonCloseActivities}
//   >
//     <Container>
//       <Title>nova atividade:</Title>
//       <InputContainer>
//         <div>
//           <label>título</label>
//         </div>
//         <input
//           type="text"
//           placeholder="nome da atividade"
//           {...register("title")}
//         />
//       </InputContainer>
//       <InputContainer>
//         <div className="legenda">
//           <label>data limite</label>
//         </div>
//         <div className="campo-data">
//           <input type="date" {...register("realization_time")} />
//         </div>
//         <p>{errors.realization_time?.message}</p>
//       </InputContainer>
//     </Container>
//   </ModalContainer>
// );
// };

// export default ModalAtividade;
