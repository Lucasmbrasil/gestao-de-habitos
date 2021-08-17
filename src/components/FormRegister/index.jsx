import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import {
  ButtonStyled,
  ContainerLeft,
  Form,
  FormContainer,
  InputStyled,
  StyledCircularProgress,
} from "./styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const FormRegister = () => {
  const history = useHistory();
  const [disable, setDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    const newData = {
      username: data.username,
      password: data.password,
      email: data.email,
    };

    api
      .post("/users/", newData)
      .then((response) => {
        toast.success("Cadastro realizado! Pronto para criar novos hábitos?", {
          onClose: () => {
            api
              .post("/sessions/", newData)
              .then((response) => {
                localStorage.clear();
                localStorage.setItem("token", response.data.access);
                history.push("/dashboard");
              })
              .catch((err) => {
                console.log(err);
              });
          },
          onOpen: () => {
            setDisable(true);
          },
        });
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Ops, houve um erro ao tentar se cadastrar!");
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleForm)}>
      <ContainerLeft>
        <FormContainer>
          <Form>
            <h2>cadastro</h2>
            <div>
              <InputStyled
                disabled={disable ? true : false}
                fullWidth
                placeholder="Nome de usuário *"
                {...register("username")}
              />
              <p>{errors.username?.message}</p>
            </div>
            <div>
              <InputStyled
                disabled={disable ? true : false}
                fullWidth
                placeholder="E-mail *"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <InputStyled
                disabled={disable ? true : false}
                fullWidth
                placeholder="Senha *"
                type="password"
                {...register("password")}
              />
              <p>{errors.password?.message}</p>
            </div>

            <div>
              <InputStyled
                disabled={disable ? true : false}
                fullWidth
                placeholder="Confirme a senha *"
                {...register("confirmPassword")}
                type="password"
              />
              <p>{errors.confirmPassword?.message}</p>
            </div>
            <ButtonStyled fullWidth type="submit" variant="contained">
              Criar conta
            </ButtonStyled>
            {isLoading && <StyledCircularProgress />}

            <ToastContainer className="toast" autoClose={3500} />
            <div>Já tem uma conta? </div>
            <h5 onClick={() => history.push("/login")}>Clique aqui!</h5>
          </Form>
        </FormContainer>
      </ContainerLeft>
    </form>
  );
};
export default FormRegister;
