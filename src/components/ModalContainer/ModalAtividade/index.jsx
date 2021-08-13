import TodayRoundedIcon from "@material-ui/icons/TodayRounded";

const ModalAtividade = () => {
  return (
    <>
      <div className="modalAtividade">
        <div className="titulo">nova atividade:</div>
        <div className="input">
          <div className="legenda">
            <label>título</label>
          </div>
          <input className="Atividade" placeholder="nome da atividade" />
        </div>
        <div className="date">
          <div className="legenda">
            <label>Data limite</label>
          </div>
          <div className="campo-data">
            <input placeholder="20/10/2021" style={{ border: "none" }} />
            <TodayRoundedIcon style={{ color: "#424242", opacity: "42%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAtividade;
