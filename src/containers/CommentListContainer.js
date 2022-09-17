import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import { deleteComment, getComments } from "../modules/comment";

function CommentListContainer() {
  const state = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  const handleCommentDelete = React.useCallback(
    (commentId) => {
      dispatch(deleteComment(commentId));
      dispatch(getComments());
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]); // 이게 왜 안먹을까

  return (
    <CommentList
      comments={state.data}
      handleCommentDelete={handleCommentDelete}
    />
  );
}

export default CommentListContainer;
