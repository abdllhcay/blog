import { Route, Redirect } from "react-router-dom";

export function PrivateRoute(props) {
  const loggedIn = localStorage.getItem("loggedIn");

  return loggedIn ? (
    <Route path={props.path} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
}
