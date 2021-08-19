import BlueCard from "./BlueCard";
import RedCard from "./RedCard";
import PastelCard from "./PastelCard";

const HabitCard = ({ habit, subHowMuchAchieved, addHowMuchAchieved, handleDeleteHabit }) => {

  if(habit.category === "Saúde"){
   return (
     <RedCard habit={habit} addHowMuchAchieved={addHowMuchAchieved} handleDeleteHabit={handleDeleteHabit}></RedCard>
   )
  }

  else if(habit.category === "NãoSaúde"){
    return (
      <RedCard habit={habit} subHowMuchAchieved={subHowMuchAchieved} handleDeleteHabit={handleDeleteHabit}></RedCard>
    )
   }

   else if(habit.category === "Estudo"){
    return (
      <BlueCard habit={habit} subHowMuchAchieved={subHowMuchAchieved} handleDeleteHabit={handleDeleteHabit}></BlueCard>
    )
   }

   else if(habit.category === "NãoEstudo"){
    return (
      <BlueCard habit={habit} subHowMuchAchieved={subHowMuchAchieved} handleDeleteHabit={handleDeleteHabit}></BlueCard>
    )
   }

   else if(habit.category === "Alimentação"){
    return (
      <PastelCard habit={habit} subHowMuchAchieved={subHowMuchAchieved} handleDeleteHabit={handleDeleteHabit}></PastelCard>
    )
   }

   else if(habit.category === "NãoAlimentação"){
    return (
      <PastelCard habit={habit} subHowMuchAchieved={subHowMuchAchieved} handleDeleteHabit={handleDeleteHabit}></PastelCard>
    )
   }

   else {
    return (
        <>
        </>
    ); 
  }
};

export default HabitCard;