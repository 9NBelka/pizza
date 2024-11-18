import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PizzaSizeSelector } from '../PizzaSizeSelector/PizzaSizeSelector';
import css from './PizzaPopup.module.css';
import { RiCloseLargeLine } from 'react-icons/ri';
import { addToCart } from '../../redux/cartSlice';

export function PizzaPopup({ pizza, onClose }) {
  const [activeSizeIndex, setActiveSizeIndex] = useState(0); // Размер по умолчанию
  const dispatch = useDispatch();

  const sizePriceAdditions = [0, 110]; // Разница в цене для разных размеров
  const finalPrice = pizza.price + sizePriceAdditions[activeSizeIndex];

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: pizza.id,
        title: pizza.title,
        imageUrl: pizza.imageUrl,
        size: pizza.sizes[activeSizeIndex],
        price: finalPrice,
      }),
    );
    // onClose(); // Закрываем попап после добавления в корзину
  };

  return (
    <div className={css.popupOverlay} onClick={onClose}>
      <div
        className={css.popupContent}
        onClick={(e) => e.stopPropagation()} // Останавливаем всплытие
      >
        <button onClick={onClose} className={css.closeButton}>
          <RiCloseLargeLine />
        </button>

        <div className={css.popupContentBlockImage}>
          <img src={pizza.imageUrl} alt={pizza.title} />
        </div>

        <div className={css.popupContentBlockInfo}>
          <h2 className={css.popupContentBlockInfoNamePizza}>{pizza.title}</h2>
          <div className={css.popupContentBlockInfoList}>
            <PizzaSizeSelector
              sizes={pizza.sizes}
              activeSizeIndex={activeSizeIndex}
              onSizeClick={setActiveSizeIndex}
            />
            <h6>Ингредиенты:</h6>
            <ul className={css.popupContentBlockInfoListIngredients}>
              {pizza.ingredients.map((ingredientImage, index) => (
                <li key={index} className={css.ingredientItem}>
                  <img src={ingredientImage} alt={pizza.ingredientsName[index]} />
                  <p className={css.ingredientItemName}>{pizza.ingredientsName[index]}</p>
                </li>
              ))}
            </ul>
            <button onClick={handleAddToCart} className={css.pizzaBlockAddToCart}>
              В корзину за {finalPrice} грн.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
