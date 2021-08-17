import { HabitCardBlue } from "./styles";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { Box, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    display: "flex",
    margin: "0px",
  },
});

const BlueCard = ({ habit, subHowMuchAchieved, addHowMuchAchieved }) => {
  const classes = useStyles();
  return (
    <>
      <HabitCardBlue>
        <div className="filled">
          {habit.category === "Estudo" ? (
            <MenuBookIcon />
          ) : (
            <SportsEsportsIcon />
          )}
        </div>
        <div className="text">
          <div className="title">{habit.title}</div>
          <div>descrição</div>
          <div className={classes.box} component="fieldset" mb={3}>
            <Typography component="legend">nivel</Typography>
            <Rating
              name="blue"
              value={Number(habit.difficulty)}
              max={4}
              readOnly
            />
          </div>
        </div>
        <div className="text2">
          <div className="pen">
            <CreateOutlinedIcon />
          </div>
          <div className="category">categoria: Estudo </div>
          <div>frenquência: {habit.frequency}</div>
        </div>

        <div className="filled2">
          {habit.category === "Estudo" ? (
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
                    variant="caption"
                    component="div"
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
      </HabitCardBlue>
    </>
  );
};

export default BlueCard;
