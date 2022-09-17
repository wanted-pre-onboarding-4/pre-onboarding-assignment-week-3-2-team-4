import React from "react";
import CommentListContainer from "./containers/CommentListContainer";
import PageListContainer from "./containers/PageListContainer";
import FormContainer from "./containers/FormContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "./modules/comment";
import { PER_PAGE } from "./consts/index";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const [editData, setEditData] = useState(null);

  const { data, loading, error } = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  const totalPage = Math.ceil(data?.length / PER_PAGE);

  const onClickToEdit = (event) => {
    setEditData(JSON.parse(event.target.id));
  };

  useEffect(() => {
    dispatch(getComments());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {error && <div>error ...</div>}
      {loading && <div>loading ...</div>}
      {data && (
        <>
          {data.slice(PER_PAGE * (page - 1), page * PER_PAGE).map((comment) => (
            <CommentListContainer
              comment={comment}
              key={comment.id}
              setPage={setPage}
              onClickToEdit={onClickToEdit}
            />
          ))}

          <PageListContainer
            totalPage={totalPage}
            page={page}
            setPage={setPage}
          />
        </>
      )}
      <FormContainer
        setPage={setPage}
        editData={editData}
        setEditData={setEditData}
      />
    </div>
  );
}

export default App;
