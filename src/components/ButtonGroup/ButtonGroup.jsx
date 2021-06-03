import React from 'react';
import Button from '../Button';

import { ReactComponent as Close } from '../../assets/close.svg';
import { ReactComponent as Vdots } from '../../assets/vdots.svg';
import { ReactComponent as CheckIcon } from '../../assets/check_icon.svg';

import s from './buttonGroup.module.scss';

function ButtonGroup({ onReadyClick, onCancelClick, onEditClick }) {
  return (
    <>
      <Button className={s.button} name="Готово" Icon={CheckIcon} />
      <Button className={s.button} name="Отмена" Icon={Close} />
      <Button className={s.button} name="Изменить" Icon={Vdots} />
    </>
  );
}

export default ButtonGroup;
