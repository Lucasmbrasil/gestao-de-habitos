import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";

import GrupoUsuarioInscrito from "../pages/GrupoInscritoUsuario";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/activitiesSubs">
        <GrupoUsuarioInscrito />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};
export default Routes;
