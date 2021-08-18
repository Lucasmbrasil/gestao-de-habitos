import { HabitCardRed } from "./styles";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import HealingIcon from "@material-ui/icons/Healing";
import { Box, CircularProgress } from "@material-ui/core";
import BlueCard from "./BlueCard";
import RedCard from "./RedCard";
import PastelCard from "./PastelCard";

const useStyles = makeStyles({
  box: {
    display: "flex",
    margin: "0px",
    alignItems: "center",
  },
});

const HabitCard = ({ habit, subHowMuchAchieved, addHowMuchAchieved, handleDeleteHabit }) => {
  const classes = useStyles();

  if(habit.category === "Saúde"){
   return (
     <RedCard habit={habit} addHowMuchAchieved={addHowMuchAchieved} handleDeleteHabit={handleDeleteHabit}></RedCard>
   )
  }

  if(habit.category === "NãoSaúde"){
    return (
      <RedCard habit={habit} subHowMuchAchieved={subHowMuchAchieved} handleDeleteHabit={handleDeleteHabit}></RedCard>
    )
   }

   if(habit.category === "Estudo"){
    return (
      <BlueCard habit={habit} subHowMuchAchieved={subHowMuchAchieved} handleDeleteHabit={handleDeleteHabit}></BlueCard>
    )
   }

   if(habit.category === "NãoEstudo"){
    return (
      <BlueCard habit={habit} subHowMuchAchieved={subHowMuchAchieved} handleDeleteHabit={handleDeleteHabit}></BlueCard>
    )
   }

   if(habit.category === "Alimentação"){
    return (
      <PastelCard habit={habit} subHowMuchAchieved={subHowMuchAchieved} handleDeleteHabit={handleDeleteHabit}></PastelCard>
    )
   }

   if(habit.category === "NãoAlimentação"){
    return (
      <PastelCard habit={habit} subHowMuchAchieved={subHowMuchAchieved} handleDeleteHabit={handleDeleteHabit}></PastelCard>
    )
   }
  return (
    <>
      <HabitCardRed>
        <div className="filled">
          <HealingIcon />
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
            <button onClick={() => handleDeleteHabit(habit.id)}>X</button>
            <span className="category">saúde</span>
            <span>{(habit.frequency).toLowerCase()}</span>
        </div>

        <div className="filled2">

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
          
        </div>
      </HabitCardRed>
    </>
  );
};

export default HabitCard;