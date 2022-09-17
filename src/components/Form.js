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

function Form() {
  const [profileUrl, setProfileUrl] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const dispatch = useDispatch();

  const clearForm = () => {
    setProfileUrl("");
    setAuthor("");
    setContent("");
    setCreatedAt("");
  };

  const handleCommentPost = (e) => {
    e.preventDefault();

    const postData = {
      profile_url: profileUrl,
      author,
      content,
      createdAt,
    };

    dispatch(postComment(postData));
    clearForm();
  };
  return (
    <FormStyle>
      <form>
        <input
          onChange={(e) => setProfileUrl(e.target.value)}
          value={profileUrl}
          type='text'
          name='profile_url'
          placeholder='https://picsum.photos/id/1/50/50'
          required
        />
        <br />
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          type='text'
          name='author'
          placeholder='작성자'
        />
        <br />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          name='content'
          placeholder='내용'
          required
        ></textarea>
        <br />
        <input
          onChange={(e) => setCreatedAt(e.target.value)}
          value={createdAt}
          type='text'
          name='createdAt'
          placeholder='2020-05-30'
          required
        />
        <br />
        <button onClick={handleCommentPost} type='submit'>
          등록
        </button>
      </form>
    </FormStyle>
  );
}

export default Form;
