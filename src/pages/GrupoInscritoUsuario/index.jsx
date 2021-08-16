import MenuSide from "../../components/MenuSide";
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
const GrupoUsuarioInscrito = () => {
  return (
    <>
      <Container>
        <MenuSide />
        <Main>
          <ContentDiv>
            <Banner>
              <IconImage>{/*futuru icone ou imagem aqui*/}</IconImage>
              <GroupText>
                <div>nome do grupo</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate eligendi dolore eveniet doloremque officia nemo
                  ipsam accusantium natus autem recusandae veritatis nihil
                  dolorum qui eius assumenda doloribus magnam, neque quis.
                </p>
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
export default GrupoUsuarioInscrito;
