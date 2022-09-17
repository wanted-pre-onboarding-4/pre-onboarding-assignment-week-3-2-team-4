import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import { deleteComment, getComments, getPrevComment } from "../modules/comment";

function CommentListContainer({ setIsEdit }) {
  const state = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  const handleCommentUpdate = (commentId) => {
    const targetComment = state.data.find(({ id }) => id === Number(commentId));
    dispatch(getPrevComment(targetComment));
  };

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
      setIsEdit={setIsEdit}
      handleCommentDelete={handleCommentDelete}
      handleCommentUpdate={handleCommentUpdate}
    />
  );
}

export default CommentListContainer;
