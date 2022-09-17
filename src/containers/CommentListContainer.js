import React from "react";
import { useDispatch } from "react-redux";
import CommentList from "../components/CommentList";
import { deleteComment, getComments, getPrevComment } from "../modules/comment";

function CommentListContainer({ setIsEdit, comments }) {
  const dispatch = useDispatch();

  const handleCommentUpdate = (commentId) => {
    const targetComment = comments.find(({ id }) => id === Number(commentId));
    dispatch(getPrevComment(targetComment));
  };

  const handleCommentDelete = React.useCallback(
    (commentId) => {
      dispatch(deleteComment(commentId));
      dispatch(getComments());
    },
    [dispatch]
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
