import { useEffect, useState } from "react";
import styled from "styled-components";
import { getToday } from "../util/dateFormat";
import { useDispatch } from "react-redux";
import { postComment, getComments } from "../modules/comment";

const INITIAL_STATE = {
  profile_url: "https://picsum.photos/id/1/50/50",
  author: "",
  content: "",
  createdAt: getToday(),
};

function Form({ setPage }) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ ...INITIAL_STATE });

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const onClickPost = async (e) => {
    if (!inputs.author || !inputs.content) {
      return alert("작성자, 내용 모두 입력해야합니다");
    }
    e.preventDefault();
    dispatch(postComment(inputs));
    dispatch(getComments());
    setPage(1);
    setInputs({ ...INITIAL_STATE });
  };

  return (
    <FormStyle>
      <form>
        <input
          id="profile_url"
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          onChange={onChangeInputs}
          value={inputs.profile_url || ""}
        />
        <br />
        <input
          id="author"
          type="text"
          name="author"
          placeholder="작성자"
          required
          onChange={onChangeInputs}
          value={inputs.author || ""}
        />
        <br />
        <textarea
          id="content"
          name="content"
          placeholder="내용"
          required
          onChange={onChangeInputs}
          value={inputs.content || ""}
        ></textarea>
        <br />
        <input
          id="createdAt"
          type="text"
          name="createdAt"
          required
          placeholder={getToday()}
          readOnly
        />
        <br />
        <button type="submit" onClick={onClickPost}>
          등록
        </button>
      </form>
    </FormStyle>
  );
}

export default Form;

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
