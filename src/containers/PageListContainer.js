import PageList from "../components/PageList";

function PageListContainer({ totalPage, page, setPage }) {
  return <PageList totalPage={totalPage} page={page} setPage={setPage} />;
}

export default PageListContainer;
