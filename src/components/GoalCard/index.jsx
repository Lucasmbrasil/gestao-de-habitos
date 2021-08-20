import { Container, DeleteButton, AddButton, ButtonsContainer } from "./styles";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'; 
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import DeleteIcon from "@material-ui/icons/Delete"; 
const useStyles = makeStyles({
  box: {
    display: "flex",
    margin: "0px",
    alignItems: "center",
  },
});

const GoalCard = ({ goal, handleDeleteGoal }) => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <div className="filled">
          <BookmarksIcon/>
        </div>
        <div className="text">
          <h3 className="title">{goal.title}</h3>
          <div className={classes.box} component="fieldset" mb={3}>
            <span>nível: </span>
            <Rating
              name="red"
              value={Number(goal.difficulty)}
              max={4}
              readOnlygoal
            />
          </div>
        </div>

        <ButtonsContainer>
            <DeleteIcon onClick={() => handleDeleteGoal(goal)} /> 
            {/* <AddButton onClick={() => addHowMuchAchieved(goal)}><Add /></AddButton>             */}
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default GoalCard;
