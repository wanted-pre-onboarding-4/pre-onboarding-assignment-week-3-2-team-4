import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectPage } from "../actions/page";

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
	${({ active }) =>
		active
			? `
        background: gray;
        color: #fff;
        `
			: `cursor: pointer;`}
	margin-right: 3px;
`;

function PageList() {
	const commentsLen = useSelector((state) => state.comment).length;
  const pageNumber = useSelector(state => state.page)
  const dispatch = useDispatch()

  const pageArray = Array.from(
		{ length: Math.ceil(commentsLen / 4) },
		(_, idx) => idx
	);

	const pageClickHandler = (page) => {
		dispatch(selectPage(page))
	};

	return (
		<PageListStyle>
			{pageArray.map((page) => (
				<Page
					key={page}
					active={page === pageNumber}
					onClick={() => pageClickHandler(page)}
          disabled={page === pageNumber}
				>
					{page+1}
				</Page>
			))}
		</PageListStyle>
	);
}

export default PageList;
