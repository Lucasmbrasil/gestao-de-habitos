import BlueCard from "./BlueCard";
import RedCard from "./RedCard";
import PastelCard from "./PastelCard";

const HabitCard = ({
  habit,
  subHowMuchAchieved,
  addHowMuchAchieved,
  handleDeleteHabit,
  addBadHabit,
}) => {
  if (habit.category === "Saúde") {
    return (
      <RedCard
        addBadHabit={addBadHabit}
        habit={habit}
        addHowMuchAchieved={addHowMuchAchieved}
        handleDeleteHabit={handleDeleteHabit}
      ></RedCard>
    );
  } else if (habit.category === "NãoSaúde") {
    return (
      <RedCard
        addBadHabit={addBadHabit}
        habit={habit}
        subHowMuchAchieved={subHowMuchAchieved}
        handleDeleteHabit={handleDeleteHabit}
      ></RedCard>
    );
  } else if (habit.category === "Estudo") {
    return (
      <BlueCard
        addBadHabit={addBadHabit}
        habit={habit}
        addHowMuchAchieved={addHowMuchAchieved}
        handleDeleteHabit={handleDeleteHabit}
      ></BlueCard>
    );
  } else if (habit.category === "NãoEstudo") {
    return (
      <BlueCard
        addBadHabit={addBadHabit}
        habit={habit}
        subHowMuchAchieved={subHowMuchAchieved}
        handleDeleteHabit={handleDeleteHabit}
      ></BlueCard>
    );
  } else if (habit.category === "Alimentação") {
    return (
      <PastelCard
        addBadHabit={addBadHabit}
        habit={habit}
        addHowMuchAchieved={addHowMuchAchieved}
        handleDeleteHabit={handleDeleteHabit}
      ></PastelCard>
    );
  } else if (habit.category === "NãoAlimentação") {
    return (
      <PastelCard
        addBadHabit={addBadHabit}
        habit={habit}
        subHowMuchAchieved={subHowMuchAchieved}
        handleDeleteHabit={handleDeleteHabit}
      ></PastelCard>
    );
  } else {
    return <></>;
  }
};

export default HabitCard;
