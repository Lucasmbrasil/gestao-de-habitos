import { HabitCardBlue } from "./styles";

import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { useState } from "react";

const useStyles = makeStyles({
  box: {
    display: "flex",
    margin: "0px",
  },
});

const BlueCard = ({ habit }) => {
  const [value, setValue] = useState(2);
  const classes = useStyles();
  return (
    <>
      <HabitCardBlue>
        <div className="filled">
          <div />
        </div>
        <div className="text">
          <div className="title">{habit.title}</div>
          <div>descrição</div>
          <div className={classes.box} component="fieldset" mb={3}>
            <Typography component="legend">nivel</Typography>
            <Rating
              name="blue"
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
          <div className="category">categoria: {habit.category}</div>
          <div>frenquencia: {habit.frequency}</div>
        </div>

        <div className="filled2">
          <button>+</button>
          <button>-</button>
        </div>
      </HabitCardBlue>
    </>
  );
};

export default BlueCard;
