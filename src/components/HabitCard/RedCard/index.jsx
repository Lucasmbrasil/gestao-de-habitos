import { HabitCardRed } from "./styles";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import HealingIcon from "@material-ui/icons/Healing";
import { Box, CircularProgress } from "@material-ui/core";
import { useState } from "react";
import ModalEditHabit from "../../ModalContainer/ModalEditHabit";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  box: {
    display: "flex",
    margin: "0px",
    alignItems: "center",
  },
});

const RedCard = ({
  habit,
  subHowMuchAchieved,
  addHowMuchAchieved,
  handleDeleteHabit,
}) => {
  const [edit, setEdit] = useState(false);
  const handleCloseEditHabit = () => {
    setEdit(false);
  };
  const [addBadHabit, setAddBadHabit] = useState(false);

  const classes = useStyles();
  return (
    <>
      <HabitCardRed>
        <div className="filled">
          {habit.category === "Saúde" ? <FitnessCenterIcon /> : <HealingIcon />}
        </div>

        <div className="text">
          <h3 className="title">{habit.title}</h3>
          <div className={classes.box} component="fieldset" mb={3}>
            <span>nível: </span>
            <Rating
              name="red"
              value={Number(habit.difficulty)}
              max={4}
              readOnly
            />
          </div>
        </div>
        <div className="text2">
          <div id="buttons">
            <CreateIcon
              onClick={() => {
                setEdit(true);
                habit.category === "NãoSaúde"
                  ? setAddBadHabit(true)
                  : setAddBadHabit(false);
              }}
            />
            <DeleteIcon onClick={() => handleDeleteHabit(habit)} />
          </div>
          <span className="category">saúde</span>
          <span>{habit.frequency.toLowerCase()}</span>
          {edit && (
            <ModalEditHabit
              handleButtonClose={handleCloseEditHabit}
              habit={habit}
              addBadHabit={addBadHabit}
            />
          )}
        </div>

        <div className="filled2">
          {habit.category === "Saúde" ? (
            <div className="filled2">
              <button onClick={() => addHowMuchAchieved(habit)}>+</button>
              <Box position="relative" display="inline-flex">
                <CircularProgress
                  variant="determinate"
                  value={habit.how_much_achieved}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    variant="subtitle2"
                    component="span"
                    color="textSecondary"
                  >
                    {habit.how_much_achieved}
                  </Typography>
                </Box>
              </Box>
            </div>
          ) : (
            <div className="filled2">
              <button onClick={() => subHowMuchAchieved(habit)}>-</button>
              <Box position="relative" display="inline-flex">
                <CircularProgress
                  variant="determinate"
                  value={habit.how_much_achieved}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="textSecondary"
                  >
                    {habit.how_much_achieved}
                  </Typography>
                </Box>
              </Box>
            </div>
          )}
        </div>
      </HabitCardRed>
    </>
  );
};

export default RedCard;
