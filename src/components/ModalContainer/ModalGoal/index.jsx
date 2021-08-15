import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import ModalContainer from "..";
import { Title } from "../styles";
import { useState } from "react";

const useStyles = makeStyles({
  box: {
    display: "flex",
    margin: "1rem",
  },
});
const ModalObjetivo = () => {
  const [value, setValue] = useState(2);
  const classes = useStyles();
  return (
    <ModalContainer color="#7986CB">
      <div className="modalObjetivo">
        <Title>novo objetivo:</Title>
        <div className="divLegenda">
          <div className="legenda">
            <label>título</label>
          </div>
          <input className="objetivo-texto" placeholder="titulo do ojetivo" />
        </div>
        <div className={classes.box} component="fieldset" mb={3}>
          <Typography component="legend">nivel de dificuldade:</Typography>
          <Rating
            name="objetivo"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </div>
      </div>
    </ModalContainer>
  );
};

export default ModalObjetivo;
