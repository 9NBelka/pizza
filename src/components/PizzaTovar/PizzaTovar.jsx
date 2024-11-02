import css from './PizzaTovar.module.css';
import pizzas from '../../pizza.json';
import clsx from 'clsx';
import { useState } from 'react';

export function PizzaTovar() {
  // Объект для хранения активного размера для каждой пиццы по её id
  const [activeSizes, setActiveSizes] = useState({});

  // Функция для установки активного размера для конкретной пиццы
  const handleSizeClick = (pizzaId, sizeIndex) => {
    setActiveSizes((prevSizes) => ({
      ...prevSizes,
      [pizzaId]: sizeIndex, // Обновляем активный размер только для текущей пиццы
    }));
  };

  return (
    <div className={css.pizzaBlockWrapper}>
      <div className={css.pizzaBlock}>
        {pizzas.map((pizza) => (
          <div key={pizza.id} className={css.imageAndTitleBlock}>
            <img className={css.imageBlock} src={pizza.imageUrl} alt={pizza.title} />

            <ul className={css.pizzaBlockSize}>
              {pizza.sizes.map((size, index) => (
                <li
                  key={index}
                  onClick={() => handleSizeClick(pizza.id, index)}
                  className={clsx(
                    css.pizzaBlockSizeList,
                    activeSizes[pizza.id] === index && css.active, // Проверяем активный размер для этой пиццы
                  )}>
                  {size} см.
                </li>
              ))}
            </ul>

            <h4 className={clsx(css.titleBlock)}>{pizza.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
