import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  TextField,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";
import {
  ButtonStyled,
  ContainerLeft,
  Form,
  FormContainer,
  InputStyled,
} from "./styles";
import { Input } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));
const FormRegister = () => {
  const [welcome, setWelcome] = useState(false);
  const [message, setMessage] = useState("");
  const [values, setValues] = useState({ amount: "" });

  const schema = yup.object().shape({
    username: yup.string(),
    email: yup.string().email("Email inválido"),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{0,}$/,
        "Deve conter Pelo menos uma letra e um número"
      ),
    confirmPassword: yup
      .string()
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
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const classes = useStyles();
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
                required
                inputProps={{ minLength: 6 }}
                {...register("username")}
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            </div>
            <div>
              <InputStyled
                fullWidth
                placeholder="E-mail"
                required
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>
            <div>
              <InputStyled
                fullWidth
                placeholder="Senha"
                required
                inputProps={{ minLength: 8, type: "password" }}
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>

            <div>
              <InputStyled
                fullWidth
                placeholder="Confirme a senha"
                {...register("confirmPassword")}
                type="password"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
              />
            </div>
            <ButtonStyled
              fullWidth
              disableElevation="true"
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
