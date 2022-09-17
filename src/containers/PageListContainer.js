import React from "react";

import Pagination from "../components/Pagenation";

function PageListContainer({ numPages, total, page, setPage }) {
  return (
    <Pagination
      numPages={numPages}
      total={total}
      limit={4}
      page={page}
      setPage={setPage}
    />
  );
}

export default PageListContainer;
