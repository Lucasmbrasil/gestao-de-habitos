import { Container, CardBlue, CardGreen, Icon, Image2, Image3 } from "./styles";
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const CardGroup = ({name, description, category}) => {
  //fazer os ifs para as categorias e deixar um retorno default
  return (
    <>
      <Container color="#7986cb">
        <div className="card_colored-part" />
        <div className="card_content">
            <div className="card_header">
                <Icon><FitnessCenterIcon style={{color: "#1A237E"}}/></Icon>
                <h3>{name}</h3>        
            </div>

            <div className="card_description">
              <p><span>descrição: </span>
              {description}
              </p>
            </div>
        </div>
        <div className="card_colored-part" />
      </Container>
    </>
  );
};

export default CardGroup;
