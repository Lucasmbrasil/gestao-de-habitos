import { useState } from "react";
import api from "../../services/api.jsx";
const HabitsList = () => {
  const [token, setToken] = useState("");
  const [habits, setHabits] = useState([]);
  const handleLog = () => {
    const data = {
      username: "asdf995",
      password: "123456",
    };
    api
      .post("/sessions/", data)
      .then((response) => {
        localStorage.clear();
        localStorage.setItem("token", response.data.access);
        console.log(response);
        setToken(window.localStorage.getItem("token"));
      })
      .catch((e) => console.log(e));
  };
  const handleList = () => {
    api
      .get(`/habits/personal/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <button onClick={handleLog}>Log</button>
      <button onClick={handleList}>List</button>
      <div>
        {habits.map((habit) => (
          <ul key={habit.id}>
            <li>{habit.title}</li>
            <li>{habit.category}</li>
            <li>{habit.difficulty}</li>
            <li>{habit.frequency}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default HabitsList;
