const INITIALIZE = "editList/INITIALIZE";
const CLICK_FIX_BTN = "editList/CLICK_FIX_BTN";

export const initializeEditComment = () => ({
  type: INITIALIZE,
});

export const clickFixBtn = ({
  id,
  profile_url,
  author,
  content,
  createdAt,
}) => ({
  type: CLICK_FIX_BTN,
  info: { id, profile_url, author, content, createdAt },
});

const initialState = {
  id: "",
  profile_url: "",
  author: "",
  content: "",
  createdAt: "",
};

const targetToEditReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        id: "",
        profile_url: "",
        author: "",
        content: "",
        createdAt: "",
      };
    case CLICK_FIX_BTN:
      return {
        ...state,
        ...action.info,
      };
    default:
      return state;
  }
};

export default targetToEditReducer;
