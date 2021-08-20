import { Container, DeleteButton, AddButton, ButtonsContainer } from "./styles";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import { Add } from "@material-ui/icons";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { useState } from "react";
import ModalEditGoal from "../ModalContainer/ModalEditGoal";

const useStyles = makeStyles({
  box: {
    display: "flex",
    margin: "0px",
    alignItems: "center",
  },
});

const GoalCard = ({ goal, handleDeleteGoal }) => {
  const classes = useStyles();
  const [editGoal, setEditGoal] = useState(false);

  return (
    <>
      <Container>
        <div className="filled">
          <BookmarksIcon />
        </div>
        <div className="text">
          <h3 className="title">{goal.title}</h3>
          <div className={classes.box} component="fieldset" mb={3}>
            <span>nível: </span>
            <Rating
              name="red"
              value={Number(goal.difficulty)}
              max={4}
              readOnly
            />
          </div>
        </div>

        <ButtonsContainer>
          <DeleteIcon onClick={() => handleDeleteGoal(goal)} />
          <CreateIcon onClick={() => setEditGoal(true)} />
        </ButtonsContainer>
        {editGoal && <ModalEditGoal goal={goal} setEditGoal={setEditGoal} />}
      </Container>
    </>
  );
};

export default GoalCard;
