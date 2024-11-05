import { useSelector } from 'react-redux';
import { Header } from '../../components/Header/Header';

export function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <Header />
      <div>
        <h2>Корзина</h2>
        {cartItems.length === 0 ? (
          <p>Ваша корзина пуста.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id + item.size}>
              <img src={item.imageUrl} alt={item.title} width='50' />
              <p>{item.title}</p>
              <p>Размер: {item.size} см</p>
              <p>Цена: {item.price} грн.</p>
              <p>Количество: {item.quantity}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
