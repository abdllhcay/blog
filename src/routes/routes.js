import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Posts } from "../pages/posts";
import { NewPost } from "../pages/posts-new";
import { NotFound } from "../pages/404";
import { PrivateRoute } from "./private-route";

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/posts" component={Posts} exact />
      <PrivateRoute path="/posts/new" component={NewPost} />
      <Route component={NotFound}></Route>
    </Switch>
  );
}
