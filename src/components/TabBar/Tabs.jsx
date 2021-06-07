import React, { useState } from 'react';
import cn from 'classnames';
import Button from '../Button';
import Pagination from '../Pagination';

import s from './tabs.module.scss';

function Tabs({ tabs }) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={s.tabs}>
      <nav className={s.items}>
        {tabs?.map((tab) => (
          <button
            key={`${tab.id}tab'`}
            type="button"
            className={cn(s.item, { [s.active]: toggleState === tab.id })}
            onClick={() => toggleTab(tab.id)}
          >
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
      <div className={s.addButton}>
        <Button name="Добавить" />
      </div>
      <div className={s.body}>
        {tabs?.map((item) => (
          <div
            key={`${item.id}block'`}
            className={cn(s.block, {
              [s.activeBlock]: toggleState === item.id,
            })}
          >
            {item.content}
          </div>
        ))}
      </div>
      <div className={s.pagination}>
        <Pagination />
      </div>
    </div>
  );
}

export default Tabs;
