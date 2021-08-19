import { Container, Icon } from "./styles";
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople'; 

const CardGroup = ({name, description, category, handleSpecificGroup, id, pointer = false}) => {
  
  if(category === "Saúde"){
    return (
      <Container pointer={pointer} color="#E57373" onClick={handleSpecificGroup ? () => handleSpecificGroup(id) : () => false}>
        <div className="card_colored-part" />
        <div className="card_content">
            <div className="card_header">
                <Icon><FitnessCenterIcon style={{color: "#802727"}}/></Icon>
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
    )
  }

  if(category === "Alimentação"){
    return (
      <Container pointer={pointer} color="#7986cb" onClick={handleSpecificGroup ? () => handleSpecificGroup(id) : () => false}>
        <div className="card_colored-part" />
        <div className="card_content">
            <div className="card_header">
                <Icon><FastfoodIcon style={{color: "#1A237E"}}/></Icon>
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
    )
  }

  if(category === "Estudo"){
    return (
      <Container pointer={pointer} color="#81C784" onClick={handleSpecificGroup ? () => handleSpecificGroup(id) : () => false}>
        <div className="card_colored-part" />
        <div className="card_content">
            <div className="card_header">
                <Icon><MenuBookIcon style={{color: "#275a29"}}/></Icon>
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
    )
  }
  return (
    <>
      <Container pointer={pointer} color="#26A69A" onClick={handleSpecificGroup ? () => handleSpecificGroup(id) : () => false}>
        <div className="card_colored-part" />
        <div className="card_content">
            <div className="card_header">
                <Icon><NaturePeopleIcon style={{color: "#26A69A"}}/></Icon>
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
