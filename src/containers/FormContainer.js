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

function FormContainer({ setIsEdit, setPage, isEdit }) {
  const { editingComment } = useSelector((state) => state.comment);
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
      dispatch(updateComment(editingComment.id, bodyData));
    } else {
      dispatch(postComment(bodyData));
      setPage(1);
    }

    clearForm();
  }, [formData, dispatch, isEdit, editingComment, setPage]);

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
        profileUrl: editingComment.profile_url,
        author: editingComment.author,
        content: editingComment.content,
        createdAt: editingComment.createdAt,
      });
    }
  }, [isEdit, editingComment]);

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
