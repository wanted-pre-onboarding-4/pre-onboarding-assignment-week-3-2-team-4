import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteComments } from "../modules/comment";
import PageList from "./PageList";
function CommentList({ comments }) {
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limit;
	const dispatch = useDispatch();
	function HandleDelete(comment) {
		dispatch(deleteComments(comment.id));
	}
	return (
		<>
			{comments.slice(offset, offset + limit).map((comment, key) => (
				<Comment key={key}>
					<img src={comment.profile_url} alt="" />

					{comment.author}

					<CreatedAt>{comment.createdAt}</CreatedAt>

					<Content>{comment.content}</Content>

					<Button>
						<a>수정</a>
						<a onClick={() => HandleDelete(comment)}>삭제</a>
					</Button>

					<hr />
				</Comment>
			))}
			{comments && (
				<PageList
					total={comments.length}
					limit={limit}
					page={page}
					setPage={setPage}
				/>
			)}
		</>
	);
}

export default CommentList;

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
