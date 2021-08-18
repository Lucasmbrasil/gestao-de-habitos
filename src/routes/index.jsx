import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MyGroups from "../pages/MyGroups";
<<<<<<< HEAD
import SearchGroup from "../pages/SearchGroup";
=======
import FindGroups from "../pages/FindGroups";
>>>>>>> 2fe91af8d2ab97737f4a2180ebaf27241a13439f

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/groups/mygroups">
        <MyGroups />
      </Route>
<<<<<<< HEAD
      <Route path="/searchgroup">
        <SearchGroup />
=======
      <Route path="/groups/find">
        <FindGroups />
>>>>>>> 2fe91af8d2ab97737f4a2180ebaf27241a13439f
      </Route>
    </Switch>
  );
};
export default Routes;
