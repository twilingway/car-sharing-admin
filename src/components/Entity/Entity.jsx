import React from 'react';
import TabsContainer from '../Tabs';

import s from './entity.module.scss';

function Entity() {
  return (
    <>
      <div className={s.title}>
        <h1>Сущности</h1>
      </div>
      <section className={s.content}>
        <TabsContainer />
      </section>
    </>
  );
}

export default Entity;
