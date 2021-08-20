import FormRegister from "../../components/FormRegister";
import { ContainerRight } from "./styles";
import { RegisterContainer } from "./styles";
import registerImage from "../../assets/register.png";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  if (localStorage.length !== 0) {
    history.push("/dashboard");
  }
  return (
    <RegisterContainer>
      <FormRegister />
      <ContainerRight>
        <h1>Procrastinare</h1>
        <img src={registerImage} alt="registerImage" />
      </ContainerRight>
    </RegisterContainer>
  );
};
export default Register;
