import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Redirect } from "react-router-dom";
import { signin } from "../../services/auth";
import { LoginView } from "./login.view";

export function Login() {
  const toast = useToast();
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn"));

  async function onSubmit(data) {
    const isSuccess = await signin(data);

    isSuccess
      ? localStorage.setItem("loggedIn", isSuccess)
      : toast({
          description: "Hatalı kullanıcı adı veya şifre",
          status: "error",
          duration: 3000,
          isClosable: true,
        });

    setLoggedIn(isSuccess);
  }

  return loggedIn ? <Redirect to="/" /> : <LoginView onSubmit={onSubmit} />;
}
