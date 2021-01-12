import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Stack } from "@chakra-ui/react";
import { Editor, BLOCK_BUTTONS } from "medium-draft";
import "medium-draft/lib/index.css";

const blockButtons = [
  {
    label: "H1",
    style: "header-one",
    icon: "header",
    description: "Heading 1",
  },
  {
    label: "H2",
    style: "header-two",
    icon: "header",
    description: "Heading 2",
  },
  {
    label: "code",
    style: "code-block",
    icon: "code",
    description: "Heading 2",
  },
].concat(BLOCK_BUTTONS);

export function NewPostView(props) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  function myBlockStyleFn(contentBlock) {
    const type = contentBlock.getType();
    if (type === "header-one") {
      return "superFancyBlockquote";
    }
  }

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
          sideButtons={[]}
          blockButtons={blockButtons}
          blockStyleFn={myBlockStyleFn}
          placeholder="İçerik"
        />
      </Stack>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Kaydet
      </Button>
    </form>
  );
}
