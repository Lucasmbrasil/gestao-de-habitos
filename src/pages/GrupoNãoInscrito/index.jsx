import MenuSide from "../../components/MenuSide";

import MenuFooter from "../../components/MenuFooter";
import {
  Main,
  Container,
  ContentDiv,
  Banner,
  IconImage,
  GroupText,
  ButtonsDIV,
  ContentContainer,
  TextDiv,
  ActivitiesContainer,
} from "./styles";
const GroupsNotsubscribed = () => {
  return (
    <>
      <Container>
        <header className="header">procrastinare</header>
        <MenuSide />
        <Main>
          <div className="MiniBanner">
            <div className="image">{/*icone ou imagem*/}</div>
            nome do grupo
            <button>sair do grupo</button>
          </div>
          <div className="ContainerContent">
            <div className="GroupTitle">Objetivos ativos do grupo</div>
            <div className="whitebox">
              <div className="test">teste</div>
            </div>
          </div>
          <MenuFooter />
          <ContentDiv>
            <Banner>
              <IconImage>{/*futuru icone ou imagem aqui*/}</IconImage>
              <GroupText>
                <div>nome do grupo</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </GroupText>
              <ButtonsDIV>
                <div>teste</div>
                <button>teste</button>
                {/*componentes button ou botões com icones */}
              </ButtonsDIV>
            </Banner>
            <div className="line">
              <div />
            </div>
            <ContentContainer>
              <TextDiv>
                <div>Objetivos ativos do grupo</div>
                <p>edite, crie e pratique em equipe</p>
              </TextDiv>
              <ActivitiesContainer>
                <div className="whitebox">
                  <div className="text">
                    <div>objetivos para conquistas!</div>
                    <button>teste</button>
                    {/*componente button */}
                  </div>
                </div>
                <div className="whitebox">
                  <div className="text">
                    <div>objetivos para Eliminar!</div>
                    <button>teste</button>
                    {/*componente button */}
                  </div>
                </div>
              </ActivitiesContainer>
            </ContentContainer>
          </ContentDiv>
        </Main>
      </Container>
    </>
  );
};
export default GroupsNotsubscribed;
