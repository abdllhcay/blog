import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import customTheme from "./styles/theme";

const theme = extendTheme(customTheme);

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
