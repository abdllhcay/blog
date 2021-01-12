import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Stack, Textarea } from "@chakra-ui/react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export function NewPostView(props) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  function onEditorStateChange(editorState) {
    setEditorState(editorState);
  }

  function myBlockStyleFn(contentBlock) {
    const type = contentBlock.getType();
    if (type === "header-one") {
      return "superFancyBlockquote";
    }
  }

  console.log(stateToHTML(editorState.getCurrentContent()));

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <Stack spacing={3}>
        <Input
          name="title"
          type="text"
          placeholder="Başlık"
          ref={register({ required: true })}
        />
        {/* <Textarea
          name="content"
          type="text"
          placeholder="İçerik"
          ref={register({ required: true })}
        /> */}
        <Editor
          // customStyleMap={styleMap}
          blockStyleFn={myBlockStyleFn}
          editorState={editorState}
          editorStyle={{ border: "1px solid" }}
          onEditorStateChange={onEditorStateChange}
          toolbar={{
            options: ["inline"],
          }}
        />
      </Stack>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Kaydet
      </Button>
    </form>
  );
}
