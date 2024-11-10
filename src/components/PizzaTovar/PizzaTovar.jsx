import css from './PizzaTovar.module.css';
import plus from '../../assets/img/plus.svg';
import pizzas from '../../pizza.json';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../../redux/cartSlice';
import { PizzaPopup } from '../PizzaPopup/PizzaPopup';
import { PizzaSizeSelector } from '../PizzaSizeSelector/PizzaSizeSelector';

export function PizzaTovar() {
  const selectedCategory = useSelector((state) => state.filter.category);
  const initialSizes = pizzas.reduce((acc, pizza) => {
    acc[pizza.id] = 0;
    return acc;
  }, {});
  const [activeSizes, setActiveSizes] = useState(initialSizes);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const sizePriceAdditions = [0, 110];

  const handleSizeClick = (pizzaId, sizeIndex) => {
    setActiveSizes((prevSizes) => ({
      ...prevSizes,
      [pizzaId]: sizeIndex,
    }));
  };

  const filteredPizzas = pizzas.filter((pizza) => {
    if (selectedCategory === 0) return true;
    return Array.isArray(pizza.category)
      ? pizza.category.includes(selectedCategory)
      : pizza.category === selectedCategory;
  });

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

  const handlePizzaClick = (pizza) => {
    setSelectedPizza(pizza);
  };

  const closePopup = () => {
    setSelectedPizza(null);
  };

  return (
    <div className={css.pizzaBlockWrapper}>
      <div className={css.pizzaBlock}>
        {filteredPizzas.map((pizza) => {
          const selectedSizeIndex = activeSizes[pizza.id];
          const priceAddition = sizePriceAdditions[selectedSizeIndex];
          const finalPrice = pizza.price + priceAddition;

          return (
            <div key={pizza.id} className={css.imageAndTitleBlock}>
              <img
                className={css.imageBlock}
                src={pizza.imageUrl}
                alt={pizza.title}
                onClick={() => handlePizzaClick(pizza)}
              />

              <PizzaSizeSelector
                sizes={pizza.sizes}
                activeSizeIndex={selectedSizeIndex}
                onSizeClick={(sizeIndex) => handleSizeClick(pizza.id, sizeIndex)}
              />

              <h4 className={clsx(css.titleBlock)}>{pizza.title}</h4>

              <div className={css.priceAndButtonBlock}>
                <p className={css.priceBlock}>{finalPrice} грн.</p>
                <button onClick={() => handleAddToCart(pizza)} className={css.buttonPlusInCard}>
                  <img src={plus} alt='buttonPlus' />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedPizza && <PizzaPopup pizza={selectedPizza} onClose={closePopup} />}
    </div>
  );
}
