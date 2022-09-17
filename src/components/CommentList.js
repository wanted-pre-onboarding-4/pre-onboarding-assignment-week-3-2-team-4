import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteComment } from "../actions/comment";
import { selectPage } from "../actions/page";

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

function CommentList({ comments }) {
  const dispatch = useDispatch()
  const pageNumber = useSelector(state => state.page)

  const deleteHandler = (id) => {
    dispatch(deleteComment(id))
    dispatch(selectPage(0))
  }

  const startPoint = pageNumber * 4

	return comments.slice(startPoint, startPoint +4).map(({ profile_url, author, createdAt, content , id} ) => (
		<Comment key={id}>
			<img src={profile_url} alt="user profile" />

			{author}

			<CreatedAt>{createdAt}</CreatedAt>

			<Content>{content}</Content>

			<Button>
				<a>수정</a>
				<a onClick={()=>deleteHandler(id)}>삭제</a>
			</Button>

			<hr />
		</Comment>
	));
}

export default CommentList;
