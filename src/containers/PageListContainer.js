import React from "react";
import { useSelector } from "react-redux";
import PageList from "../components/PageList";

function PageListContainer() {
  const { data } = useSelector((state) => state.comment);

  return <PageList allPage={Math.ceil(data.length / 4)} />;
}

export default PageListContainer;
