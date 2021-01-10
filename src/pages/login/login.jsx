import React from "react";
import { signin } from "../../services/auth";
import { LoginView } from "./login.view";

export function Login() {
  async function onSubmit(data) {
    const isSuccess = await signin(data);
    localStorage.setItem("loggedIn", isSuccess);
  }

  return <LoginView onSubmit={onSubmit} />;
}
