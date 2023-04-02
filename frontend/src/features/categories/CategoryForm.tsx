import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createCategoryAsync} from './categorySlice';

function CategoryForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function submitHandler(e:any) {
    e.preventDefault();
    const formData = {
      category: {
        name: name,
        description: description,
      }
    }
    dispatch(createCategoryAsync(formData) as any);
    resetState();
  }

  function resetState() {
    setName('');
    setDescription('');
  }

  return <div>
    <h1>CategoryForm</h1>
    <form>
      <input
          type="text"
          className="form-control text-start"
          title="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
      />
      <textarea
          className="form-control text-start"
          title="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
      />
      <button
          type="submit"
          onClick={(e) => submitHandler(e)}>Submit</button>
    </form>
  </div>;
}

export default CategoryForm;