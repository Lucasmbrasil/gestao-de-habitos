import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MyGroups from "../pages/MyGroups";
import SearchGroup from "../pages/SearchGroup";

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
      <Route path="/mygroups">
        <MyGroups />
      </Route>
      <Route path="/searchgroup">
        <SearchGroup />
      </Route>
    </Switch>
  );
};
export default Routes;
