import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../../store/selectors/categorySelectors';
import fetchCategory from '../../../store/thunks/categoryThunks';
import Category from './Category';

function CategoryContainer() {
  const dispatch = useDispatch();
  const categoryReducer = useSelector(selectCategory);
  const [editable, setEditable] = useState(null);
  const [editNameValue, setEditNameValue] = useState(null);
  const [editDescriptionValue, setEditDescriptionValue] = useState(null);

  const handleEditClick = (id) => {
    setEditable(id);
    setEditNameValue(null);
    setEditDescriptionValue(null);
  };

  const handleChangeName = (event) => {
    setEditNameValue(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setEditDescriptionValue(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Category
      category={categoryReducer}
      onEditClick={handleEditClick}
      onChangeName={handleChangeName}
      onChangeDescription={handleChangeDescription}
      editable={editable}
      editNameValue={editNameValue}
      editDescriptionValue={editDescriptionValue}
    />
  );
}

export default CategoryContainer;
