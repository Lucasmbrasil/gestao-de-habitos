import ModalContainer from "..";

const EditUsername = () => {
  return (
    <ModalContainer color="#26A69A">
      <div className="EditUsername">
        <div className="titulo">editar username:</div>
        <div className="input">
          <div className="legenda">
            <label>novo nome</label>
          </div>
          <input className="usuario" placeholder="nome de usuario" />
        </div>
      </div>
    </ModalContainer>
  );
};

export default EditUsername;
