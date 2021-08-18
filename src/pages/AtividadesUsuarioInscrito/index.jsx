import MenuSide from "../../components/MenuSide";

import MenuFooter from "../../components/MenuFooter";
import {
  Main,
  Container,
  ContentDiv,
  ContentContainer,
  TextDiv,
  ActivitiesContainer,
} from "./styles";
const ActivitiesSubs = () => {
  return (
    <>
      <Container>
        <header className="header">procrastinare</header>
        <MenuSide />
        <Main>
          <div className="MiniBanner">
            <div className="image">{/*icone ou imagem*/}</div>
            <div className="GroupName">nome do grupo</div>
          </div>
          <div className="Activities">
            atividades ativas do grupo{/*componente button aqui*/}
          </div>

          <div className="ContainerContent">
            <div className="whitebox"></div>
          </div>
          <MenuFooter />
          <ContentDiv>
            <ContentContainer>
              <TextDiv>
                <div>atividades ativas do grupo</div>
                <p>edite, crie e pratique em equipe</p>
              </TextDiv>
              <ActivitiesContainer>
                <div className="whitebox">
                  <div className="grayBox">
                    <div className="test">card aqui</div>
                    <div className="test">card aqui</div>
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
export default ActivitiesSubs;
