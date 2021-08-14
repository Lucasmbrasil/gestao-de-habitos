import BlueCard from "../../components/HabitosCard/BlueCard";
import PastelCard from "../../components/HabitosCard/PastelCard";
import RedCard from "../../components/HabitosCard/RedCard";
import { useHabitList } from "../../Providers/HabitsList";
import {
  Habits,
  HabitsContainer,
  MainContainer,
  StyledButton,
  StyledPinkButton,
  TextHabits,
} from "./styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const Dashboard = () => {
  const { handleLog, handleList, habits } = useHabitList();
  console.log(habits);
  return (
    <MainContainer>
      <button onClick={() => handleLog()}>Log</button>
      <button onClick={() => handleList()}>List</button>
      <HabitsContainer>
        <h2>meus hábitos</h2>
        <Habits>
          <TextHabits>
            <p>hábitos para praticar</p>{" "}
            <StyledButton
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
            >
              criar novo
            </StyledButton>
          </TextHabits>
          {habits.map((habit) =>
            habit.category === "Saúde" ? (
              <RedCard habit={habit} key={habit.id} />
            ) : habit.category === "Estudo" ? (
              <BlueCard habit={habit} key={habit.id} />
            ) : (
              habit.category === "Alimentação" && (
                <PastelCard habit={habit} key={habit.id} />
              )
            )
          )}
        </Habits>
        <Habits>
          <TextHabits>
            <p>hábitos para eliminar</p>
            <StyledPinkButton
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
            >
              criar novo
            </StyledPinkButton>
          </TextHabits>
          {habits.map((habit) =>
            habit.category === "NãoSaúde" ? (
              <RedCard habit={habit} key={habit.id} />
            ) : habit.category === "NãoEstudo" ? (
              <BlueCard habit={habit} key={habit.id} />
            ) : (
              habit.category === "NãoAlimentação" && (
                <PastelCard habit={habit} key={habit.id} />
              )
            )
          )}
        </Habits>
      </HabitsContainer>
    </MainContainer>
  );
};
export default Dashboard;
