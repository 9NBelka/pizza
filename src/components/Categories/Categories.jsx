import clsx from 'clsx';
import css from './Categories.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/filterSlice';

export function Categories() {
  const dispatch = useDispatch();
  const activeType = useSelector((state) => state.filter.category); // Доступ к текущему фильтру

  /*
  
  В компоненте Categories мы можем использовать useDispatch для отправки действия при выборе категории и useSelector для получения текущего фильтра.
  
  */

  const categories = ['Все', 'Мясные', 'Без Мяса', 'с морепродуктами', 'Острые', 'Конструктор'];

  return (
    <div className={css.categories}>
      <ul className={css.categoriesBlockTypes}>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => dispatch(setCategory(index))}
            className={clsx(css.categoriesBlockTypesList, activeType === index && css.active)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
