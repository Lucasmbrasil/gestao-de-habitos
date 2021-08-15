import Button from "@material-ui/core/Button";
import { Container } from "./styles";
import { Title } from "../styles";

const ModalDelete = () => {

  return (
    <Container>
      <div className="div colored_part superior"></div>
      <div className="div middle">
        <Title>tem certeza que deseja apagar?</Title>
        <div>
          <Button variant="contained">Cancelar</Button>
          <Button variant="contained" color="secondary">
            Apagar
          </Button>
        </div>
      </div>
      <div className="div colored_part inferior"></div>
    </Container>
  );
};

export default ModalDelete;
