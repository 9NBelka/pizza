// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import css from './SliderForMainPage.module.css';

export default function SliderForMainPage() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <Slider {...settings} className={css.sliderr}>
      <div className={css.slideBlock}>
        <img src='https://yapiko.com.ua/media/cmsadvanced/grid/resized/2340/1731597680.png' />
      </div>
      <div className={css.slideBlock}>
        <img src='https://yapiko.com.ua/media/cmsadvanced/grid/resized/2340/1731660573.png' />
      </div>
      <div className={css.slideBlock}>
        <img src='https://yapiko.com.ua/media/cmsadvanced/grid/resized/2340/1724136750.jpg' />
      </div>
      <div className={css.slideBlock}>
        <img src='https://yapiko.com.ua/media/cmsadvanced/grid/resized/2340/1719903379.jpg' />
      </div>
    </Slider>
  );
}
