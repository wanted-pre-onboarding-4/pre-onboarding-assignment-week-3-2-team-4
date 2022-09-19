import React from "react";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "../components/Form";
import { pageClick, postComment, putComment } from "../modules/comment";
import { initializeEditComment } from "../modules/targetToEdit";

const INITIAL_STATE = {
  profile_url: "",
  author: "",
  content: "",
  createdAt: "",
};

function FormContainer() {
  const dispatch = useDispatch();
  const { comment, targetToEdit } = useSelector(
    ({ comment, targetToEdit }) => ({
      comment,
      targetToEdit,
    })
  );

  const [formInfo, setFormInfo] = useState(INITIAL_STATE);

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

      dispatch(pageClick(1));

      setFormInfo(INITIAL_STATE);
    },
    [formInfo]
  );

  const onEditSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(
        putComment({
          ...formInfo,
          id: targetToEdit.id,
        })
      );
      dispatch(initializeEditComment());
    },
    [targetToEdit, comment, formInfo]
  );

  useEffect(() => {
    setFormInfo({
      profile_url: targetToEdit.profile_url,
      author: targetToEdit.author,
      content: targetToEdit.content,
      createdAt: targetToEdit.createdAt,
    });
  }, [targetToEdit]);

  return (
    <Form
      isEditMode={Boolean(targetToEdit.id)}
      formInfo={formInfo}
      onSubmit={targetToEdit.id ? onEditSubmit : onPostSubmit}
      onChange={onChange}
    />
  );
}

export default FormContainer;
