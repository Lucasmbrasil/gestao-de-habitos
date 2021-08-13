import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from '../pages/Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};
export default Routes;
