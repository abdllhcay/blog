import { Container } from "@chakra-ui/react";
import { Header } from "./components/header";
import { Routes } from "./routes";

function App() {
  return (
    <div>
      <Container maxW="2xl" mt={5}>
        <Header />
      </Container>
      <Container maxW="4xl" mt={20}>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
