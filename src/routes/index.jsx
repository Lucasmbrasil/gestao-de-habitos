import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MyGroups from "../pages/MyGroups";
import LandingPage from "../pages/LandingPage";
import FindGroups from "../pages/FindGroups";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage />
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
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};
export default Routes;
