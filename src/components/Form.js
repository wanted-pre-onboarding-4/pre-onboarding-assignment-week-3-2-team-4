import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createComment, updateComment } from "../actions/comment";
import { selectPage } from "../actions/page";

import CommentServices from "../services/comment";

const FormStyle = styled.div`
	& > form {
		padding: 0 10px;
		margin-bottom: 50px;
	}
	& > form > textarea {
		padding: 5px 1%;
		width: 98%;
		height: 50px;
	}
	& > form > input[type="text"] {
		padding: 5px 1%;
		width: 98%;
		margin-bottom: 10px;
	}
	& > form > button {
		padding: 0.375rem 0.75rem;
		border-radius: 0.25rem;
		border: 1px solid lightgray;
		cursor: pointer;
	}
`;

function Form() {
	const [formData, setFormData] = useState({
		profile_url: "",
		author: "",
		content: "",
		createdAt: "",
	});

	const commentId = useSelector((state) => state.comment.selectedCommentId);
	useEffect(() => {
		const getComment = async () => {
			const res = await CommentServices.get(commentId);
			setFormData(res.data);
		};
		commentId && getComment();
	}, [commentId]);

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		if (!commentId) {
			console.log(formData);
			dispatch(createComment(formData));
			dispatch(selectPage(0));
		} else dispatch(updateComment(commentId, formData));

		setFormData({
			profile_url: "",
			author: "",
			content: "",
			createdAt: "",
		});
	};

	return (
		<FormStyle>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					name="profile_url"
					placeholder="https://picsum.photos/id/1/50/50"
					value={formData.profile_url}
					onChange={(e) =>
						setFormData((pre) => {
							return { ...pre, profile_url: e.target.value };
						})
					}
					required
				/>
				<br />
				<input
					type="text"
					name="author"
					placeholder="작성자"
					value={formData.author}
					onChange={(e) =>
						setFormData((pre) => {
							return { ...pre, author: e.target.value };
						})
					}
					required
				/>
				<br />
				<textarea
					name="content"
					placeholder="내용"
					value={formData.content}
					onChange={(e) =>
						setFormData((pre) => {
							return { ...pre, content: e.target.value };
						})
					}
					required
				></textarea>
				<br />
				<input
					type="date"
					name="creataedAt"
					placeholder="2022-09-18"
					value={formData.createdAt}
					onChange={(e) =>
						setFormData((pre) => {
							return { ...pre, createdAt: e.target.value };
						})
					}
					min="2022-09-18"
					// value="2022-09-18"
					required
				/>
				<br />
				<button type="submit">등록</button>
			</form>
		</FormStyle>
	);
}

export default Form;
