import React from "react";
import { useDispatch } from "react-redux";
import CommentList from "../components/CommentList";
import {
  deleteComment,
  getComments,
  getEditingComment,
} from "../modules/comment";

function CommentListContainer({ setIsEdit, setPage, comments }) {
  const dispatch = useDispatch();

  const handleCommentUpdate = (commentId) => {
    const targetComment = comments.find(({ id }) => id === Number(commentId));
    dispatch(getEditingComment(targetComment));
  };

  const handleCommentDelete = React.useCallback(
    (commentId) => {
      dispatch(deleteComment(commentId));
      dispatch(getComments());
      setPage(1);
    },
    [dispatch, setPage]
  );

  return (
    <CommentList
      comments={comments}
      setIsEdit={setIsEdit}
      handleCommentDelete={handleCommentDelete}
      handleCommentUpdate={handleCommentUpdate}
    />
  );
}

export default CommentListContainer;
