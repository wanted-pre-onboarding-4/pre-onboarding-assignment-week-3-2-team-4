import React, { createContext, useState } from "react";
import CommentListContainer from "./containers/CommentListContainer";
import FormContainer from "./containers/FormContainer";

function App() {
	const [isEdit, setIsEdit] = useState(false);

	return (
		<div>
			<CommentListContainer setIsEdit={setIsEdit} />
			<FormContainer setIsEdit={setIsEdit} isEdit={isEdit} />
		</div>
	);
}

export default App;
