import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import { getComments } from "../modules/comment";

function CommentListContainer() {
  const state = useSelector((state) => state.comment);
  console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, []);

  return <CommentList comments={state.data} />;
}

export default CommentListContainer;
