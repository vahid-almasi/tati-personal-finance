import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {useAppSelector } from "../../app/hooks";
import Category from './Category';
import CategoryForm from './CategoryForm';
import { fetchCategoriesAsync, selectCategories, selectStatus, Statuses, updateCategoryAsync } from './categorySlice';

function Categories() {
  const categories = useAppSelector(selectCategories);
  const status = useAppSelector(selectStatus)
  const dispatch = useDispatch();

  const [categoryToEdit, setCategoryToEdit] = useState(0);

  useEffect(() => {
    dispatch(fetchCategoriesAsync() as any);
  }, [dispatch])

  function toggleEditForm(category_id?:number) {
    if (categoryToEdit === category_id) {
      setCategoryToEdit(0);
    } else {
      setCategoryToEdit(category_id as number);
    }
  }

  function submitEdit(formData:any) {
    dispatch(updateCategoryAsync(formData) as any);
    toggleEditForm();
  }

  let contents;

  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>
  } else {
    contents = <div className="card">
      <div className="card-description">
        <h3>{status}</h3>
        <CategoryForm />
        {categories && categories.length > 0 && categories.map(category => {
          return <div key={category.id} style={{margin:"5em"}}>
            <Category
                dispatch={dispatch}
                category={category}
                toggleEditForm={() => toggleEditForm(category.id)}
                categoryToEdit={categoryToEdit}
                submitEdit={submitEdit}
            />
          </div>
        })}
      </div>
    </div>
  }

  return <div><h1>Categories</h1>
    {contents}
  </div>
}

export default Categories;