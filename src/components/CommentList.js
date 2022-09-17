import React from "react";
import styled from "styled-components";

function CommentList({
  setIsEdit,
  comments,
  handleCommentDelete,
  handleCommentUpdate,
}) {
  const onUpdate = (e) => {
    handleCommentUpdate(e.target.id);
    setIsEdit(true);
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
        <button id={comment.id} onClick={onUpdate}>
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

export default CommentList;
