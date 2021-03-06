import React, { Fragment } from "react";
import { Heading, Text, Skeleton } from "@chakra-ui/react";
import { ContentBox } from "../../components/content-box";
import { monthNames } from "../../utils/statics";

export function PostDetailView(props) {
  const date = props.post.date?.toDate();
  return (
    <div>
      {props.loading ? (
        <Fragment>
          <Skeleton height="40px" mb={4} />
          <Skeleton height="20px" mb={4} width="30%" />
          <Skeleton height="150px" mb={4} />
        </Fragment>
      ) : (
        <Fragment>
          <Heading size="lg">{props.post.title}</Heading>
          <Text fontSize="sm" color="gray.500">
            {date?.getDate()} {monthNames[date?.getMonth()]}{" "}
            {date?.getFullYear()}
          </Text>
          <Text mt={5}>
            <ContentBox text={props.post.content} />
          </Text>
        </Fragment>
      )}
    </div>
  );
}
