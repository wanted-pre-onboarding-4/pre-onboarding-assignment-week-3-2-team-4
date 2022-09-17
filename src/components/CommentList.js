import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteComment, getComments } from "../modules/comment";

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

// 임시 데이터 입니다. 코드 작성시 data 부분을 지워주세요
const data = [
  {
    id: 1,
    profile_url: "https://picsum.photos/id/1/50/50",
    author: "abc_1",
    content: "UI 테스트는 어떻게 진행하나요",
    createdAt: "2020-05-01",
  },
];

function CommentList({ comments, handleCommentDelete }) {
  const handlePostComment = () => {
    console.log("Dispatch Post");
  };

  const onDelete = (e) => {
    handleCommentDelete(e.target.id);
  };

  return comments.map((comment, key) => (
    <Comment key={key}>
      <img src={comment.profile_url} alt='' />

      {comment.author}

      <CreatedAt>{comment.createdAt}</CreatedAt>

      <Content>{comment.content}</Content>

      <Button>
        <button id={comment.id} onClick={handlePostComment}>
          수정
        </button>
        <button id={comment.id} onClick={onDelete}>
          삭제
        </button>
      </Button>

      <hr />
    </Comment>
  ));
}

export default CommentList;
