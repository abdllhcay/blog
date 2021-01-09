import React from "react";
import { signin } from "../../services/auth";
import { LoginView } from "./login.view";

export function Login() {
  async function login() {
    const response = await signin();

    console.log(response);
  }

  const onSubmit = (data) => {
    return new Promise((resolve) => {
      console.log(data);
      resolve();
    });
  };

  return <LoginView onSubmit={onSubmit} />;
}
