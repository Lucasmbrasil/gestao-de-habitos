import { Button } from "@material-ui/core"
import { Container } from "./styles"
const ModalContainer = ({handleButton, color, children}) => {
    return (
        <Container color={color}>
            <div className="div colored_part superior" color={color}>
                <span onClick="">X</span>
            </div>
            <div className="div middle">
                { children }
            </div>
            <div color={color} className="div colored_part inferior">
                <Button onClick={handleButton} variant="contained" color="secondary">
                    Salvar
                </Button>
            </div>
        </Container>
    )
}
export default ModalContainer;