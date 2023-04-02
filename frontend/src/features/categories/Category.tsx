import React, { useEffect, useState } from 'react';
import ButtonGroup from './ButtonGroup';

function Category(props:any) {
  const [name, setName] = useState(props.category.name);
  const [description, setDescription] = useState(props.category.description);
  const [isEditing, setIsEditing] = useState(props.categoryToEdit === props.category.id);
  useEffect(() => {
    setIsEditing(props.categoryToEdit === props.category.id);
  }, [props.categoryToEdit, props.category.id])

  function submitHandler(e:any) {
    e.preventDefault();
    const formData = {
      category: {
        id: props.category.id,
        name: name,
        description: description,
      }
    }
    props.submitEdit(formData)
    resetState();
  }

  function resetState() {
    setName(props.category.name);
    setDescription(props.category.description);
  }

  const nameElement = <h2 className="name text-start">{props.category.name}</h2>;
  const descriptionElement = <p className="card-text text-start">{props.category.description}</p>;
  const editableTitle = <input
      type="text"
      className="form-control text-start"
      value={name}
      onChange={(e) => setName(props.category.name)} />;
  const editableBody = <textarea
      className="form-control text-start"
      value={description}
      onChange={(e) => setDescription(e.target.value)} />;
  const submitButton = <button
      type="submit"
      className="form-control"
      onClick={(e) => submitHandler(e)}>Submit</button>;
  return <div>
    <div className="row">
      <div className="col-8">
        {isEditing ? editableTitle : nameElement}
      </div>
      <div className="col-4">
        <ButtonGroup
            category_id={props.category.id}
            dispatch={props.dispatch}
            toggleEditForm={props.toggleEditForm}
        />

      </div>
    </div>
    <div className="row">
      <div className="col-8">
        {isEditing ? editableBody : descriptionElement}
      </div>
    </div>
    <div className="row">
      <div className="col-2">
        {isEditing ? submitButton : ""}
      </div>
    </div>
  </div>;
}

export default Category;