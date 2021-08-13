import { HabitCardYellow } from "./styles";
import RestaurantIcon from "@material-ui/icons/Restaurant";

import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { useState } from "react";

const useStyles = makeStyles({
  box1: {
    display: "flex",
    margin: "0px",
  },
});

const PastelCard = ({ habit }) => {
  const [value, setValue] = useState(2);
  const classes = useStyles();
  return (
    <>
      <HabitCardYellow>
        <div className="filled">
          {habit.category === "Alimentação" ? (
            <RestaurantIcon />
          ) : (
            <FastfoodIcon />
          )}
        </div>
        <div className="text">
          <div className="title">{habit.title}</div>
          <div>descrição</div>
          <div className={classes.box1} component="fieldset" mb={3}>
            <Typography component="legend">nivel</Typography>
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
          <div className="category">categoria: Alimentação</div>
          <div>frenquencia: {habit.frequency}</div>
        </div>

        <div className="filled2">
          {habit.category === "Alimentação" ? (
            <button>+</button>
          ) : (
            <button>-</button>
          )}
        </div>
      </HabitCardYellow>
    </>
  );
};

export default PastelCard;
