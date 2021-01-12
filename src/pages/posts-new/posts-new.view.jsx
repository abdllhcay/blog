import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Stack, Textarea } from "@chakra-ui/react";
// import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
// import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor, createEditorState, BLOCK_BUTTONS } from "medium-draft";
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
  const [editorState, setEditorState] = useState(createEditorState());
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
        <div style={{ border: "1px solid" }}>
          <Editor
            // customStyleMap={styleMap}
            editorState={editorState}
            onChange={onEditorStateChange}
            sideButtons={[]}
            blockButtons={blockButtons}
            blockStyleFn={myBlockStyleFn}
            placeholder="Type your text"
          />
        </div>
      </Stack>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Kaydet
      </Button>
    </form>
  );
}
