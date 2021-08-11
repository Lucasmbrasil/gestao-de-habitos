import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { Button, TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";

const FormRegister = () => {
  const [welcome, setWelcome] = useState(false);
  const [message, setMessage] = useState("");
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const handleForm = (data) => {
    const newData = {
      username: data.username,
      password: data.password,
      email: data.email,
    };
    api
      .post("/users/", newData)
      .then((response) => {
        setWelcome(true);
        setMessage(
          `Bem-vindo ${data.username}! Acesse a nossa página de login e crie novos hábitos!`
        );
      })
      .catch((e) => setMessage(`Usuário já cadastrado`));
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <h2>Cadastre-se para criar novos hábitos!</h2>

      <div>
        <TextField
          label="Username"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
      </div>
      <div>
        <TextField
          label="E-mail"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
      </div>
      <div>
        <TextField
          label="Senha"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("password")}
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
        />
      </div>

      <div>
        <TextField
          label="Confirme a senha"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          {...register("confirmPassword")}
          type="password"
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        endIcon={<SendIcon></SendIcon>}
      >
        Registrar
      </Button>
      <div>{welcome && message}</div>
    </form>
  );
};
export default FormRegister;
