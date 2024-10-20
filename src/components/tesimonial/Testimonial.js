import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl">
        <Slider {...settings}>
          {/* Slides code goes here */}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
