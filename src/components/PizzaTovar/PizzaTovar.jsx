// PizzaTovar.js
import css from './PizzaTovar.module.css';
import plus from '../../assets/img/plus.svg';
import pizzas from '../../pizza.json';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

/*

useSelector — хук для получения данных из store. Он позволяет подписываться на определенные части состояния.
useDispatch — хук для отправки действий. С его помощью мы вызываем действия, которые обновляют состояние в store.

*/

export function PizzaTovar() {
  const selectedCategory = useSelector((state) => state.filter.category);

  /*
  Подключаемся к выбранной категории через useSelector, чтобы фильтровать список пицц, отображаемых пользователю.
  */

  const initialSizes = pizzas.reduce((acc, pizza) => {
    acc[pizza.id] = 0;
    return acc;
  }, {});
  const [activeSizes, setActiveSizes] = useState(initialSizes);

  const sizePriceAdditions = [0, 110]; // Цены для размеров пицц [26см, 40см]

  const handleSizeClick = (pizzaId, sizeIndex) => {
    setActiveSizes((prevSizes) => ({
      ...prevSizes,
      [pizzaId]: sizeIndex,
    }));
  };

  // Фильтрация пицц по категории
  const filteredPizzas = pizzas.filter((pizza) => {
    // Если выбранная категория - "Все" (0), отображаем все пиццы
    if (selectedCategory === 0) return true;
    // Проверяем, есть ли выбранная категория в массиве category для каждой пиццы
    return Array.isArray(pizza.category)
      ? pizza.category.includes(selectedCategory)
      : pizza.category === selectedCategory;
  });

  /*
  1. Если selectedCategory не равен 0, проверяется, является ли pizza.category массивом (например, [0, 3] для пиццы, которая относится к нескольким категориям). Если это массив, используется .includes() для проверки, находится ли selectedCategory среди элементов массива pizza.category.
  
  2. Если pizza.category — не массив, а одно число, как 0 или 3, тогда проверка происходит через обычное сравнение (pizza.category === selectedCategory).
  
  */

  const dispatch = useDispatch();

  const handleAddToCart = (pizza) => {
    const selectedSizeIndex = activeSizes[pizza.id];
    const priceAddition = sizePriceAdditions[selectedSizeIndex];
    const finalPrice = pizza.price + priceAddition;

    dispatch(
      addToCart({
        id: pizza.id,
        title: pizza.title,
        imageUrl: pizza.imageUrl,
        size: pizza.sizes[selectedSizeIndex],
        price: finalPrice,
      }),
    );
  };
  // const handleAddToCart = (product) => {
  //   dispatch(addToCart(product));
  // };

  return (
    <div className={css.pizzaBlockWrapper}>
      <div className={css.pizzaBlock}>
        {filteredPizzas.map((pizza) => {
          const selectedSizeIndex = activeSizes[pizza.id];
          const priceAddition = sizePriceAdditions[selectedSizeIndex];
          const finalPrice = pizza.price + priceAddition;

          return (
            <div key={pizza.id} className={css.imageAndTitleBlock}>
              <img className={css.imageBlock} src={pizza.imageUrl} alt={pizza.title} />

              <ul className={css.pizzaBlockSize}>
                {pizza.sizes.map((size, index) => (
                  <li
                    key={index}
                    onClick={() => handleSizeClick(pizza.id, index)}
                    className={clsx(
                      css.pizzaBlockSizeList,
                      activeSizes[pizza.id] === index && css.active,
                    )}>
                    {size} см.
                  </li>
                ))}
              </ul>

              <h4 className={clsx(css.titleBlock)}>{pizza.title}</h4>

              <div className={css.priceAndButtonBlock}>
                <p className={css.priceBlock}>{finalPrice} грн.</p>
                {/* <button
                  onClick={() => dispatch(addToCart(pizza.id))}
                  className={css.buttonPlusInCard}>
                  <img src={plus} alt='buttonPlus' />
                </button> */}
                <button onClick={() => handleAddToCart(pizza)} className={css.buttonPlusInCard}>
                  <img src={plus} alt='buttonPlus' />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
