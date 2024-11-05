import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Подключаем store
// import { Categories } from './components/Categories/Categories';
// import { Header } from './components/Header/Header';
// import { PizzaTovar } from './components/PizzaTovar/PizzaTovar';
// import { Cart } from './components/Cart/Cart';
import { HomePage } from './pages/HomePage/HomePage';
import { PizzaPage } from './pages/PizzaPage/PizzaPage';

import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { CartPage } from './pages/CartPage/CartPage';

function App() {
  return (
    <>
      {/* <Navigation /> */}
      {/* <Header />
      <Categories />
      <PizzaTovar />
      <Cart /> */}
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/pizza' element={<PizzaPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
