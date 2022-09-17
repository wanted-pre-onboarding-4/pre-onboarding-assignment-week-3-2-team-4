import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Form from "../components/Form";
import { postComments } from "../modules/comment";

function FormContainer() {
  const dispatch = useDispatch();
  const { comment, editList } = useSelector(({ comment, editList }) => ({
    comment,
    editList,
  }));

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // dispatch(
      //   postComments({
      //     profile_url: `https://picsum.photos/id/${data.length + 1}/50/50`,
      //     author: "김명원",
      //     content: "test test test",
      //     createdAt: "2022-09-17",
      //   })
      // );
    },
    [data]
  );

  return <Form onSubmit={onSubmit} />;
}

export default FormContainer;
