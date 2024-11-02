import clsx from 'clsx';
import css from './Categories.module.css';
import { useState } from 'react';

export function Categories() {
  const [activeType, setActiveType] = useState(0); // Начальное состояние — первый элемент (например, "Все")

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className={css.categories}>
      <ul className={css.categoriesBlockTypes}>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => setActiveType(index)}
            className={clsx(css.categoriesBlockTypesList, activeType === index && css.active)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
