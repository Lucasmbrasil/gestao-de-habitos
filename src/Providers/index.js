import { HabitsListProvider } from "./HabitsList";
import { GroupListProvider } from "./GroupList";
import { MyGroupsListProvider } from "./MyGroupsList";
import { SpecificGroupProvider } from "./SpecificGroup";
import { CreateGroupProvider } from "./CreateGroup";
import { GetGroupGoalsProvider } from "./GetGroupGoals";
import { GetGroupActivitiesProvider } from "./GetGroupActivities";
import { DeleteProvider } from "./Delete";
import { CreateActivityProvider } from "./CreateActivity";
import { SubscribeGroupProvider } from "./SubscribeGroup";

const Providers = ({ children }) => {
  return (
    <SubscribeGroupProvider>
      <SpecificGroupProvider>
        <MyGroupsListProvider>
          <HabitsListProvider>
            <GroupListProvider>
              <GetGroupGoalsProvider>
                <GetGroupActivitiesProvider>
                  <DeleteProvider>
                    <CreateGroupProvider>
                      <CreateActivityProvider>
                        {children}
                      </CreateActivityProvider>
                    </CreateGroupProvider>
                  </DeleteProvider>
                </GetGroupActivitiesProvider>
              </GetGroupGoalsProvider>
            </GroupListProvider>
          </HabitsListProvider>
        </MyGroupsListProvider>
      </SpecificGroupProvider>
    </SubscribeGroupProvider>
  );
};
export default Providers;
