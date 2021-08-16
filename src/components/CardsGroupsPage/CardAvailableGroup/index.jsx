import { Container, Icon } from "./styles";

import ControlPointIcon from "@material-ui/icons/ControlPoint";

const CardAvailableGroup = ({name, description, category}) => {
  return (
      <Container color="#E57373">
      <div className="card_colored-part" />
        <div className="card_content">

          <div className="card_header">
              <Icon></Icon>
              <div className="group">
                  <h3>{name}</h3>
                  <span>{category}</span>
              </div>
          </div>

          <div className="card_description">
              <p><span>descrição: </span>
              {description}
              </p>
          </div>

          <div className="card_actions">
            <button>
                <ControlPointIcon />
                <span>inscrever</span>
            </button>
            <span className="seeMore">ver mais</span>
          </div>

        </div>
        <div className="card_colored-part" />
      </Container>   
  );
};

export default CardAvailableGroup;
