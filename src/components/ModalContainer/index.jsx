import { Button } from "@material-ui/core";
import { Container } from "./styles";
const ModalContainer = ({ handleButton, color, children, onSubmit }) => {
  return (
    <Container color={color} onSubmit={onSubmit}>
      <div className="div colored_part superior" color={color}>
        <span onClick={handleButton}>X</span>
      </div>
      <div className="div middle">{children}</div>
      <div color={color} className="div colored_part inferior">
        <Button type="submit" variant="contained" color="secondary">
          Salvar
        </Button>
      </div>
    </Container>
  );
};
export default ModalContainer;
