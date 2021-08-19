import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MyGroups from "../pages/MyGroups";
import LandingPage from "../pages/LandingPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <LandingPage/>
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
      <Route path="/groups/find">
        <FindGroups />
      </Route>
    </Switch>
  );
};
export default Routes;
