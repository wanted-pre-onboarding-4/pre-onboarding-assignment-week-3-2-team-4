import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "../components/Form";
import { postComment } from "../modules/comment";

function FormContainer() {
  const [formData, setFormData] = useState({
    profileUrl: "",
    author: "",
    content: "",
    createdAt: "",
  });
  const dispatch = useDispatch();

  const clearForm = () => {
    setFormData({
      profileUrl: "",
      author: "",
      content: "",
      createdAt: "",
    });
  };

  const handleCommentPost = React.useCallback(() => {
    const postData = {
      profile_url: formData.profileUrl,
      author: formData.author,
      content: formData.content,
      createdAt: formData.createdAt,
    };

    dispatch(postComment(postData));
    clearForm();
  }, [formData, dispatch]);

  const handleInput = (k, v) => {
    setFormData({
      ...formData,
      [k]: v,
    });
  };

  return (
    <Form
      formData={formData}
      handleInput={handleInput}
      handleCommentPost={handleCommentPost}
    />
  );
}

export default FormContainer;
