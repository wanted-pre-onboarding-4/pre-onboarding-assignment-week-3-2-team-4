import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { postComment } from "../modules/comment";

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

function Form({ formData, handleInput, handleCommentPost }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommentPost();
  };
  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={formData.profileUrl}
          type='text'
          name='profileUrl'
          placeholder='https://picsum.photos/id/1/50/50'
          required
        />
        <br />
        <input
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={formData.author}
          type='text'
          name='author'
          placeholder='작성자'
        />
        <br />
        <textarea
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={formData.content}
          name='content'
          placeholder='내용'
          required
        ></textarea>
        <br />
        <input
          onChange={(e) => handleInput(e.target.name, e.target.value)}
          value={formData.createdAt}
          type='text'
          name='createdAt'
          placeholder='2020-05-30'
          required
        />
        <br />
        <button type='submit'>등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;
