import { Box } from "@chakra-ui/react";

export function ContentBox(props) {
  console.log(props.text);
  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: props.text,
      }}
      sx={{
        "& h1": {
          fontSize: "1.875rem",
          lineHeight: 1.2,
          fontWeight: 700,
        },
        "& h2": {
          fontSize: "1.25rem",
          lineHeight: 1.2,
          fontWeight: 700,
        },
        // "& code": {
        //   backgroundColor: "rgba(0,0,0,.05)",
        //   fontSize: "16px",
        //   padding: "3px",
        //   fontFamily: "SFMono-Regular,Menlo,Monaco,Consolas,monospace",
        //   borderColor: "#E2E8F0",
        //   wordWrap: "break-word",
        //   margin: "0px",
        //   borderWidth: "0px",
        //   borderStyle: "solid",
        //   boxSizing: "border-box",
        //   whiteSpace: "pre-wrap",
        //   textAlign: "initial",
        //   lineHeight: "1.4em",
        //   textRendering: "optimizeLegibility",
        // },
        "& code": {
          fontFamily: "Consolas, 'Liberation Mono', Menlo, Courier, monospace",
          fontSize: "0.9em",
          color: "#555555",
          padding: "1px 3px",
          margin: "4px 0px",
          backgroundColor: "rgb(252, 252, 252)",
          borderStyle: "solid",
          borderWidth: "1px",
          borderRadius: "3px",
          borderColor:
            "rgb(204, 204, 204) rgb(204, 204, 204) rgb(187, 187, 187)",
          boxShadow: "rgb(187, 187, 187) 0px -1px 0px inset",
        },
      }}
    ></Box>
  );
}
