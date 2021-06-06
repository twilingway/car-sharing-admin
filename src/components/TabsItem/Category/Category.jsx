import React from 'react';
import ButtonEditGroup from '../../ButtonEditGroup';

import s from './category.module.scss';

function Category({
  category,
  onEditClick,
  editable,
  onChangeName,
  onChangeDescription,
  editNameValue,
  editDescriptionValue,
}) {
  return (
    <div className={s.content}>
      {category?.map((item) => (
        <div key={item.id} className={s.row}>
          <div className={s.params}>
            <div className={s.name}>
              <span>Название:</span>
              <input
                disabled={item?.id !== editable}
                value={item?.id === editable ? editNameValue : item.name}
                onChange={(value) => onChangeName(value)}
              />
            </div>
            <div className={s.description}>
              <span>Описание:</span>
              <input
                disabled={item?.id !== editable}
                value={
                  item?.id === editable
                    ? editDescriptionValue
                    : item.description
                }
                onChange={(value) => onChangeDescription(value)}
              />
            </div>
          </div>
          <div className={s.editGroup}>
            <ButtonEditGroup onEditClick={() => onEditClick(item.id)} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
