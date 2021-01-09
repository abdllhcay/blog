import { Route, Switch } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Login } from "./pages/login";

function App() {
  return (
    <div>
      <Container maxW="2xl" mt={5}>
        <Header />
      </Container>
      <Container maxW="4xl" mt={20}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
