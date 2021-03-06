import { Container } from "@chakra-ui/react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Routes } from "./routes";
import "./App.css";

function App() {
  return (
    <div>
      <Container maxW="4xl" mt={5}>
        <Header />
      </Container>
      <Container maxW="4xl" mt={20}>
        <Routes />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
