import { Button } from "@material-ui/core";
import BlueCard from "../../components/HabitosCard/BlueCard";
import PastelCard from "../../components/HabitosCard/PastelCard";
import RedCard from "../../components/HabitosCard/RedCard";
import { useHabitList } from "../../Providers/HabitsList";
import { Habits, HabitsContainer, MainContainer, TextHabits } from "./styles";

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
            <Button variant="contained">criar novo</Button>
          </TextHabits>
          {habits.map((habit) =>
            habit.category === "Saúde" ? (
              <RedCard habit={habit} key={habit.id} />
            ) : habit.category === "Estudo" ? (
              <BlueCard habit={habit} key={habit.id} />
            ) : (
              <PastelCard habit={habit} key={habit.id} />
            )
          )}
        </Habits>
        <Habits>
          <h3>hábitos para eliminar</h3>
        </Habits>
      </HabitsContainer>
    </MainContainer>
  );
};
export default Dashboard;
