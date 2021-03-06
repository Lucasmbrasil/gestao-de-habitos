import HeaderDashboard from "../../components/HeaderDashboard";
import { useMediaQuery } from "react-responsive";
import MenuFooter from "../../components/MenuFooter";

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
import { toast, ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import MobileHeader from "../../components/MobileHeader";

const Dashboard = () => {
  const desktop = useMediaQuery({ query: "(min-width: 769px)" });
  const mobileBreak = useMediaQuery({ query: "(min-width: 480px)" });

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
      .then((res) => {
        toast.success("H??bito apagado com sucesso!", {
          onClose: () => {
            handleList();
          },
        });
      })
      .catch((e) => console.log(e));
  };

  return (
    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .3 }}
        >
    <PageContainer>
      <ToastContainer position="top-center" autoClose={2500} />

      {desktop && <MenuSide />}
      {!desktop && <MobileHeader />}

      <MainContainer>
        <HeaderDashboard username={username} />
        <HabitsContainer>
          <div className="habits_header">
            <h2>meus h??bitos</h2>
            <p>crie e pratique!</p>
          </div>
          <Habits>
            <TextHabits>
              <p>h??bitos para praticar</p>
              <StyledButton
                onClick={handleAddGoodHabit}
                variant="contained"
                startIcon={<AddCircleOutlineIcon />}
              >
                {mobileBreak && <>criar novo</>}
              </StyledButton>
            </TextHabits>
            {addGoodHabit && (
              <ModalHabito
                handleButtonClose={handleButtonCloseGoodHabit}
                userID={userID}
                getToken={getToken}
              />
            )}
            <section>
              {habits !== undefined &&
                habits.map((habit) => {
                  if (
                    habit.category === "Sa??de" ||
                    habit.category === "Alimenta????o" ||
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
            </section>
          </Habits>
          <Habits>
            <TextHabits>
              <p>h??bitos para eliminar</p>
              <StyledPinkButton
                onClick={handleAddBadHabit}
                variant="contained"
                startIcon={<AddCircleOutlineIcon />}
              >
                {mobileBreak && <>criar novo</>}
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
            <section>
              {habits !== undefined &&
                habits.map((habit) => {
                  if (
                    habit.category === "N??oSa??de" ||
                    habit.category === "N??oAlimenta????o" ||
                    habit.category === "N??oEstudo"
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
            </section>
          </Habits>
        </HabitsContainer>
      </MainContainer>
      {!desktop && <MenuFooter />}
    </PageContainer>
    </motion.div>
  );
};
export default Dashboard;
