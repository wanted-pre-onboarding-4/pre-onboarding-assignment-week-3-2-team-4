import styled from "styled-components";

function PageList({ totalPage, page, setPage }) {
  return (
    <PageListStyle>
      {new Array(totalPage).fill(1).map((_, index) => (
        <Page
          id={index + 1}
          key={index + 1}
          page={page}
          onClick={() => {
            setPage(index + 1);
          }}
        >
          {index + 1}
        </Page>
      ))}
    </PageListStyle>
  );
}

export default PageList;

const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Page = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ page, id }) =>
    page === id &&
    `
    background: gray;
        color: #fff;
    `}
  margin-right: 3px;
`;
