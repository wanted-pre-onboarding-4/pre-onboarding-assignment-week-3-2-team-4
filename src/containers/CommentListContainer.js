import CommentList from "../components/CommentList";
import { useDispatch } from "react-redux";
import { getComments, deleteComment } from "../modules/comment";

function CommentListContainer({ comment, setPage }) {
  const dispatch = useDispatch();

  const onClickDelete = async (event) => {
    dispatch(deleteComment(event.target.id));
    dispatch(getComments());
    setPage(1);
  };

  return <CommentList comment={comment} onClickDelete={onClickDelete} />;
}

export default CommentListContainer;
