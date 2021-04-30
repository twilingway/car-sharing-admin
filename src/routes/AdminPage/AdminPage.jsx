/* eslint-disable no-unused-vars */
import React from 'react';
import cn from 'classnames';
import { ReactComponent as LogoSVG } from '../../assets/logo.svg';

import { ReactComponent as CheckSVG } from '../../assets/check_icon.svg';

import { ReactComponent as SearchSVG } from '../../assets/search.svg';

import { ReactComponent as PanSVG } from '../../assets/pan.svg';
import { ReactComponent as PostSVG } from '../../assets/posts.svg';

import { ReactComponent as NewPostSVG } from '../../assets/newPosts.svg';
import { ReactComponent as NotifySVG } from '../../assets/notifications.svg';
import { ReactComponent as DropdownSVG } from '../../assets/dropdown_icon.svg';
import { ReactComponent as CloseSVG } from '../../assets/close.svg';

import avatarPNG from '../../assets/avatar.png';

import CardCarContainer from '../../components/card-car';
import CardCarSettingsContainer from '../../components/card-car-settings';

import s from './adminpage.module.scss';
import Hamburger from '../../components/Hamburger';

function AdminPage() {
  const onChangeServices = () => {
    console.log('object :>> ');
  };
  return (
    <div className={s.wrapper}>
      <sidebar className={s.sidebar}>
        <div className={s.logo}>
          <LogoSVG className={s.svg} />
          <span className={s.name}>Need for drive</span>
        </div>
        <ul className={s.items}>
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
          <li
            className={cn(s.item, {
              [s.item_active]: false,
            })}
          >
            Menu 4
          </li>
          <li
            className={cn(s.item, {
              [s.item_active]: false,
            })}
          >
            Menu 5
          </li>
          <li
            className={cn(s.item, {
              [s.item_active]: false,
            })}
          >
            Menu 6
          </li>
          <li
            className={cn(s.item, {
              [s.item_active]: false,
            })}
          >
            Menu 7
          </li>
        </ul>
      </sidebar>
      <content className={s.content}>
        <header className={s.header}>
          <div className={s.search}>
            <SearchSVG className={s.searchSVG} />
            <input type="text" placeholder="Поиск ..." />
          </div>
          <div className={s.account}>
            <div className={s.notify}>
              <NotifySVG />
              <div className={s.counter}>2</div>
            </div>
            <div className={s.user}>
              <img src={avatarPNG} alt="Avatar" />
              <span>Admin</span>
              <DropdownSVG className={s.dropdown} />
            </div>
          </div>
        </header>
        <action className={s.action}>
          <CheckSVG />
          <span>Успех! Машина сохранена</span>
          <CloseSVG className={s.close} />
        </action>
        <main className={s.main}>
          <div className={s.title}>
            <h1>Карточка автомобиля</h1>
          </div>
          <div className={s.cardAuto}>
            <CardCarContainer />
            <CardCarSettingsContainer />
          </div>
        </main>
        <footer className={s.footer}>
          <div className={s.hamburger}>
            <Hamburger />{' '}
          </div>
          <div className={s.menu}>
            <ul>
              <li>Главная страница</li>
              <li>Ссылка</li>
            </ul>
          </div>
          <div className={s.copyright}>Copyright © 2020 Simbirsoft</div>
        </footer>
      </content>
    </div>
  );
}

export default AdminPage;
