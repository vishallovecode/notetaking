import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
const Form = ({ setFieldsValue, onSubmit, fieldsValue, index, setShowedit, setShowForm }) => {
	let [Valuedata, setData] = useState(fieldsValue)


	//Input field setup function
	const onchangeFormField = (fieldName) => {
		return (event) => {
			let updatedFieldsValue = { ...Valuedata };
			let currentFieldValue = event.target.value;
			updatedFieldsValue[fieldName] = currentFieldValue;
			setData(updatedFieldsValue);
			setFieldsValue(updatedFieldsValue)
		};

	};

	//   Handling Form visibility
	const Onsubmitoverall = () => {
		onSubmit("submit", index - 1)
		index && setShowedit(false)
		!index && setShowForm(false)
	}

	//discard button  functionality
	const clearall = () => {
		!index && setShowForm(false)
		index && setShowedit(false)
	}
	return (

		<div className="">

			<div className="">
				<div className="">
					<div className="form-group">
						<label className="control-label col-sm-2" for="Title">Title</label>
						<div className="col-sm-10">
							<input type="Title" className="form-control" id="Title"
								value={Valuedata.title}
								placeholder="Enter Title" name="Title" onChange={onchangeFormField("title")} />
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2" for="Content">Content</label>
						<div className="col-sm-10">
							<textarea className="form-control" rows="5" id="Content"
								value={Valuedata.content}
								onChange={onchangeFormField("content")}></textarea>
						</div>
					</div>
					<div className="form-group">
						<div style={{ display: "flex" }}>
							<Button type="submit" className="btn btn-primaryt" onClick={Onsubmitoverall}>Save</Button>
							<Button type="submit" className="btn btn-danger discard" onClick={clearall}>Discard</Button>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}
export default Form;