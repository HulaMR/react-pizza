import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Нічого не знайдено 😣</h1>
      <p className={styles.description}>Нажаль сторінки не існує</p>
    </div>
  );
};
export default NotFoundBlock;
