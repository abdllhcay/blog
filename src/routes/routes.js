import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { AboutMe } from "../pages/about-me";
import { Posts } from "../pages/posts";
import { NewPost } from "../pages/posts-new";
import { PostDetail } from "../pages/posts-detail";
import { NotFound } from "../pages/404";
import { PrivateRoute } from "./private-route";

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/posts" component={Posts} exact />
      <PrivateRoute path="/posts/new" component={NewPost} />
      <Route path="/posts/:postId" component={PostDetail} />
      <Route component={NotFound}></Route>
    </Switch>
  );
}
