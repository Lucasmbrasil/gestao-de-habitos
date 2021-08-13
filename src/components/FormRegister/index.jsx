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
} from "./styles";

const FormRegister = () => {
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
        console.log(response);
      })
      .catch((e) => console.log(e));
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
                {...register("username")}
              />
              <p>{errors.username?.message}</p>
            </div>
            <div>
              <InputStyled
                fullWidth
                placeholder="E-mail *"
                {...register("email")}
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
              />
              <p>{errors.confirmPassword?.message}</p>
            </div>
            <ButtonStyled
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
            >
              Criar conta
            </ButtonStyled>
          </Form>
        </FormContainer>
      </ContainerLeft>
    </form>
  );
};
export default FormRegister;
