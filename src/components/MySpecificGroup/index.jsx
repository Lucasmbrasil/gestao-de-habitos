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
import CardActivity from "../CardActivity/CardChecked";
import { 
        PageContainer,
        ContainerText, 
        MainContainer, 
        ContainerHeader, 
        ContentContainer, 
        ContainerTitle, 
        SubscribeGroupButton, 
        Button, 
        Container,
        CardsContainer 
      } from "./styles";
import MenuSide from "../MenuSide";
import { useMediaQuery } from "react-responsive"; 
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople'; 
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CreateIcon from '@material-ui/icons/Create';
import GoalCard from "../GoalCard";
import MenuFooter from "../MenuFooter";
import MobileHeader from "../MobileHeader";
import jwt_decode from "jwt-decode";;

const MySpecificGroup = () => {
  const desktop = useMediaQuery({ query: "(min-width: 769px)" });
  const mobileLarge = useMediaQuery({ query: "(min-width: 560px)" });
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
  const [editGroup, setEditGroup] = useState(false);
  const myGroupsId = myGroups.map((group) => group.id);
  const enterGroup = myGroupsId.includes(specificGroup.id);
  const getToken = window.localStorage.getItem("token");
  const decodeToken = jwt_decode(getToken);
  const userID = decodeToken.user_id;

  const handleButtonClose = () => {
    setCreateGoal(false);
  };
  const handleButtonCloseActivities = () => {
    setCreateActivities(false);
  };
  const handleButtonCloseEditGroup = () => {
    setEditGroup(false);
  };
  console.log(specificGroup.creator.id);
  console.log(userID);
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
        {!desktop && <MobileHeader />}
        <MainContainer>
          <ContainerHeader>
            <ContainerTitle>
              {    specificGroup.category === "Saude" ?       <FitnessCenterIcon style={{color: "#802727"}}/>
                : (specificGroup.category === "Alimentação" ? <FastfoodIcon      style={{color: "#1A237E"}}/>
                : (specificGroup.category === "Estudo" ?      <MenuBookIcon      style={{color: "#275a29"}}/>
                :                                             <NaturePeopleIcon  style={{color: "#26A69A"}}/>)) 
              }
              <div>
                <h1>{specificGroup.name} <CreateIcon /></h1>
                <p>{specificGroup.description}</p>
              </div>
            </ContainerTitle>
                <div className="buttons">
                {enterGroup || register ? (
                  <SubscribeGroupButton disabled><ControlPointIcon /> {mobileLarge && <span>entrar no grupo</span>}</SubscribeGroupButton>
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
                <Button onClick={() => setSpecificGroup("")}><ArrowBackIcon />{mobileLarge && <span>voltar</span>}</Button>
                </div>
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
              <ContentContainer>
                <ContainerText>
                  <p>objetivos para conquistar!</p>
                  <Button onClick={() => setCreateGoal(true)}><ControlPointIcon /> {mobileLarge && <span>criar objetivo</span>}</Button>
                </ContainerText>
                <CardsContainer>
                  {
                    goals.map((goal) => (
                                        <GoalCard key={goal.id} goal={goal} handleDeleteGoal={handleDeleteGoal}/>
                    ))
                  }
                </CardsContainer>
                {previousGoalsPage !== null && (
                  <Button onClick={() => setCount(count - 1)}>voltar</Button>
                )}
                {nextGoalsPage !== null && (
                  <Button onClick={() => setCount(count + 1)}>próxima</Button>
                )}
              </ContentContainer>
            </Container>
            <Container>
              <div className="header">
                <h2>atividades ativas do grupo</h2>
                <p>edite, crie e pratique em equipe!</p>
              </div>
              <ContentContainer>
                <ContainerText>
                  <p>crie uma nova atividade!</p>
                  <Button color="#E65100"onClick={() => setCreateActivities(true)}>
                    <ControlPointIcon />
                    {mobileLarge && <span>criar atividade</span>}
                  </Button>
                </ContainerText>
                {createActivities && (
                  <ModalActivity
                    handleButtonCloseActivities={handleButtonCloseActivities}
                    setCreateActivities={setCreateActivities}
                  />
                )}
                <CardsContainer>
                </CardsContainer>
                {activities.map((activity) => (
                  <CardActivity 
                                key={activity.id} 
                                title={activity.title} 
                                date={activity.realization_time} 
                                handleDelete={handleDeleteActivity}
                                activity={activity}
                              />
                  ))}
                {previousActivitiesPage !== null && (
                  <Button onClick={() => setCountActivities(countActivities - 1)}>
                    voltar
                  </Button>
                )}
                {nextActivitiesPage !== null && (
                  <Button onClick={() => setCountActivities(countActivities + 1)}>
                    próxima
                  </Button>
                )}
              </ContentContainer>
            </Container>
        </MainContainer>
        {!desktop && <MenuFooter />}
      </PageContainer>
    </>
  );
};
export default MySpecificGroup;
