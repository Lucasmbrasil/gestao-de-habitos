import { HabitsListProvider } from "./HabitsList";
import { GroupListProvider } from "./GroupList";

const Providers = ({ children }) => {
  return (
    <HabitsListProvider>
      <GroupListProvider>
        {children}
      </GroupListProvider>
    </HabitsListProvider>
    );
};
export default Providers;
