import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/Form";
import { postComment, updateComment } from "../modules/comment";

const INITIAL_FORM_DATA = {
  profileUrl: "",
  author: "",
  content: "",
  createdAt: "",
};

function FormContainer({ setIsEdit, isEdit }) {
  const { updatedData } = useSelector((state) => state.comment);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ ...INITIAL_FORM_DATA });

  const clearForm = () => {
    setFormData({ ...INITIAL_FORM_DATA });
  };

  const handleCommentPost = React.useCallback(() => {
    const bodyData = {
      profile_url: formData.profileUrl,
      author: formData.author,
      content: formData.content,
      createdAt: formData.createdAt,
    };

    if (isEdit) {
      dispatch(updateComment(updatedData.id, bodyData));
    } else {
      dispatch(postComment(bodyData));
    }

    clearForm();
  }, [formData, dispatch, isEdit, updatedData.id]);

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommentPost();
    setIsEdit(false);
  };

  useEffect(() => {
    if (isEdit) {
      setFormData({
        profileUrl: updatedData.profile_url,
        author: updatedData.author,
        content: updatedData.content,
        createdAt: updatedData.createdAt,
      });
    }
  }, [isEdit, updatedData]);

  return (
    <Form
      handleSubmit={handleSubmit}
      setIsEdit={setIsEdit}
      isEdit={isEdit}
      formData={formData}
      handleInput={handleInput}
      handleCommentPost={handleCommentPost}
    />
  );
}

export default FormContainer;
