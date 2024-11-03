import { Provider } from 'react-redux';
import { store } from './redux/store'; // Подключаем store
import { Categories } from './components/Categories/Categories';
import { Header } from './components/Header/Header';
import { PizzaTovar } from './components/PizzaTovar/PizzaTovar';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Categories />
      <PizzaTovar />
    </Provider>
  );
}

export default App;
