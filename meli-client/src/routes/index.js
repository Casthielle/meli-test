import { Switch, Route } from "react-router-dom";
import Home from "../views/home";
import Results from "../views/results";
import Details from "../views/details";
import Error from "../views/error";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/items" component={Results} />
      <Route path="/items/:id" component={Details} />
      <Route component={Error} />
    </Switch>
  );
};

export default Router;
