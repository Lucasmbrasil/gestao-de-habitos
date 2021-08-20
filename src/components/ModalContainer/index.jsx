import { Button } from "@material-ui/core";
import { Container } from "./styles";
import { motion } from "framer-motion";

const ModalContainer = ({ handleButtonClose, color, children, onSubmit }) => {
  return (
    <motion.div
            initial={{ opacity: .3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
        >
    <Container color={color} onSubmit={onSubmit}>
      <div className="div colored_part superior" color={color}>
        <span onClick={handleButtonClose}>X</span>
      </div>
      <div className="div middle">{children}</div>
      <div color={color} className="div colored_part inferior">
        <Button type="submit" variant="contained" color="secondary">
          Salvar
        </Button>
      </div>
    </Container>
    </motion.div>
  );
};
export default ModalContainer;
