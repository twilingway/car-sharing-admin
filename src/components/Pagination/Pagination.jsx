import React from 'react';
import cn from 'classnames';
import s from './pagination.module.scss';

function Pagination({ count, limit, page, onPageClick }) {
  const lastPage = Math.ceil(count / limit) - 1;

  const getPagination = () => {
    const elem = [];
    for (let i = 2; i < lastPage; i += 1) {
      if (page >= i - 1 && page <= i + 1) {
        elem.push(
          <div
            key={i}
            className={cn({ [s.active]: i === page })}
            role="button"
            tabIndex={0}
            onClick={() => onPageClick(i)}
            onKeyPress={() => onPageClick(i)}
          >
            {i}
          </div>,
        );
      }
    }
    return elem;
  };

  return (
    <div className={s.pagination}>
      <div
        key="prev"
        role="button"
        tabIndex={0}
        onClick={() => page > 1 && onPageClick(page - 1)}
        onKeyPress={() => page > 1 && onPageClick(page - 1)}
      >
        &laquo;
      </div>

      <div
        key={1}
        className={cn({ [s.active]: page === 1 })}
        role="button"
        tabIndex={0}
        onClick={() => onPageClick(1)}
        onKeyPress={() => onPageClick(1)}
      >
        1
      </div>
      {page >= 4 && <div className={s.noClick}>...</div>}
      {getPagination()}
      {page <= lastPage - 2 && <div className={s.noClick}>...</div>}
      <div
        key={lastPage}
        className={cn({ [s.active]: page === Math.ceil(count / limit) })}
        role="button"
        tabIndex={0}
        onClick={() => onPageClick(lastPage)}
        onKeyPress={() => onPageClick(lastPage)}
      >
        {lastPage}
      </div>
      <div
        key="next"
        role="button"
        tabIndex={0}
        onClick={() => page < lastPage && onPageClick(page + 1)}
        onKeyPress={() => page < lastPage && onPageClick(page + 1)}
      >
        &raquo;
      </div>
    </div>
  );
}

export default Pagination;
