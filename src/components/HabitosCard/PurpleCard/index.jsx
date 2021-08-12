import { HabitCard } from "./styles";

import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { useState } from "react";

const useStyles = makeStyles({
  box: {
    display: "flex",
  },
});

const PurpleCard = () => {
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
          <div className={classes.box} borderColor="transparent">
            <Typography component="legend">Nivel</Typography>
            <Rating
              name="purple"
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

export default PurpleCard;
