import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createComment } from "../actions/comment";
import { selectPage } from "../actions/page";

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
	const formRef = useRef();
	const imgRef = useRef();
	const authorRef = useRef();
	const contentRef = useRef();
	const createadRef = useRef();

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		const comment = {
			profile_url: imgRef.current.value,
			author: authorRef.current.value,
			content: contentRef.current.value,
			createdAt: createadRef.current.value,
		};
		dispatch(createComment(comment));
		dispatch(selectPage(0));

		formRef.current.reset();
	};

	return (
		<FormStyle>
			<form ref={formRef} onSubmit={submitHandler}>
				<input
					ref={imgRef}
					type="text"
					name="profile_url"
					placeholder="https://picsum.photos/id/1/50/50"
					required
				/>
				<br />
				<input
					ref={authorRef}
					type="text"
					name="author"
					placeholder="작성자"
				/>
				<br />
				<textarea
					ref={contentRef}
					name="content"
					placeholder="내용"
					required
				></textarea>
				<br />
				<input
					ref={createadRef}
					type="date"
					name="creataedAt"
					placeholder="2022-09-18"
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
