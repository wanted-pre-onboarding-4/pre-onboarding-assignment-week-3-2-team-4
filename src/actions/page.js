import {
	GET_PAGENUMBER
} from "./types";

export const selectPage = (pageNumber) => async (dispatch) => {
		dispatch({
			type: GET_PAGENUMBER,
			payload: pageNumber,
		});
};

