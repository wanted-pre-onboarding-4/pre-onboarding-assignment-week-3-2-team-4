import React from "react";
import styled from "styled-components";

function Form({ isEditMode, formInfo, onSubmit, onChange }) {
  return (
    <FormStyle>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          name="profile_url"
          value={formInfo.profile_url}
          placeholder="https://picsum.photos/id/1/50/50"
          required
        />
        <br />
        <input
          onChange={onChange}
          type="text"
          name="author"
          value={formInfo.author}
          placeholder="작성자"
        />
        <br />
        <textarea
          onChange={onChange}
          name="content"
          value={formInfo.content}
          placeholder="내용"
          required
        ></textarea>
        <br />
        <input
          onChange={onChange}
          type="text"
          name="createdAt"
          value={formInfo.createdAt}
          placeholder="2020-05-30"
          required
        />
        <br />
        <button type="submit">{isEditMode ? "수정" : "등록"}</button>
      </form>
    </FormStyle>
  );
}

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

export default Form;
