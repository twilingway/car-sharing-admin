import React from 'react';
import Pagination from './Pagination';

function PaginationContainer({ count, limit, page }) {
  const handlePageClick = (event) => {
    console.log('handleNumberClick :>> ', event);
  };
  return (
    <Pagination
      count={count}
      limit={limit}
      page={page}
      onPageClick={handlePageClick}
    />
  );
}

export default PaginationContainer;
