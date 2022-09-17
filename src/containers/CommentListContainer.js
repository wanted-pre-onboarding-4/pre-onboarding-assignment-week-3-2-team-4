import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getComments } from "../actions/comment";
import CommentList from "../components/CommentList";

function CommentListContainer() {
	const comemnts = useSelector((state) => state.comment);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getComments());
	}, []);

	return (
			<CommentList comments={comemnts} />
	);
}

export default CommentListContainer;
