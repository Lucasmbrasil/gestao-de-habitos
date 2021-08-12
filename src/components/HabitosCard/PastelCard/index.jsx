import { HabitCard } from "./styles";

import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { useState } from "react";

const useStyles = makeStyles({
  box1: {
    display: "flex",
    margin: "0px",
  },
});

const PastelCard = () => {
  const [value, setValue] = useState(2);
  const classes = useStyles();
  return (
    <>
      <HabitCard>
        <div className="filled">
          <div />
        </div>
        <div className="text">
          <div>titulo</div>
          <div>Descrição</div>
          <div
            className={classes.box1}
            component="fieldset"
            mb={3}
            borderColor="transparent"
          >
            <Typography component="legend">Nivel</Typography>
            <Rating
              name="pastel"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </div>
        <div className="text2">
          <div className="pen">
            <CreateOutlinedIcon />
          </div>
          <button className="btn">Categoria</button>
          <div>Frenquencia:</div>
        </div>

        <div className="filled2">
          <button className="plus">+</button>
          <button className="minus">-</button>
        </div>
      </HabitCard>
    </>
  );
};

export default PastelCard;
