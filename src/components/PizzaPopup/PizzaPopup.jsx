import css from './PizzaPopup.module.css';
import { RiCloseLargeLine } from 'react-icons/ri';

export function PizzaPopup({ pizza, onClose }) {
  return (
    <div className={css.popupOverlay}>
      <div className={css.popupContent}>
        <button onClick={onClose} className={css.closeButton}>
          <RiCloseLargeLine />
        </button>

        <div className={css.popupContentBlockImage}>
          <img src={pizza.imageUrl} alt={pizza.title} />
        </div>

        <div className={css.popupContentBlockInfo}>
          <h2 className={css.popupContentBlockInfoNamePizza}>{pizza.title}</h2>
          <div className={css.popupContentBlockInfoList}>
            <h6>Ингредиенты:</h6>
            <ul className={css.popupContentBlockInfoListIngredients}>
              {pizza.ingredients.map((ingredientImage, index) => (
                <li key={index} className={css.ingredientItem}>
                  <img src={ingredientImage} alt={pizza.ingredientsName[index]} />
                  <p className={css.ingredientItemName}>{pizza.ingredientsName[index]}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
