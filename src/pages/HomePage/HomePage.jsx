import { Header } from '../../components/Header/Header';
import SliderAndInfoTimeWork from '../../components/SliderAndInfoTimeWork/SliderAndInfoTimeWork';
import SliderForMainPage from '../../components/SliderForMainPage/SliderForMainPage';

export function HomePage() {
  return (
    <>
      <Header />
      <h1>Main page</h1>
      <SliderForMainPage />
      <h2>Переваги з REACT PIZZA</h2>
      <SliderAndInfoTimeWork />
    </>
  );
}
