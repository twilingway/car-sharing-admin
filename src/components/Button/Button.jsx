import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  dataBackground: PropTypes.string,
  onClickHandler: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  loading: false,
  className: null,
  dataBackground: null,
  onClickHandler: null,
};
export default Button;
