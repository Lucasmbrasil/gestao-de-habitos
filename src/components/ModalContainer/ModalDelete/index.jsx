import Button from "@material-ui/core/Button";





const ModalDelete = () => {

  return (
    <>
      <div className="modalDelete">
        <h1>Tem certeza que deseja apagar ?</h1>
        <div>
          <Button variant="contained">Cancelar</Button>
          <Button variant="contained" color="secondary">
            Apagar
          </Button>
        </div>
      </div>
    </>
  );
};

export default ModalDelete;
