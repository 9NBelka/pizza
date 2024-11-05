import { Categories } from '../../components/Categories/Categories';
import { Header } from '../../components/Header/Header';
import { PizzaTovar } from '../../components/PizzaTovar/PizzaTovar';

export function PizzaPage() {
  return (
    <>
      <Header />
      <Categories />
      <PizzaTovar />
    </>
  );
}
