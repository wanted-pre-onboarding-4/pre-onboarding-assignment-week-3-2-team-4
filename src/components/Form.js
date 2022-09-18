import React from "react";
import styled from "styled-components";

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

function Form({ isEdit, formData, handleInput, handleSubmit }) {
  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          value={formData.profileUrl || ""}
          default
          type='text'
          name='profileUrl'
          placeholder='https://picsum.photos/id/1/50/50'
          required
        />
        <br />
        <input
          onChange={handleInput}
          value={formData.author || ""}
          type='text'
          name='author'
          placeholder='작성자'
        />
        <br />
        <textarea
          onChange={handleInput}
          value={formData.content || ""}
          name='content'
          placeholder='내용'
          required
        ></textarea>
        <br />
        <input
          onChange={handleInput}
          value={formData.createdAt || ""}
          type='text'
          name='createdAt'
          placeholder='2020-05-30'
          required
        />
        <br />
        <button type='submit'>{isEdit ? "수정" : "등록"}</button>
      </form>
    </FormStyle>
  );
}

export default Form;
