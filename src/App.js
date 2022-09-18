import React from "react";
import CommentListContainer from "./containers/CommentListContainer";
import PageListContainer from "./containers/PageListContainer";
import FormContainer from "./containers/FormContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getComments } from "./modules/comment";

function App() {
  return (
    <div>
      <CommentListContainer />
      <PageListContainer />
      <FormContainer />
    </div>
  );
}

export default App;
