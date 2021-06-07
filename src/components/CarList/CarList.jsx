/* eslint-disable react/no-array-index-key */
import React from 'react';
import Autocomplete from '../Autocomplete/Autocomplete';
import Button from '../Button';
import Image from '../ImageLazy';
import Pagination from '../Pagination/Pagination';

import s from './carList.module.scss';

function CarList({ carList, onPageClick }) {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.content}>
          <div className={s.header}>
            <div className={s.filters}>
              <div className={s.select}>
                <Autocomplete />
              </div>
              <div className={s.select}>
                <Autocomplete />
              </div>
            </div>
            <div className={s.groupButtons}>
              <Button dataBackground="red" name="Сбросить" />
              <Button name="Принять" />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Модель</th>
                <th>Категория</th>
                <th>Фото</th>
                <th>Описание</th>
                <th>Цвет</th>
                <th>Цена мин</th>
                <th>Цена макс</th>
              </tr>
            </thead>
            <tbody>
              {carList &&
                carList.data.map((item, index) => (
                  <tr key={index + item?.name}>
                    <td>{item?.name}</td>
                    <td>{item?.categoryId?.name}</td>
                    <td>
                      {/* <img
                        src={`${process.env.REACT_APP_BASE_URL}${item.thumbnail.path}`}
                        alt={item.name}
                      /> */}
                      <Image
                        src={item.thumbnail.path}
                        alt={item?.categoryId?.name}
                      />
                    </td>
                    <td>{item.description}</td>
                    <td>{item.colors[0]}</td>
                    <td>{item.priceMin}</td>
                    <td>{item.priceMax}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <footer>
            <Pagination
              count={carList.count}
              limit={carList.limit}
              page={carList.page}
              onPageClick={onPageClick}
            />
          </footer>
        </div>
      </div>
    </div>
  );
}

export default CarList;
