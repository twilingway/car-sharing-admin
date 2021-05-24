import React from 'react';
import cn from 'classnames';
import s from './pagination.module.scss';

function Pagination({ count, limit, page, onPageClick }) {
  const getPagination = () => {
    console.log('object :>> ', count, limit, page);
    const elem = [];
    for (let i = 1; i <= count / limit; i += 1) {
      elem.push(
        <div
          className={cn({ [s.active]: i.toString() === page })}
          role="button"
          tabIndex={0}
          onClick={() => onPageClick(i)}
          onKeyPress={() => onPageClick(i)}
        >
          {i}
        </div>,
      );
    }
    return elem;
  };

  return (
    <div className={s.pagination}>
      <div>&laquo;</div>
      {getPagination()}
      <div>&raquo;</div>
    </div>
  );
}

export default Pagination;
