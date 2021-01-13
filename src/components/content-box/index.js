import { Box } from "@chakra-ui/react";

export function ContentBox(props) {
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
        //   fontFamily: "Consolas, 'Liberation Mono', Menlo, Courier, monospace",
        //   fontSize: "0.9em",
        //   color: "#555555",
        //   padding: "1px 3px",
        //   margin: "4px 0px",
        //   backgroundColor: "rgb(252, 252, 252)",
        //   borderStyle: "solid",
        //   borderWidth: "1px",
        //   borderRadius: "3px",
        //   borderColor:
        //     "rgb(204, 204, 204) rgb(204, 204, 204) rgb(187, 187, 187)",
        //   boxShadow: "rgb(187, 187, 187) 0px -1px 0px inset",
        // },
        "& code": {
          padding: "1px 3px",
          margin: "4px 0px",
        },
      }}
    ></Box>
  );
}
