import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";
import {
  ButtonStyled,
  ContainerLeft,
  Form,
  FormContainer,
  InputStyled,
} from "./styles";
// import { Input } from "@material-ui/core";

const FormRegister = () => {
  const [welcome, setWelcome] = useState(false);
  const [message, setMessage] = useState("");

  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo de 6 caractéres"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Mínimo de 8 caracteres")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{0,}$/,
        "Deve conter Pelo menos uma letra e um número"
      ),
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
      <ContainerLeft>
        <FormContainer>
          <Form>
            <h2>cadastro</h2>
            <div>
              <InputStyled
                fullWidth
                placeholder="Nome de usuário *"
                // inputProps={{ minLength: 6 }}
                {...register("username")}
                // error={!!errors.username}
                // helperText={errors.username?.message}
              />
              <p>{errors.username?.message}</p>
            </div>
            <div>
              <InputStyled
                fullWidth
                placeholder="E-mail *"
                {...register("email")}
                // error={!!errors.email}
                // helperText={errors.email?.message}
              />
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <InputStyled
                fullWidth
                placeholder="Senha *"
                inputProps={{ minLength: 8, type: "password" }}
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </div>

            <div>
              <InputStyled
                fullWidth
                placeholder="Confirme a senha *"
                {...register("confirmPassword")}
                type="password"
                // error={!!errors.confirmPassword}
                // helpertext={errors.confirmPassword?.message}
              />
              <p>{errors.confirmPassword?.message}</p>
            </div>
            <ButtonStyled
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              // endIcon={<SendIcon></SendIcon>}
            >
              Criar conta
            </ButtonStyled>
            <div>{welcome && message}</div>
          </Form>
        </FormContainer>
      </ContainerLeft>
    </form>
  );
};
export default FormRegister;
