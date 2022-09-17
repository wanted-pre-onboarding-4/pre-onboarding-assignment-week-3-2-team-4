import React from "react";
import CommentListContainer from "./containers/CommentListContainer";
import PageListContainer from "./containers/PageListContainer";
import FormContainer from "./containers/FormContainer";
import { useState } from "react";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <CommentListContainer setIsEdit={setIsEdit} />
      <PageListContainer />
      <FormContainer setIsEdit={setIsEdit} isEdit={isEdit} />
    </div>
  );
}

export default App;
