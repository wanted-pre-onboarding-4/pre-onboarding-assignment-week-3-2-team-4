import React from "react";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Form from "../components/Form";
import { postComment, putComment } from "../modules/comment";
import { initializeEditList } from "../modules/editList";

function FormContainer() {
  const dispatch = useDispatch();
  const { comment, editList } = useSelector(({ comment, editList }) => ({
    comment,
    editList,
  }));

  const [formInfo, setFormInfo] = useState({
    profile_url: "",
    author: "",
    content: "",
    createdAt: "",
  });

  const onChange = useCallback(
    (e) => {
      const {
        target: { name, value },
      } = e;
      setFormInfo((prev) => ({ ...prev, [name]: value }));
    },
    [formInfo]
  );

  const onPostSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        postComment({
          profile_url: `https://picsum.photos/id/${
            comment.data.length + 1
          }/50/50`,
          author: formInfo.author,
          content: formInfo.content,
          createdAt: formInfo.createdAt,
        })
      );

      setFormInfo({
        profile_url: "",
        author: "",
        content: "",
        createdAt: "",
      });
    },
    [formInfo]
  );

  const onEditSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        putComment({
          ...formInfo,
          id: editList.id,
        })
      );
      dispatch(initializeEditList());
    },
    [editList, comment, formInfo]
  );

  useEffect(() => {
    setFormInfo({
      profile_url: editList.profile_url,
      author: editList.author,
      content: editList.content,
      createdAt: editList.createdAt,
    });
  }, [editList]);

  return (
    <Form
      formInfo={formInfo}
      onSubmit={editList.id ? onEditSubmit : onPostSubmit}
      onChange={onChange}
    />
  );
}

export default FormContainer;
