import BlueCard from "../../components/HabitosCard/BlueCard";
import PastelCard from "../../components/HabitosCard/PastelCard";
import RedCard from "../../components/HabitosCard/RedCard";
import {
  Habits,
  HabitsContainer,
  MainContainer,
  StyledButton,
  StyledPinkButton,
  TextHabits,
} from "./styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import ModalHabito from "../../components/ModalContainer/ModalHabit";
import { useHabitList } from "../../Providers/HabitsList";

const Dashboard = () => {
  const { habits, setHabits } = useHabitList();
  const [addGoodHabit, setAddGoodHabit] = useState(false);
  const [addBadHabit, setAddBadHabit] = useState(false);

  const handleList = useCallback(() => {
    const token = window.localStorage.getItem("token");
    api
      .get(`/habits/personal/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data))
      .catch((e) => console.log(e));
  }, []);

  const handleButtonCloseGoodHabit = () => {
    setAddGoodHabit(false);
  };
  const handleButtonCloseBadHabit = () => {
    setAddBadHabit(false);
  };

  useEffect(() => {
    handleList();
  }, [handleList]);

  const handleAddGoodHabit = () => {
    setAddGoodHabit(true);
  };
  const handleAddBadHabit = () => {
    setAddBadHabit(true);
  };
  return (
    <MainContainer>
      <HabitsContainer>
        <h2>meus hábitos</h2>
        <Habits>
          <TextHabits>
            <p>hábitos para praticar</p>
            <StyledButton
              onClick={handleAddGoodHabit}
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
            >
              criar novo
            </StyledButton>
          </TextHabits>
          {habits !== undefined &&
            habits.map((habit) =>
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
          {addGoodHabit && (
            <ModalHabito handleButtonClose={handleButtonCloseGoodHabit} />
          )}
        </Habits>
        <Habits>
          <TextHabits>
            <p>hábitos para eliminar</p>
            <StyledPinkButton
              onClick={handleAddBadHabit}
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
            >
              criar novo
            </StyledPinkButton>
          </TextHabits>
          {addBadHabit && (
            <ModalHabito handleButtonClose={handleButtonCloseBadHabit} />
          )}
          {habits !== undefined &&
            habits.map((habit) =>
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
