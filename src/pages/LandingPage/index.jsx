import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import CopyrightIcon from "@material-ui/icons/Copyright";
import img1 from "../../assets/LandingPage1.svg";
import img2 from "../../assets/LandingPage2.svg";
import img31 from "../../assets/LandingPage3-1.svg";
import img32 from "../../assets/LandingPage3-2.svg";
import img33 from "../../assets/LandingPage3-3.svg";
import img4 from "../../assets/LandingPage4.svg";
import buttonLandingPage from "../../assets/ButtonLandingPage.svg";
import {
  Main,
  Header,
  TopContainer,
  TopMidContainer,
  LastMidContainer,
  LastContainer,
  Footer,
} from "./styles.jsx";
import { useHistory, Redirect } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();

  return (
    <Main>
      <Header>
        <h1>Procrastinare</h1>
        <AccountCircleOutlinedIcon onClick={() => history.push("/login")} />
      </Header>
      <TopContainer>
        <div className="content-box">
          <div className="title">
            <h1>procrastinare</h1>
            <h4>uma nova forma de criar hábitos</h4>
          </div>
          <img
            className="start-button"
            src={buttonLandingPage}
            alt="Começar"
            onClick={() => history.push("/register")}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="image-box">
          <img src={img1} alt="Início" />
        </div>
      </TopContainer>
      <TopMidContainer>
        <div className="content-box">
          <h2>
            <span>inicie pelo</span> simples
          </h2>
          <img src={img2} alt="Novos hábitos" />
        </div>
        <div className="content-box">
          <p>
            <strong>motivação</strong> é o que te faz começar,{" "}
            <strong>hábito</strong> é o que te faz continuar.
          </p>
          <p>
            alcance suas metas com o <strong>procrastinare</strong>
          </p>
        </div>
      </TopMidContainer>
      <LastMidContainer>
        <div className="content-box-groups">
          <div className="groups">
            <h3>
              crie hábitos para <strong>praticar</strong>, e hábitos para{" "}
              <strong>eliminar</strong>
            </h3>
            <img src={img31} alt="Grupos" />
          </div>
          <div className="groups">
            <h3>
              encontre grupos, conheça pessoas com o mesmo{" "}
              <strong>objetivo</strong>
            </h3>
            <img src={img32} alt="Grupos" />
          </div>
          <div className="groups">
            <h3>
              <strong>motive-se</strong> a conquistar os objetivos
            </h3>
            <img src={img33} alt="Grupos" />
          </div>
        </div>
      </LastMidContainer>
      <LastContainer>
        <div className="last-box">
          <img src={img4} alt="Começar" />
        </div>
      </LastContainer>
      <Footer>
        <CopyrightIcon />
        <p>copyright</p>
      </Footer>
    </Main>
  );
};

export default LandingPage;
