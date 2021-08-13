import { HabitsListProvider } from "./HabitsList";

const Providers = ({ children }) => {
  return <HabitsListProvider>{children}</HabitsListProvider>;
};
export default Providers;
