import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Stack } from "@chakra-ui/react";
import { Editor } from "../../components/editor";

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
        <Editor
          editorState={props.editorState}
          onChange={props.onEditorStateChange}
        />
      </Stack>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Kaydet
      </Button>
    </form>
  );
}
