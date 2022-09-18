import React, { useState } from "react";
import styled from "styled-components";
import { postComments } from "../modules/comment";
import { useDispatch } from "react-redux";
function Form() {
	const [profileUrl, setProfileUrl] = useState("");
	const [author, setAuthor] = useState("");
	const [content, setContent] = useState("");
	const [createdAt, setCreatedAt] = useState("");

	const dispatch = useDispatch();

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(postComments({ profileUrl, author, content, createdAt }));
		e.target.reset();
	}

	return (
		<FormStyle>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="profile_url"
					placeholder="https://picsum.photos/id/1/50/50"
					onChange={(e) => setProfileUrl(e.target.value)}
					required
				/>
				<br />
				<input
					type="text"
					name="author"
					placeholder="작성자"
					onChange={(e) => setAuthor(e.target.value)}
				/>
				<br />
				<textarea
					name="content"
					placeholder="내용"
					onChange={(e) => setContent(e.target.value)}
					required
				></textarea>
				<br />
				<input
					type="text"
					name="createdAt"
					placeholder="2020-05-30"
					onChange={(e) => setCreatedAt(e.target.value)}
					required
				/>
				<br />
				<button>등록</button>
			</form>
		</FormStyle>
	);
}

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

export default Form;
