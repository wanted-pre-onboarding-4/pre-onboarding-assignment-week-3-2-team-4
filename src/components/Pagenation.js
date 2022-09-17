import React from "react";
import styled from "styled-components";

function Pagination({ numPages, page, setPage }) {
  return (
    <Nav>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 30px;
`;

const Button = styled.button`
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  padding: 10px 16px;
  margin: 0;
  color: #212121;
  font-size: 1rem;
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
  &[disabled] {
    background: white;
    color: #bebebe;
    cursor: revert;
    transform: revert;
  }
  &[aria-current] {
    background: #ebebeb;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
