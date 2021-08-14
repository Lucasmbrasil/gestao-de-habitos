import {
  Main,
  Container,
  StyledPaper,
  StyledInput,
  Form,
  DivFigure,
  StyledButton,
  Erro,
} from "./styles";
import { ToastContainer, toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import loginFigure from "../../assets/login.svg";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Grid } from "@material-ui/core";
import api from "../../services/api";
import * as yup from "yup";
import React from "react";

const Login = () => {
  const history = useHistory();
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Login incorreto"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Senha incorreta")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{0,}$/,
        "Deve conter Pelo menos uma letra e um número"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleForm = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("token", response.data.access);
        setTimeout(() => history.push("/dashboard"), 500);
      })
      .catch((err) => {
        toast.error("Ops, houve um erro ao tentar se logar!");
        console.log(err);
      });
  };
  return (
    <Main>
      <DivFigure>
        <h1>Procastinare</h1>
        <img src={loginFigure} alt="Login" />
      </DivFigure>
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <StyledPaper>
            <Form>
              <form onSubmit={handleSubmit(handleForm)}>
                <h2>login</h2>
                <StyledInput
                  placeholder="usuário"
                  type="text"
                  {...register("username")}
                />
                <Erro>{errors.username?.message}</Erro>
                <StyledInput
                  placeholder="senha"
                  type="password"
                  {...register("password")}
                />
                <Erro>{errors.password?.message}</Erro>
                <StyledButton type="submit">entrar</StyledButton>
                <p>Ainda não tem uma conta?</p>
                <h5 onClick={() => history.push("/register")}>Clique aqui!</h5>
              </form>
            </Form>
          </StyledPaper>
        </Grid>
        <ToastContainer />
      </Container>
    </Main>
  );
};

export default Login;
