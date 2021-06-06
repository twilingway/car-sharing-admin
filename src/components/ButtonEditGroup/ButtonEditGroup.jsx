import React from 'react';
import cn from 'classnames';

import { ReactComponent as Close } from '../../assets/close.svg';
import { ReactComponent as Vdots } from '../../assets/vdots.svg';

import s from './buttonEditGroup.module.scss';

function ButtonEditGroup({
  onDeleteClick,
  onEditClick,
  id,
  isDisabled,
  status,
}) {
  return (
    <>
      <button
        type="button"
        className={cn(s.button, s.edit)}
        onClick={() => onEditClick(id)}
        disabled={isDisabled}
      >
        <Vdots />
        <span>Изменить</span>
      </button>
      <button
        type="button"
        className={cn(s.button, s.delete, {
          [s.status]: status === 'cancelled',
        })}
        onClick={() => onDeleteClick(id)}
        disabled={isDisabled}
      >
        <Close />
        <span>Удалить</span>
      </button>
    </>
  );
}

export default ButtonEditGroup;
