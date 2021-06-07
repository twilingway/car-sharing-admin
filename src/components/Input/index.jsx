import React from 'react';
import cn from 'classnames';

import s from './input.module.scss';

function Input({
  value,
  label,
  type = 'text',
  name,
  onChange,
  required,
  placeholder,
}) {
  return (
    <div className={s.root}>
      <p className={s.label}>{label}</p>
      <input
        className={cn(s.input, { [s.valid]: value.length > 0 })}
        value={value}
        type={type}
        name={name}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
