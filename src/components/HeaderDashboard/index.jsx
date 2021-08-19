import { GridDiv, Header, Img, Container } from "./styles";
import header from "../../assets/header.svg";

const HeaderDashboard = ({ username }) => {
  //   const user = localStorage.getItem("token").toLowerCase();
  return (
    <GridDiv item>
      <Header elevation={6}>
        <Img src={header} alt="Header" />
        <Container>
          <h1>bom dia, {username}!</h1>
          <p>Frase motivacional</p>
        </Container>
      </Header>
    </GridDiv>
  );
};

export default HeaderDashboard;
