import React, { useEffect } from "react";
import CommentListContainer from "./containers/CommentListContainer";
import PageListContainer from "./containers/PageListContainer";
import FormContainer from "./containers/FormContainer";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getComments } from "./modules/comment";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const { data: comments } = useSelector((state) => state.comment);
  const [page, setPage] = useState(1);
  const numPages = Math.ceil(comments.length / 4);

  useEffect(() => {
    dispatch(getComments());
  }, []);

  return (
    <div>
      <CommentListContainer
        setIsEdit={setIsEdit}
        comments={comments.slice(4 * (page - 1), page * 4)}
        setPage={setPage}
      />
      <PageListContainer
        total={comments.length}
        numPages={numPages}
        page={page}
        setPage={setPage}
      />
      <FormContainer setPage={setPage} setIsEdit={setIsEdit} isEdit={isEdit} />
    </div>
  );
}

export default App;
