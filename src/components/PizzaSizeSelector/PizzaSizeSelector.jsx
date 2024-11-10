// src/components/PizzaSizeSelector/PizzaSizeSelector.js

// import React from 'react';
import clsx from 'clsx';
import css from './PizzaSizeSelector.module.css';

export function PizzaSizeSelector({ sizes, activeSizeIndex, onSizeClick }) {
  return (
    <ul className={css.pizzaBlockSize}>
      {sizes.map((size, index) => (
        <li
          key={index}
          onClick={() => onSizeClick(index)}
          className={clsx(css.pizzaBlockSizeList, activeSizeIndex === index && css.active)}>
          {size} см.
        </li>
      ))}
    </ul>
  );
}
