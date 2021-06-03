import React from 'react';
import cn from 'classnames';

import { ReactComponent as Ellipse } from '../../assets/ellipse.svg';

import s from './button.module.scss';

function Button({
  name,
  disabled,
  loading,
  className,
  dataBackground,
  onClickHandler,
  Icon,
}) {
  return (
    <button
      type="button"
      className={cn(s.button, className, {
        [s.disable]: disabled,

        // [s.loading]: loading,
      })}
      disabled={disabled}
      data-background={dataBackground}
      onClick={onClickHandler}
    >
      {Icon && (
        <span>
          <Icon />
        </span>
      )}
      <span
        className={cn(s.text, {
          [s.loading]: loading,
        })}
      >
        {loading ? <Ellipse /> : name}
      </span>
    </button>
  );
}

export default Button;
