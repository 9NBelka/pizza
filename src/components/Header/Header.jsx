import logoSvg from '../../assets/img/pizza-logo.svg';
import css from './Header.module.css';

export function Header() {
  return (
    <div className={css.header}>
      <div className={css.container}>
        {/* <Link to='/'> */}
        <div className={css.headerLogo}>
          <img width='38' src={logoSvg} alt='Pizza logo' />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        {/* </Link> */}
        {/* {location.pathname !== '/cart' && <Search />} */}
        <div className='header__cart'>
          {/* {location.pathname !== '/cart' && (
            <Link to='/cart' className='button button--cart'> */}
          {/* <span>{totalPrice} ₽</span> */}
          <div className='button__delimiter'></div>

          {/* <span>{totalCount}</span> */}
          {/* </Link> */}
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
