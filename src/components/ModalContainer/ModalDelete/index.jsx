import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

const ModalDelete = () => {
  const classes = useStyles();
  return (
    <>
      <div className="modalDelete">
        <h1>Tem certeza que deseja apagar ?</h1>
        <div className={classes.div}>
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
