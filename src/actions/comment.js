import {
	GET_COMMENTS,
	CREATE_COMMENT,
	UPDATE_COMMENT,
	DELETE_COMMENT,
} from "./types";

import commentServices from "../services/comment";

export const createComment = (comment) => async (dispatch) => {
	try {
		const res = await commentServices.create(comment);
		dispatch({
			type: CREATE_COMMENT,
			payload: res.data,
		});
		return await res.data;
	} catch (err) {
		return await err;
	}
};

export const getComments = () => async (dispatch) => {
	try {
		const res = await commentServices.getAll();
		dispatch({
			type: GET_COMMENTS,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};

export const updateComment =
	(commentId, updatedComment) => async (dispatch) => {
		try {
			const res = await commentServices.update(commentId, updatedComment);

			dispatch({
				type: UPDATE_COMMENT,
				payload: updatedComment,
			});

			return await res.data;
		} catch (err) {
			return await err;
		}
	};

export const deleteComment = (commentId) => async (dispatch) => {
	try {
		await commentServices.delete(commentId);

		dispatch({
			type: DELETE_COMMENT,
			payload: { commentId },
		});
	} catch (err) {
		console.log(err);
	}
};
