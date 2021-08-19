import HeaderDashboard from "../../components/HeaderDashboard";
import {
  Habits,
  HabitsContainer,
  MainContainer,
  StyledButton,
  StyledPinkButton,
  TextHabits,
  PageContainer,
} from "./styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import ModalHabito from "../../components/ModalContainer/ModalHabit";
import { useHabitList } from "../../Providers/HabitsList";
import MenuSide from "../../components/MenuSide";
import jwt_decode from "jwt-decode";
import HabitCard from "../../components/HabitCard";

import { CircularProgress } from "@material-ui/core";
import ModalEditHabit from "../../components/ModalContainer/ModalEditHabit";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  const { habits, handleList } = useHabitList();
  const [addGoodHabit, setAddGoodHabit] = useState(false);
  const [addBadHabit, setAddBadHabit] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const getToken = window.localStorage.getItem("token");
  const decodeToken = jwt_decode(getToken);
  const userID = decodeToken.user_id;

  const getUsername = useCallback(() => {
    setIsLoading(true);
    api
      .get(`users/${userID}/`)
      .then((res) => {
        setUsername(res.data.username);
        setIsLoading(false);
      })
      .catch((e) => setIsLoading(false));
  }, [userID]);

  const addHowMuchAchieved = (habit) => {
    api
      .patch(
        `/habits/${habit.id}/`,
        { how_much_achieved: habit.how_much_achieved + 5 },
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
        { how_much_achieved: habit.how_much_achieved - 5 },
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
  const handleCloseEditHabit = () => {
    setEdit(false);
  };
  useEffect(() => {
    handleList();
    getUsername();
  }, [handleList, getUsername]);

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
      <ToastContainer position="top-center" autoClose={2500} />

      <MenuSide />
      <MainContainer>
        <HeaderDashboard username={username} />
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
                if (
                  habit.category === "Saúde" ||
                  habit.category === "Alimentação" ||
                  habit.category === "Estudo"
                ) {
                  return (
                    <>
                      <HabitCard
                        key={habit.id}
                        habit={habit}
                        addHowMuchAchieved={addHowMuchAchieved}
                        handleDeleteHabit={handleDeleteHabit}
                        addBadHabit={addBadHabit}
                      />
                    </>
                  );
                }

                return <></>;
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
                if (
                  habit.category === "NãoSaúde" ||
                  habit.category === "NãoAlimentação" ||
                  habit.category === "NãoEstudo"
                ) {
                  return (
                    <HabitCard
                      key={`${habit.id}bad`}
                      habit={habit}
                      subHowMuchAchieved={subHowMuchAchieved}
                      handleDeleteHabit={handleDeleteHabit}
                      addBadHabit={addBadHabit}
                    />
                  );
                }

                return <></>;
              })}
          </Habits>
        </HabitsContainer>
      </MainContainer>
    </PageContainer>
  );
};
export default Dashboard;
