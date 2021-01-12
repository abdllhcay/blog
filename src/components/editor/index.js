import { Editor as DraftEditor, INLINE_BUTTONS } from "medium-draft";
import "medium-draft/lib/index.css";

const blockButtons = [
  {
    label: "H1",
    style: "header-one",
    description: "Heading 1",
  },
  {
    label: "H2",
    style: "header-two",
    description: "Heading 2",
  },
  {
    label: "</>",
    style: "code-block",
    description: "Code Block",
  },
  {
    label: "●",
    style: "unordered-list-item",
    description: "Unordered List",
  },
  {
    label: "1.",
    style: "ordered-list-item",
    description: "Ordered List",
  },
];

const inlineButtons = [
  {
    label: "``",
    style: "CODE",
    description: "Code",
  },
].concat(INLINE_BUTTONS);

const toolbarConfig = {
  block: [
    "header-one",
    "header-two",
    "code-block",
    "unordered-list-item",
    "ordered-list-item",
  ],
  inline: ["BOLD", "ITALIC", "UNDERLINE", "CODE", "hyperlink"],
};

function blockStyleFn(contentBlock) {
  const type = contentBlock.getType();
  if (type === "header-one") {
    return "editor-header-one";
  }

  if (type === "header-two") {
    return "editor-header-two";
  }
}

export function Editor(props) {
  return (
    <DraftEditor
      editorState={props.editorState}
      onChange={props.onChange}
      sideButtons={[]}
      toolbarConfig={toolbarConfig}
      blockButtons={blockButtons}
      inlineButtons={inlineButtons}
      blockStyleFn={blockStyleFn}
      placeholder="İçerik"
    />
  );
}
