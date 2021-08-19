import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useGetGroupActivities } from "../GetGroupActivities";
import { useSpecificGroup } from "../SpecificGroup";

const CreateActivityContext = createContext();

export const CreateActivityProvider = ({ children }) => {
  const { specificGroup } = useSpecificGroup();
  const { handleActivities } = useGetGroupActivities();

  const handleCreateActivities = (data) => {
    console.log(specificGroup.id);
    const getToken = window.localStorage.getItem("token");
    const newData = {
      title: data.title,
      realization_time: `${data.realization_time}T23:59:59Z`,
      group: Number(specificGroup.id),
    };
    api
      .post(`/activities/`, newData, {
        headers: { Authorization: `Bearer ${getToken}` },
      })
      .then((response) =>
        toast.success("Atividade criada com sucesso!", {
          onClose: () => {
            handleActivities();
          },
        })
      )
      .catch((e) => console.log(e));
  };
  return (
    <CreateActivityContext.Provider value={{ handleCreateActivities }}>
      {children}
    </CreateActivityContext.Provider>
  );
};
export const useCreateActivity = () => useContext(CreateActivityContext);
