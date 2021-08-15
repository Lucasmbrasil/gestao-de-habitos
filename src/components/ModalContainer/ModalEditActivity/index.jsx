import ModalContainer from "..";
import { Title } from "../styles";

const EditAtividade = () => {
  return (
    <ModalContainer color="#8BC34A">
      <div className="modalAtividade">
        <Title>editar atividade:</Title>
        <div className="input">
          <div className="legenda">
            <label>novo título</label>
          </div>
          <input className="Atividade" placeholder="nome da atividade" />
        </div>
      </div>
    </ModalContainer>
  );
};

export default EditAtividade;
