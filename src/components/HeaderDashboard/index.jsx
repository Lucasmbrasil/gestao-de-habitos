import { GridDiv, Header, Img, Container } from "./styles";
import header from "../../assets/header.svg";

const HeaderDashboard = ({ username }) => {
  //   const user = localStorage.getItem("token").toLowerCase();
  const phrase = [
    "A persistência é o caminho do êxito.",
    "No meio da dificuldade encontra-se a oportunidade.",
    "Imagine uma nova história para sua vida e acredite nela.",
    "A verdadeira motivação não é aquilo que te anima, mas aquilo que te transforma...",
    "Cada momento de busca também é um momento de encontro",
    "The sun will rise and we'll try again.",
    "Esteja aqui e agora"
  ];

  function randomNumber() {
    return Math.floor(Math.random() * (phrase.length));
  }

  return (
    <GridDiv item>
      <Header elevation={6}>
        <Img src={header} alt="Header" />
        <Container>
          <h1>bom dia,  <span>{username}</span>!</h1>
          <p>"{phrase[randomNumber()]}"</p>
        </Container>
      </Header>
    </GridDiv>
  );
};

export default HeaderDashboard;
