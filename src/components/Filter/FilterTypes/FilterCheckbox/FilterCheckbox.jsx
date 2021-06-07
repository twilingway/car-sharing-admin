/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './filterCheckbox.module.scss';

function FilterCheckbox({
  id,
  checkboxs,
  groupName,
  onChangeBox,
  defaultChecked,
  isColumn,
  isDisabled,
}) {
  const [active, setActive] = useState({});

  useEffect(() => {
    if (defaultChecked) {
      setActive((prevState) => {
        const tempActive = { ...prevState };
        tempActive[defaultChecked] = true;
        return { ...tempActive };
      });
      checkboxs.map(
        (item) =>
          item.name === defaultChecked &&
          item[item.id] !== true &&
          onChangeBox(item.id),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeBox = (event) => {
    onChangeBox(event.target.id);

    setActive((prevState) => {
      const tempActive = { ...prevState };
      tempActive[event.target.value] = event.target.checked;

      return { ...tempActive };
    });
  };

  return (
    <section className={s.type}>
      <fieldset
        id={id}
        className={cn(s.group, { [s.column]: isColumn === true })}
        onChange={handleChangeBox}
      >
        <legend>{groupName}</legend>
        {checkboxs &&
          checkboxs.map((checkbox) => (
            <label
              htmlFor={checkbox.id}
              key={checkbox.id}
              className={s.container}
            >
              <input
                disabled={isDisabled}
                id={checkbox.id}
                type="checkbox"
                name={groupName}
                value={checkbox.name}
                defaultChecked={
                  defaultChecked === checkbox.name || checkbox[checkbox.id]
                }
              />
              <span
                className={cn(s.checkmark, {
                  [s.active]:
                    active[checkbox.name] === true || checkbox[checkbox.id],
                })}
              />
              {checkbox.name}
            </label>
          ))}
      </fieldset>
    </section>
  );
}

export default FilterCheckbox;
