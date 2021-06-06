import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import CategoryContainer from '../TabsItem/Category';
import CityContainer from '../TabsItem/City';
import OrderStatusContainer from '../TabsItem/OrderStatus';
import PointContainer from '../TabsItem/Point';

import Tabs from './Tabs';

const TABS = [
  {
    id: 1,
    label: 'Категории',
    content: <CategoryContainer />,
  },
  {
    id: 2,
    label: 'Города',
    content: <CityContainer />,
  },
  {
    id: 3,
    label: 'Пункты',
    content: <PointContainer />,
  },
  {
    id: 4,
    label: 'Цены',
    content: '13',
  },
  {
    id: 5,
    label: 'Тарифы',
    content: '13',
  },
  {
    id: 6,
    label: 'Статусы',
    content: <OrderStatusContainer />,
  },
];

function TabsContainer({ children, isVertical, tabs }) {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState(null);

  return <Tabs tabs={TABS} />;
}

export default TabsContainer;
