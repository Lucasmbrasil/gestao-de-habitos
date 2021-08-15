import ModalContainer from "..";

const EditAtividade = () => {
  return (
    <ModalContainer color="#8BC34A">
      <div className="modalAtividade">
        <div className="titulo">editar atividade:</div>
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
