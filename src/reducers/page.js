import {
	GET_PAGENUMBER
} from "../actions/types";

const initialState = 0;

const commentReducerFn = (page = initialState, action) => {
	const { type, payload } = action;

	if(type === GET_PAGENUMBER) {
        return payload
    }
    return page
};

export default commentReducerFn;
