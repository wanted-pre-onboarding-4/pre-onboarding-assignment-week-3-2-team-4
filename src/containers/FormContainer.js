import React from "react";
import Form from "../components/Form";

function FormContainer({ setIsEdit, isEdit }) {
	return <Form setIsEdit={setIsEdit} isEdit={isEdit} />;
}

export default FormContainer;
