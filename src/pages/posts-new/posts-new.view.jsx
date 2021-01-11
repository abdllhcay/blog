import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Stack, Textarea } from "@chakra-ui/react";
import Editor from "react-medium-editor";

require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/default.css");

export function NewPostView(props) {
  const [text, setText] = useState("");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  function handleChange(text, medium) {
    setText({ text: text });
  }

  console.log(text);

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <Stack spacing={3}>
        <Input
          name="title"
          type="text"
          placeholder="Başlık"
          ref={register({ required: true })}
        />
        <Editor text={text} onChange={handleChange} />
        {/* <Textarea
          name="content"
          type="text"
          placeholder="İçerik"
          ref={register({ required: true })}
        /> */}
      </Stack>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Kaydet
      </Button>
    </form>
  );
}
