import HeaderDashboard from "../../components/HeaderDashboard";
import BlueCard from "../../components/HabitCard/BlueCard";
import PastelCard from "../../components/HabitCard/PastelCard";
import RedCard from "../../components/HabitCard/RedCard";
import {
  Habits,
  HabitsContainer,
  MainContainer,
  StyledButton,
  StyledPinkButton,
  TextHabits,
  PageContainer
} from "./styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useEffect, useState } from "react";
import api from "../../services/api";
import ModalHabito from "../../components/ModalContainer/ModalHabit";
import { useHabitList } from "../../Providers/HabitsList";
import MenuSide from "../../components/MenuSide";
import jwt_decode from "jwt-decode";

const Dashboard = () => {
  const { habits, handleList } = useHabitList();
  const [addGoodHabit, setAddGoodHabit] = useState(false);
  const [addBadHabit, setAddBadHabit] = useState(false);

  const getToken = window.localStorage.getItem("token");
  const decodeToken = jwt_decode(getToken);
  const userID = decodeToken.user_id;

  const addHowMuchAchieved = (habit) => {
    api
      .patch(
        `/habits/${habit.id}/`,
        { how_much_achieved: habit.how_much_achieved + 10 },
        {
          headers: { Authorization: `Bearer ${getToken}` },
        }
      )
      .then((res) => {
        handleList();
      })
      .catch((e) => console.log(e));
  };
  const subHowMuchAchieved = (habit) => {
    api
      .patch(
        `/habits/${habit.id}/`,
        { how_much_achieved: habit.how_much_achieved - 1 },
        {
          headers: { Authorization: `Bearer ${getToken}` },
        }
      )
      .then((res) => {
        handleList();
      })
      .catch((e) => console.log(e));
  };
  const handleButtonCloseGoodHabit = () => {
    setAddGoodHabit(false);
  };
  const handleButtonCloseBadHabit = () => {
    setAddBadHabit(false);
  };
  const handleAddGoodHabit = () => {
    setAddGoodHabit(true);
    setAddBadHabit(false);
  };
  const handleAddBadHabit = () => {
    setAddBadHabit(true);
    setAddGoodHabit(false);
  };

  useEffect(() => {
    handleList();
  }, [handleList]);

  const handleDeleteHabit = (habit) => {
    api
      .delete(`/habits/${habit.id}/`, {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((res) => handleList())
      .catch((e) => console.log(e));
  };

  return (
    <PageContainer>
      <MenuSide />
    <MainContainer>
      <HeaderDashboard/>
      <HabitsContainer>
        <div className="habits_header">
            <h2>meus hábitos</h2>
            <p>crie e pratique!</p>
        </div>
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
          {addGoodHabit && (
            <ModalHabito
              handleButtonClose={handleButtonCloseGoodHabit}
              userID={userID}
              getToken={getToken}
            />
          )}
          {habits !== undefined &&
            habits.map((habit) => {
              return (
                <div key={habit.id}>
                  {habit.category === "Saúde" ? (
                    <div>
                      <button onClick={() => handleDeleteHabit(habit)}>
                        remover
                      </button>
                      <RedCard
                        habit={habit}
                        addHowMuchAchieved={addHowMuchAchieved}

                      />
                      {habit.how_much_achieved % 100 === 0 &&
                        habit.how_much_achieved !== 0 &&
                        `Parabéns! Você praticou esse hábito ${habit.how_much_achieved} vezes!`}
                    </div>
                  ) : habit.category === "Estudo" ? (
                    <div>
                      <button onClick={() => handleDeleteHabit(habit)}>
                        remover
                      </button>
                      <BlueCard
                        habit={habit}
                        addHowMuchAchieved={addHowMuchAchieved}
                      />
                      {habit.how_much_achieved % 100 === 0 &&
                        habit.how_much_achieved !== 0 &&
                        `Parabéns! Você praticou esse hábito ${habit.how_much_achieved} vezes!`}
                    </div>
                  ) : (
                    habit.category === "Alimentação" && (
                      <div>
                        <button onClick={() => handleDeleteHabit(habit)}>
                          remover
                        </button>
                        <PastelCard
                          habit={habit}
                          addHowMuchAchieved={addHowMuchAchieved}
                        />
                        {habit.how_much_achieved % 100 === 0 &&
                          habit.how_much_achieved !== 0 &&
                          `Parabéns! Você praticou esse hábito ${habit.how_much_achieved} vezes!`}
                      </div>
                    )
                  )}
                </div>
              );
            })}
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
            <ModalHabito
              handleButtonClose={handleButtonCloseBadHabit}
              addBadHabit={addBadHabit}
              userID={userID}
              getToken={getToken}
            />
          )}
          {habits !== undefined &&
            habits.map((habit) => {
              return (
                <div key={habit.id}>
                  {habit.category === "NãoSaúde" ? (
                    <div>
                      <button onClick={() => handleDeleteHabit(habit)}>
                        remover
                      </button>
                      <RedCard
                        habit={habit}
                        subHowMuchAchieved={subHowMuchAchieved}
                      />
                      {habit.how_much_achieved % 100 === 0 &&
                        habit.how_much_achieved !== 0 &&
                        `Parabéns! Você deixou de praticar esse hábito ${-habit.how_much_achieved} vezes!`}
                    </div>
                  ) : habit.category === "NãoEstudo" ? (
                    <div>
                      <button onClick={() => handleDeleteHabit(habit)}>
                        remover
                      </button>
                      <BlueCard
                        habit={habit}
                        subHowMuchAchieved={subHowMuchAchieved}
                      />
                      {habit.how_much_achieved % 100 === 0 &&
                        habit.how_much_achieved !== 0 &&
                        `Parabéns! Você deixou de praticar esse hábito ${-habit.how_much_achieved} vezes!`}
                    </div>
                  ) : (
                    habit.category === "NãoAlimentação" && (
                      <div>
                        <button onClick={() => handleDeleteHabit(habit)}>
                          remover
                        </button>
                        <PastelCard
                          habit={habit}
                          subHowMuchAchieved={subHowMuchAchieved}
                        />
                        {habit.how_much_achieved % 100 === 0 &&
                          habit.how_much_achieved !== 0 &&
                          `Parabéns! Você deixou de praticar esse hábito ${-habit.how_much_achieved} vezes!`}
                      </div>
                    )
                  )}
                </div>
              );
            })}
        </Habits>
      </HabitsContainer>
    </MainContainer>
    </PageContainer>
  );
};
export default Dashboard;
