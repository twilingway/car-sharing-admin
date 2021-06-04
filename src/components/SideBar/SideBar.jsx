import React from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';
import { ReactComponent as PanSVG } from '../../assets/pan.svg';
import { ReactComponent as PostSVG } from '../../assets/posts.svg';

import { ReactComponent as NewPostSVG } from '../../assets/newPosts.svg';
import s from './sideBar.module.scss';

function SideBar() {
  return (
    <div className={s.sidebar}>
      <div className={s.logo}>
        <LogoSVG className={s.svg} />
        <span className={s.name}>Need for drive</span>
      </div>
      <ul className={s.items}>
        <Link to="/admin/card">
          <li
            className={cn(s.item, {
              [s.item_active]: true,
            })}
          >
            <div className={s.sidebarSvg}>
              <PanSVG />
            </div>
            <span> Карточка автомобиля</span>
          </li>
        </Link>
        <Link to="/admin/list">
          <li
            className={cn(s.item, {
              [s.item_active]: false,
            })}
          >
            <div className={s.sidebarSvg}>
              <PostSVG />
            </div>
            <span> Список авто</span>
          </li>
        </Link>
        <Link to="/admin/order">
          <li
            className={cn(s.item, {
              [s.item_active]: false,
            })}
          >
            <div className={s.sidebarSvg}>
              <NewPostSVG />
            </div>
            <span>Заказы</span>
          </li>
        </Link>
        <Link to="/admin/error">
          <li
            className={cn(s.item, {
              [s.item_active]: false,
            })}
          >
            Ошибка 500
          </li>
        </Link>

        <Link to="/admin/entity">
          <li
            className={cn(s.item, {
              [s.item_active]: false,
            })}
          >
            Сущности
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
