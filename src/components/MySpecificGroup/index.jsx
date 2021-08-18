import { useEffect, useState } from "react";
import { useSpecificGroup } from "../../Providers/SpecificGroup";
import ModalGoal from "../ModalContainer/ModalGoal";
import ModalActivity from "../ModalContainer/ModalActivity";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetGroupGoals } from "../../Providers/GetGroupGoals";
import { useGetGroupActivities } from "../../Providers/GetGroupActivities";
import { useDelete } from "../../Providers/Delete";
import { useMyGroupsList } from "../../Providers/MyGroupsList";
import { useSubscribeGroup } from "../../Providers/SubscribeGroup";

const MySpecificGroup = () => {
  const { specificGroup, setSpecificGroup } = useSpecificGroup();
  const {
    handleGoal,
    goals,
    count,
    setCount,
    previousGoalsPage,
    nextGoalsPage,
  } = useGetGroupGoals();
  const {
    handleActivities,
    activities,
    countActivities,
    setCountActivities,
    previousActivitiesPage,
    nextActivitiesPage,
  } = useGetGroupActivities();
  const { handleDeleteGoal, handleDeleteActivity } = useDelete();
  const { handleSubscribeGroup } = useSubscribeGroup();
  const { myGroups, handleMyGroupsList } = useMyGroupsList();
  const [createGoal, setCreateGoal] = useState(false);
  const [createActivities, setCreateActivities] = useState(false);
  const myGroupsId = myGroups.map((group) => group.id);
  const enterGroup = myGroupsId.includes(specificGroup.id);
  const handleButtonClose = () => {
    setCreateGoal(false);
  };
  const handleButtonCloseActivities = () => {
    setCreateActivities(false);
  };

  useEffect(() => {
    handleGoal();
    handleActivities();
  }, [handleGoal, handleActivities]);

  return (
    <>
      <h1>{specificGroup.name}</h1>
      {enterGroup ? (
        <button disabled>Entrar no grupo</button>
      ) : (
        <button
          onClick={() => {
            handleSubscribeGroup(specificGroup);
            setTimeout(() => handleMyGroupsList(), 4000);
          }}
        >
          Entrar no grupo
        </button>
      )}
      <button onClick={() => setSpecificGroup("")}>Voltar</button>
      <button onClick={() => setCreateGoal(true)}>Criar objetivo</button>
      {createGoal && (
        <ModalGoal
          handleButtonClose={handleButtonClose}
          setCreateGoal={setCreateGoal}
        />
      )}
      <div>
        <h2>OBJETIVOS</h2>
        {goals.map((goal) => (
          <div
            key={goal.id}
            style={{
              margin: "20px",
              border: "2px solid red",
              width: "200px",
            }}
          >
            <div>Título do objetivo: {goal.title}</div>
            <div>Dificuldade: {goal.difficulty}</div>
            <button onClick={() => handleDeleteGoal(goal)}>Remover</button>
          </div>
        ))}
        {previousGoalsPage !== null && (
          <button onClick={() => setCount(count - 1)}>Voltar</button>
        )}
        {nextGoalsPage !== null && (
          <button onClick={() => setCount(count + 1)}>Próxima</button>
        )}
      </div>
      <div>
        <h2>Atividades</h2>
        <button onClick={() => setCreateActivities(true)}>
          Criar atividade
        </button>
        {createActivities && (
          <ModalActivity
            handleButtonCloseActivities={handleButtonCloseActivities}
            setCreateActivities={setCreateActivities}
          />
        )}

        {activities.map((activity) => (
          <div
            key={activity.id}
            style={{
              margin: "20px",
              border: "2px solid red",
              width: "200px",
            }}
          >
            <div>Título: {activity.title}</div>
            <div>
              Data limite de realização:{" "}
              {activity.realization_time.slice(0, 10)}
            </div>
            <button onClick={() => handleDeleteActivity(activity)}>
              Remover
            </button>
          </div>
        ))}
        {previousActivitiesPage !== null && (
          <button onClick={() => setCountActivities(countActivities - 1)}>
            Voltar
          </button>
        )}
        {nextActivitiesPage !== null && (
          <button onClick={() => setCountActivities(countActivities + 1)}>
            Próxima
          </button>
        )}
      </div>
    </>
  );
};
export default MySpecificGroup;
