import styled from "styled-components";

function PageList({ total, limit, page, setPage }) {
	const numPages = Math.ceil(total / limit);

	return (
		<>
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
				<Button
					onClick={() => setPage(page + 1)}
					disabled={page === numPages}
				>
					&gt;
				</Button>
			</Nav>
		</>
	);
}

const Nav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 4px;
	margin: 16px;
`;

const Button = styled.button`
	border: none;
	border-radius: 15px;
	padding: 15px;
	margin: 0;
	background: #fb923c;
	color: white;
	font-size: 1rem;

	&:hover {
		background: thistle;
		cursor: pointer;
		transform: translateY(-2px);
	}

	&[disabled] {
		display: none;
		background: grey;
		cursor: revert;
		transform: revert;
	}

	&[aria-current] {
		background: skyblue;
		font-weight: bold;
		cursor: revert;
		transform: revert;
	}
`;

export default PageList;
