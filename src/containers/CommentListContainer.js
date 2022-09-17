import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import { deleteComment, getComments } from "../modules/comment";
import { clickFixBtn } from "../modules/editList";

function CommentListContainer() {
  const { data } = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  const onDeleteClick = useCallback((e) => {
    const id = +e.target.getAttribute("data-id");
    if (!id) return;
    dispatch(deleteComment(id));
  }, []);

  const onFixClick = useCallback(
    (e) => {
      const id = +e.target.getAttribute("data-id");
      if (!id) return;
      const findComment = data.find((comment) => comment.id === id);
      dispatch(clickFixBtn(findComment));
    },
    [data]
  );

  useEffect(() => {
    dispatch(getComments());
  }, []);

  return (
    <CommentList
      onFixClick={onFixClick}
      onDeleteClick={onDeleteClick}
      comments={data}
    />
  );
}

export default CommentListContainer;
