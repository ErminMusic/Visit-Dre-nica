import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PropTypes from 'prop-types';

function Carusel({ image }) {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };

  Carusel.propTypes = {
    image: PropTypes.node.isRequired,
  };

  return (
    <Container {...settings}>
      {image.map((item, index) =>(
        <div key={index}>
          <img src={item} alt={`carousel-image-${index}`} />
        </div>
      ))}
    </Container>
  )
}

export default Carusel

const Container = styled(Slider)`
  width: 100%;

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

  .slick-prev {
    left: 15px;
    top: 50%;
    bottom: 50%;
    scale: 2;
    z-index: 100;
  }

  .slick-next {
    right: 15px;
    top: 50%;
    bottom: 50%;
    scale: 2;
  }
`