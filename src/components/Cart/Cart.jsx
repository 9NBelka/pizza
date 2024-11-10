import { useSelector, useDispatch } from 'react-redux';
import css from './Cart.module.css';
// import clsx from 'clsx';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../redux/cartSlice';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';

export function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart({ id: item.id, size: item.size }));
  };

  return (
    <div>
      <h2 className={css.cartMainTitle}>Корзина</h2>

      {/* <div className={css.cartTextDescriptionBlock}>
        <div className={clsx(css.cartTextDescription)}>
          <p>product</p>
        </div>
        <div className={clsx(css.cartTextDescriptionWidth)}>
          <p>qty</p>
        </div>
        <div className={clsx(css.cartTextDescriptionWidth)}>
          <p>price</p>
        </div>
      </div> */}

      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id + item.size} className={css.cartMainBlock}>
            <div className={css.cartMainBlockImageAndTitleSize}>
              <div className={css.cartMainBlockImage}>
                <img src={item.imageUrl} alt={item.title} width='50' />
              </div>
              <div className={css.cartMainBlockText}>
                <p>{item.title}</p>
                <p>Размер: {item.size} см</p>
              </div>
            </div>

            <div className={css.cartMainBlockQuantity}>
              <button
                className={css.cartMainBlockQuantityButton}
                onClick={() => dispatch(decrementQuantity({ id: item.id, size: item.size }))}>
                <CiCircleMinus />
              </button>
              <p>{item.quantity}</p>
              <button
                className={css.cartMainBlockQuantityButton}
                onClick={() => dispatch(incrementQuantity({ id: item.id, size: item.size }))}>
                <CiCirclePlus />
              </button>
            </div>
            <div className={css.cartMainBlockText}>
              <p>Цена: {item.price * item.quantity} грн.</p>
            </div>
            <div onClick={() => handleRemove(item)} className={css.removeButton}>
              <MdDeleteForever />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
