import React from 'react';
import cn from 'classnames';

import { ReactComponent as Close } from '../../assets/close.svg';
import { ReactComponent as Vdots } from '../../assets/vdots.svg';
import { ReactComponent as CheckIcon } from '../../assets/check_icon.svg';

import s from './buttonGroup.module.scss';

function ButtonGroup({
  onReadyClick,
  onCancelClick,
  onEditClick,
  id,
  isDisabled,
  status,
}) {
  return (
    <>
      <button
        type="button"
        className={cn(s.button, s.ready, {
          [s.status]: status === 'confirmed',
        })}
        onClick={() => onReadyClick(id)}
        disabled={isDisabled}
      >
        <CheckIcon />
        <span>Готово</span>
      </button>
      <button
        type="button"
        className={cn(s.button, s.cancel, {
          [s.status]: status === 'cancelled',
        })}
        onClick={() => onCancelClick(id)}
        disabled={isDisabled}
      >
        <Close />
        <span>{status === 'cancelled' ? 'Отменен' : 'Отмена'}</span>
      </button>
      <button
        type="button"
        className={cn(s.button, s.edit)}
        onClick={() => onEditClick(id)}
        disabled={isDisabled}
      >
        <Vdots />
        <span>Изменить</span>
      </button>
    </>
  );
}

export default ButtonGroup;
