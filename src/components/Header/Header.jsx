import { NavLink } from 'react-router-dom';
import logoSvg from '../../assets/img/pizza-logo.svg';
import Navigation from '../Navigation/Navigation';
import css from './Header.module.css';
import { GrBasket } from 'react-icons/gr';
import { useSelector } from 'react-redux';

export function Header() {
  const cartItems = useSelector((state) => state.cart.items);

  // Считаем общее количество и сумму
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div className={css.header}>
        <div className={css.container}>
          <div className={css.headerLogo}>
            <img width='38' src={logoSvg} alt='Pizza logo' />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          <div className={css.headerPriceAndBasketBlock}>
            <div className={css.headerBasketBlocks}>
              <div className={css.headerBasketBlock}>
                <h6 className={css.headerBasketBlockPrice}>{totalPrice} грн.</h6>{' '}
                {/* Общая стоимость */}
              </div>
            </div>
            <NavLink to='/cart' className={css.headerBasketLink}>
              <div className={css.headerBasketBlocks}>
                <div className={css.headerBasketBlock}>
                  <h6>{totalItems}</h6> {/* Общее количество */}
                </div>
                <div className={css.headerBasketBlock}>
                  <GrBasket />
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <Navigation />
    </>
  );
}
