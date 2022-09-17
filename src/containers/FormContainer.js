import React from "react";
import Form from "../components/Form";
import { useDispatch } from "react-redux";
import { postComment, putComment } from "../modules/comment";
import { useEffect, useState } from "react";
import { getToday } from "../util/dateFormat";

const INITIAL_STATE = {
  profile_url: "",
  author: "",
  content: "",
  createdAt: getToday(),
};

function FormContainer({ setPage, editData, setEditData }) {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({ ...INITIAL_STATE });

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    if (editData)
      setInputs({
        ...editData,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editData]);

  const onClickPost = async (e) => {
    if (!inputs.author || !inputs.content) {
      return alert("작성자, 내용 모두 입력해야합니다");
    }
    e.preventDefault();
    dispatch(postComment(inputs));
    setPage(1);
    setInputs({ ...INITIAL_STATE });
  };

  const onClickUpdate = async (e) => {
    e.preventDefault();
    dispatch(putComment(inputs.id, inputs));
    setEditData(null);
    setInputs({ ...INITIAL_STATE });
  };

  return (
    <Form
      inputs={inputs}
      editData={editData}
      onChangeInputs={onChangeInputs}
      onClickPost={onClickPost}
      onClickUpdate={onClickUpdate}
    />
  );
}

export default FormContainer;
