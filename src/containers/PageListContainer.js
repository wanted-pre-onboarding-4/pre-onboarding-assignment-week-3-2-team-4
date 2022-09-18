import React from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PageList from "../components/PageList";
import { pageClick } from "../modules/comment";

function PageListContainer() {
  const { data, page, numberPerPage } = useSelector(({ comment }) => comment);

  const dispatch = useDispatch();

  const onPageClick = useCallback((e) => {
    const id = +e.target.getAttribute("data-id");
    dispatch(pageClick(id));
  }, []);

  return (
    <PageList
      onPageClick={onPageClick}
      curPage={page}
      allPage={Math.ceil(data.length / numberPerPage)}
    />
  );
}

export default PageListContainer;
