import React from 'react';
import Button from '../Button';
import Pagination from '../Pagination';

import s from './tabs.module.scss';

function Tabs() {
  return (
    <div className={s.tabs}>
      <nav className={s.items}>
        <a href="#tab_01" className={s.item}>
          <span>Категории</span>
        </a>
        <a href="#tab_02" className={s.item}>
          <span>Города</span>
        </a>
        <a href="#tab_03" className={s.item}>
          <span>Пункты</span>
        </a>
        <a href="#tab_04" className={s.item}>
          <span>Цены</span>
        </a>
        <a href="#tab_05" className={s.item}>
          <span>Тарифы</span>
        </a>
        <a href="#tab_06" className={s.item}>
          <span>Статусы</span>
        </a>
      </nav>
      <div className={s.addButton}>
        <Button name="Добавить" />
      </div>
      <div className={s.body}>
        <div id="tab_01" className={s.block}>
          Первая вкладка Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Dicta fuga, inventore alias nostrum, numquam expedita,
          praesentium est cum atque consequatur pariatur fugiat maiores aliquam
          natus ut rem. Asperiores, autem pariatur?
        </div>
        <div id="tab_02" className={s.block}>
          Вторая вкладка Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Pariatur quidem debitis eveniet minus dignissimos officia magnam
          consequuntur maxime. Ex quidem, placeat nihil dolorum ullam impedit
          vitae explicabo nesciunt qui cum beatae eos minima porro? Accusamus
          autem iusto natus? Fugiat eos nesciunt autem dolore blanditiis facilis
          ullam, tenetur voluptatibus nihil velit.
        </div>
        <div id="tab_03" className={s.block}>
          Третья вкладка Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Eveniet id molestias labore, veniam nam error at? Blanditiis hic
          nesciunt veniam!
        </div>
        <div id="tab_04" className={s.block}>
          Четвертая вкладка Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Eveniet id molestias labore, veniam nam error at? Blanditiis hic
          nesciunt veniam!
        </div>
        <div id="tab_05" className={s.block}>
          Пятая вкладка Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Eveniet id molestias labore, veniam nam error at? Blanditiis hic
          nesciunt veniam!
        </div>
        <div id="tab_06" className={s.block}>
          Шестая вкладка Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Eveniet id molestias labore, veniam nam error at? Blanditiis hic
          nesciunt veniam!
        </div>
      </div>
      <div className={s.pagination}>
        <Pagination />
      </div>
    </div>
  );
}

export default Tabs;
