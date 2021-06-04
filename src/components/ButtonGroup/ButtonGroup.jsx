import React from 'react';
import cn from 'classnames';

import { ReactComponent as Close } from '../../assets/close.svg';
import { ReactComponent as Vdots } from '../../assets/vdots.svg';
import { ReactComponent as CheckIcon } from '../../assets/check_icon.svg';

import s from './buttonGroup.module.scss';

function ButtonGroup({ onReadyClick, onCancelClick, onEditClick, id }) {
  return (
    <>
      <button
        type="button"
        className={cn(s.button, s.ready)}
        onClick={() => onReadyClick(id)}
      >
        <CheckIcon />
        <span>Готово</span>
      </button>
      <button
        type="button"
        className={cn(s.button, s.cancel)}
        onClick={() => onCancelClick(id)}
      >
        <Close />
        <span>Отмена</span>
      </button>
      <button
        type="button"
        className={cn(s.button, s.edit)}
        onClick={() => onEditClick(id)}
      >
        <Vdots />
        <span>Изменить</span>
      </button>
    </>
  );
}

export default ButtonGroup;
