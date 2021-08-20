import ModalContainer from "..";
import { Title } from "../styles";
import { InputContainer } from "../styles";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useGetUsername } from "../../../Providers/GetUsername";

const ModalEditUsername = ({ setEditUsername }) => {
  const { getUsername } = useGetUsername();
  const getToken = window.localStorage.getItem("token");
  const decodeToken = jwt_decode(getToken);
  const userID = decodeToken.user_id;
  const handleEditUsername = (data) => {
    api
      .patch(`/users/${userID}/`, data, {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((response) => {
        toast.success("username atualizado com sucesso!", {
          onClose: () => {
            setEditUsername(false);
            getUsername();
          },
        });
      })
      .catch((e) => console.log(e));
  };
  const handleCloseEditUsername = () => {
    setEditUsername(false);
  };
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <ModalContainer
      color="#26A69A"
      onSubmit={handleSubmit(handleEditUsername)}
      handleButtonClose={handleCloseEditUsername}
    >
      <Container>
        <Title>editar username:</Title>
        <InputContainer>
          <div>
            <label>novo username</label>
          </div>
          <input
            type="text"
            placeholder="nome de usuário"
            {...register("username")}
          />

          <p>{errors.username?.message}</p>
        </InputContainer>
      </Container>
    </ModalContainer>
  );
};

export default ModalEditUsername;
