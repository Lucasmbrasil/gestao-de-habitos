import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";

import NotSubscribed from "../pages/GroupnotSubsbribed";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/notsubscribed">
        <NotSubscribed />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};
export default Routes;
