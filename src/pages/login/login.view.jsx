import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Stack, Container, Heading } from "@chakra-ui/react";

export function LoginView(props) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <Container maxW="sm">
      <Heading size="lg" mb="5">
        Giriş
      </Heading>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <Stack spacing={3}>
          <Input
            name="email"
            type="email"
            placeholder="E-posta"
            ref={register({ required: true })}
          />
          <Input
            name="password"
            type="password"
            placeholder="Şifre"
            ref={register({ required: true })}
          />
        </Stack>

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Gönder
        </Button>
      </form>
    </Container>
  );
}
