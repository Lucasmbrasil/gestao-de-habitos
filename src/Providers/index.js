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
import { SearchGroupProvider } from "./SearchGroup";
import { EditGroupProvider } from "./EditGroup";

const Providers = ({ children }) => {
  return (
    <SubscribeGroupProvider>
      <SpecificGroupProvider>
        <SearchGroupProvider>
          <MyGroupsListProvider>
            <HabitsListProvider>
              <GroupListProvider>
                <GetGroupGoalsProvider>
                  <GetGroupActivitiesProvider>
                    <EditGroupProvider>
                      <DeleteProvider>
                        <CreateGroupProvider>
                          <CreateActivityProvider>
                            {children}
                          </CreateActivityProvider>
                        </CreateGroupProvider>
                      </DeleteProvider>
                    </EditGroupProvider>
                  </GetGroupActivitiesProvider>
                </GetGroupGoalsProvider>
              </GroupListProvider>
            </HabitsListProvider>
          </MyGroupsListProvider>
        </SearchGroupProvider>
      </SpecificGroupProvider>
    </SubscribeGroupProvider>
  );
};
export default Providers;
