import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>В кошику пусто 😕</h2>
      <p>
        Скоріш за все, ви ще не додали піцу.
        <br />
        Для цього, перейдіть на головну сторінку!
      </p>
      <img src="empty-cart.png" alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Повернутись назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
