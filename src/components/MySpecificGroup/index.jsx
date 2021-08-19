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
import { ButtonAddGroup } from "../MyGroupsHeader/styles";
import { PageContainer, GoalsContainer, ContainerText, MainContainer, ContainerHeader, ContainerTitle, SubscribeGroupButton, Button, Container } from "./styles";
import MenuSide from "../MenuSide";
import { useMediaQuery } from "react-responsive"; 
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople'; 
import ControlPointIcon from "@material-ui/icons/ControlPoint";


const MySpecificGroup = () => {
  const desktop = useMediaQuery({ query: "(min-width: 769px)" });
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
  const { handleSubscribeGroup, register } = useSubscribeGroup();
  const { handleMyGroupsList, myGroups } = useMyGroupsList();
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
  console.log(enterGroup);
  return (
    <>
      <ToastContainer position="top-center" autoClose={2500} />
      <PageContainer>
        {desktop && <MenuSide />}
        <MainContainer>
          <ContainerHeader>
            <ContainerTitle>
              {    specificGroup.category === "Saude" ?       <FitnessCenterIcon style={{color: "#802727"}}/>
                : (specificGroup.category === "Alimentação" ? <FastfoodIcon      style={{color: "#1A237E"}}/>
                : (specificGroup.category === "Estudo" ?      <MenuBookIcon      style={{color: "#275a29"}}/>
                :                                             <NaturePeopleIcon  style={{color: "#26A69A"}}/>)) 
              }
              <div>
                <h1>{specificGroup.name}</h1>
                <p>{specificGroup.description}</p>
              </div>
            </ContainerTitle>
                {enterGroup || register ? (
                  <SubscribeGroupButton disabled><ControlPointIcon /> <span>entrar no grupo</span></SubscribeGroupButton>
                ) : (
                  <SubscribeGroupButton
                    onClick={() => {
                      handleMyGroupsList();
                      handleSubscribeGroup(specificGroup);
                    }}
                  >
                    Entrar no grupo
                  </SubscribeGroupButton>
                )}
                <Button onClick={() => setSpecificGroup("")}>voltar</Button>
            </ContainerHeader>
            
            {createGoal && (
              <ModalGoal
                handleButtonClose={handleButtonClose}
                setCreateGoal={setCreateGoal}
              />
            )}
            <Container>
              <div className="header">
                <h2>objetivos ativos do grupo</h2>
                <p>edite, crie e pratique em equipe!</p>
              </div>
              <GoalsContainer>
                <ContainerText>
                  <p>objetivos para conquistar!</p>
                  <Button onClick={() => setCreateGoal(true)}><ControlPointIcon /> <span>criar objetivo</span></Button>
                </ContainerText>
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
              </GoalsContainer>
            </Container>
            <Container>
              <div className="header">
                <h2>atividades ativas do grupo</h2>
                <p>edite, crie e pratique em equipe!</p>
              </div>
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
                    {new Date(activity.realization_time).toLocaleDateString("pt-BR")}
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
            </Container>
        </MainContainer>
      </PageContainer>
    </>
  );
};
export default MySpecificGroup;
