import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel({ image }) {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  Carousel.propTypes = {
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  return (
    <Container {...settings}>
      {image.map((item, index) => (
        <div key={index}>
          <img src={item} alt={`carousel-image-${index}`} />
        </div>
      ))}
    </Container>
  );
}

export default Carousel;

const Container = styled(Slider)`
  width: 95%;


  img {
    width: 100%;
    height: 100%;
  }

  ul li button {
    color: white;

    &:before {
      font-size: 15px;
      color: rgb(0, 0, 0);
    }
  }

  .slick-list {
    overflow: hidden;
  }

  .slick-prev,
  .slick-next {
    top: 50%;
    transform: translateY(-50%);
    scale: 1.5;
    z-index: 10;
  }

  .slick-prev {
    left: 15px;
  }

  .slick-next {
    right: 15px;
  }
`;