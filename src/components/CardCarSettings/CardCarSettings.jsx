/* eslint-disable react/prop-types */
import React from 'react';
// import cn from 'classnames';
import FilterCheckbox from '../Filter/FilterTypes/FilterCheckbox';

import s from './cardCarSettings.module.scss';
import Button from '../Button';

function CardCarSettings({
  onChangeServices,
  onClickSaveButton,
  onClickCanselButton,
  onClickDeleteButton,
}) {
  return (
    <div className={s.carSettings}>
      <div className={s.container}>
        <div className={s.title}>Настройки автомобиля</div>
        <div className={s.row}>
          <div className={s.input}>
            <div className={s.label}>Модель автомобиля</div>
            <input
              type="text"
              name="carModel"
              placeholder="Введите модель автомобиля"
            />
          </div>
          <div className={s.input}>
            <div className={s.label}>Тип автомобиля</div>
            <input
              className={s.inputError}
              type="text"
              name="carType"
              placeholder="Введите тип автомобиля"
            />
            <div className={s.error}>Пример ошибки</div>
          </div>
          <div className={s.input}>
            <div className={s.label}>Доступные цвета</div>
            <div className={s.availableColor}>
              <input
                className={s.carColor}
                type="text"
                name="carColor"
                placeholder="Введите цвет автомобиля"
              />
              <button type="button" className={s.carColorButton}>
                <div>
                  <span> +</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={s.filters}>
          <FilterCheckbox
            checkboxs={[
              {
                id: 'isFullTank',
                isFullTank: true,
                name: 'Красный',
                price: ', 500р',
              },
              {
                id: 'isNeedChildChair',
                isNeedChildChair: false,
                name: 'Белый',
                price: ', 200р',
              },
              {
                id: 'isRightWheel',
                isRightWheel: false,
                name: 'Черный',
                price: ', 1600р',
              },
            ]}
            onChangeBox={onChangeServices}
            // groupName="Доступные цвета"
            defaultChecked={
              'Красный'
              //   orderRedux.isFullTank === null && 'Полный бак'
            }
            isColumn
          />
        </div>
        <div className={s.buttonsBar}>
          <div className={s.buttonGroup}>
            <Button
              name="Сохранить"
              onClickHandler={onClickSaveButton}
              className={s.save}
            />
            <Button
              name="Отменить"
              onClickHandler={onClickCanselButton}
              dataBackground="gray"
            />
          </div>
          <Button
            name="Удалить"
            onClickHandler={onClickDeleteButton}
            dataBackground="red"
          />
        </div>
      </div>
    </div>
  );
}

export default CardCarSettings;
