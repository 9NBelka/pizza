import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import css from './SliderAndInfoTimeWork.module.css';

export default function SliderAndInfoTimeWork() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <div className={css.sliderAndInfoTimeWorkBlocks}>
      <div className={css.sliderBlock}>
        <Slider {...settings}>
          <div className={css.sliderBlock}>
            <img src='https://yapiko.com.ua/media/cmsadvanced/grid/1690278953.svg' />
          </div>
          <div className={css.sliderBlock}>
            <img src='https://yapiko.com.ua/media/cmsadvanced/grid/1690278981.svg' />
          </div>
          <div className={css.sliderBlock}>
            <img src='https://yapiko.com.ua/media/cmsadvanced/grid/1712573914.svg' />
          </div>
        </Slider>
      </div>
      <div className={css.sliderBlockInfo}>
        <div className={css.blockInfoColumn}>
          <h5>Щодня</h5>
          <h3>Графiк роботи 10:00 - 21:00</h3>
          <h6>Працюємо навіть при відключеннях світла</h6>
        </div>
        <div className={css.blockInfoColumn}>
          <h5>Без запізнень</h5>
          <h3>Точний час доставки</h3>
          <h6>
            Запізнимося більше, ніж на 9 хвилин - подаруємо промокод на 150 грн. У зв'язку з
            обстрілам, акцію у Харкові тимчасово призупинено.
          </h6>
        </div>
        <div className={css.blockInfoColumn}>
          <h5>Повний контроль</h5>
          <h3>Трекінг замовлення</h3>
          <h6>Відстежуйте доставку на карті у реальному часі</h6>
        </div>
      </div>
    </div>
  );
}
