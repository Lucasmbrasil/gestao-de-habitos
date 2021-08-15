import ModalContainer from "..";

const ModalGrupo = () => {
  return (
    <ModalContainer color="#00BCD4">
      <div className="modalGrupo">
        <div className="titulo">novo Grupo:</div>
        <div className="input">
          <div className="legenda">
            <label>título</label>
          </div>
          <input className="GrupoTexto" placeholder="nome do grupo" />
        </div>
        <div className="input">
          <div className="legenda">
            <label>descrição</label>
          </div>
          <input
            className="desc"
            placeholder="descreva um pouco sobre o grupo aqui"
          />
        </div>
        <div className="input">
          <div className="legenda">
            <label>categoria</label>
          </div>
          <div className="select">
            <select
              style={{
                width: "100%",
                height: "30px",
                borderRadius: "5px",
                paddingLeft: "1rem",
                border: "1px solid #424242",
                backgroundColor: "white",
              }}
            >
              <option className="option">Selecione uma categoria</option>
            </select>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ModalGrupo;
