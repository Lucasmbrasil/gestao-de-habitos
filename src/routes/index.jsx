import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";

import ActivitiesSubs from "../pages/AtividadesUsuarioInscrito";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/activitiesSubs">
        <ActivitiesSubs />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};
export default Routes;
