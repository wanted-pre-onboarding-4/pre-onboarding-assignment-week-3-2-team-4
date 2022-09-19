import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import { deleteComment, getComments, pageClick } from "../modules/comment";
import { clickFixBtn } from "../modules/targetToEdit";

function CommentListContainer() {
  const { data, page, numberPerPage } = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  const onDeleteClick = useCallback(
    (e) => {
      const id = +e.target.getAttribute("data-id");
      if (!id) return;
      dispatch(deleteComment(id));
      dispatch(pageClick(1));
    },
    [dispatch]
  );

  const onFixClick = useCallback(
    (e) => {
      const id = +e.target.getAttribute("data-id");
      if (!id) return;
      const findComment = data.find((comment) => comment.id === id);
      dispatch(clickFixBtn(findComment));
    },
    [data, dispatch]
  );

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  return (
    <CommentList
      onFixClick={onFixClick}
      onDeleteClick={onDeleteClick}
      comments={data.slice((page - 1) * numberPerPage, page * numberPerPage)}
    />
  );
}

export default CommentListContainer;
