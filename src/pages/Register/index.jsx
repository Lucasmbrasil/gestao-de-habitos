import FormRegister from "../../components/FormRegister";
import { ContainerRight } from "./styles";
import { RegisterContainer } from "./styles";
import registerImage from "../../assets/register.png";

const Register = () => {
  return (
    <RegisterContainer>
      <FormRegister />
      <ContainerRight>
        <h1>procrastinare</h1>
        <img src={registerImage} alt="registerImage" />
      </ContainerRight>
    </RegisterContainer>
  );
};
export default Register;
