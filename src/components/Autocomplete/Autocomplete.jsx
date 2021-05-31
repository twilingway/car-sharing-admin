/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import s from './autocomplete.module.scss';

const colourStyles = {
  control: (styles) => ({
    ...styles,
    cursor: 'pointer',
    backgroundColor: 'white',
    // border: 'none',
    borderRadius: '4px',
    border: '0.5px solid #BECAD6',
    // borderBottom: '1px solid #999999',
    width: 110,
    fontWeight: 300,
    fontSize: '11px',
    lineHeight: '13px',
    // minHeight: 21,
    // boxShadow: 'none !important',
    ':hover': { borderColor: '#0EC261' },
    ':focus': { borderColor: '#0EC261' },
  }),
  input: (styles) => ({
    ...styles,
    height: '30px',
    fontWeight: 300,
    fontSize: '11px',
    lineHeight: '13px',
    padding: '8px 14px',
    margin: 0,
  }),
  // dropdownIndicator: () => ({ display: 'none' }),
  indicatorSeparator: () => ({ display: 'none' }),
  clearIndicator: () => ({
    display: 'none',
    color: '#EEEEEE',
    transition: 'all 100ms',
    ':hover': { color: '#121212' },
  }),
  valueContainer: () => ({
    padding: '2px',
  }),
  menu: (styles) => ({
    ...styles,
    fontWeight: 300,
    fontSize: 14,
    lineHeight: '16px',
    padding: 0,
    margin: 0,
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isDisabled
      ? 'transparent'
      : isSelected
      ? '#EEEEEE'
      : isFocused
      ? 'transparent'
      : 'transparent',
    color: '#999999',

    ':hover': {
      ...styles[':hover'],
      color: '#0EC261',
      cursor: 'pointer',
    },
    ':active': {
      ...styles[':active'],
      backgroundColor: '#EEEEEE',
      color: '#0EC261',
    },
  }),
};

function Autocomplete({
  options,
  onSelect,
  label,
  placeholder,
  isDisabled,
  value,
}) {
  const [selectedValue, setSelectedValue] = useState({});

  const handleSelect = (elem) => {
    onSelect(elem);
  };

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  useEffect(() => {
    setSelectedValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.autocomplete}>
      {/* <span className={s.label}>{label}</span> */}
      <div className={s.container}>
        <Select
          value={selectedValue}
          options={options}
          styles={colourStyles}
          isDisabled={isDisabled}
          isClearable
          isSearchable
          placeholder={placeholder}
          onChange={(elem) => handleSelect(elem)}
        />
      </div>
    </div>
  );
}

export default Autocomplete;
