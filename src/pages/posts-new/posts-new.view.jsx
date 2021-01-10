import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Stack, Textarea, Heading } from "@chakra-ui/react";

export function NewPostView(props) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <Stack spacing={3}>
        <Input
          name="title"
          type="text"
          placeholder="Başlık"
          ref={register({ required: true })}
        />
        <Textarea
          name="content"
          type="text"
          placeholder="İçerik"
          ref={register({ required: true })}
        />
      </Stack>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Kaydet
      </Button>
    </form>
  );
}
