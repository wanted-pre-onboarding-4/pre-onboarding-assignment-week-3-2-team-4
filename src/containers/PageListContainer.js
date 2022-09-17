import PageList from "../components/PageList";

function PageListContainer({ totalPage, setPage }) {
  return <PageList totalPage={totalPage} setPage={setPage} />;
}

export default PageListContainer;
