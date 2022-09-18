import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteComments } from "../modules/comment";
import { getComments } from "../modules/comment";

// 임시 데이터 입니다. 코드 작성시 data 부분을 지워주세요

function CommentList({ comments }) {
	const dispatch = useDispatch();

	function HandleDelete(comment) {
		console.log(comment.id);
		dispatch(deleteComments(comment.id));
	}
	return comments.map((comment, key) => (
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
	));
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
