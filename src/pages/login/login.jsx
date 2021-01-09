import React from "react";
import { signin } from "../../services/auth";
import { LoginView } from "./login.view";

export function Login() {
  async function onSubmit(data) {
    const response = await signin(data);
    console.log(response);
  }

  return <LoginView onSubmit={onSubmit} />;
}
