import { useState, lazy } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = lazy(() => import('react-slick'));

function ReviewSlider({ list }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const ShowDescription = {
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box"
  }

  const [isOpen, setIsOpen] = useState(false)

  ReviewSlider.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        profileImage: PropTypes.node.isRequired,
        countryName: PropTypes.node.isRequired,
        score: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  return (
    <Carousel {...settings}>
      {list.map((item, index) => (
        <Container key={index}>
          <Person>
            <PersonHolder>
              <IconHolder>
                <Image alt={item.name} src={item.profileImage} />
              </IconHolder>
              <PersonInfo>
                <span>{item.name}</span>
                <div>
                  <img src={item.flag} alt={item.countryName} />
                  {item.countryName}
                </div>
              </PersonInfo>
            </PersonHolder>
            <Score>
              <p>{item.score}</p>
            </Score>
          </Person>
          <TextHolder>
            <p>
              Reviewed:
              <br />
              {item.date}
            </p>
            <Title>{item.title}</Title>
            <Description style={isOpen ? null : ShowDescription}>
              {item.description}
            </Description>
            
            {item.description.length > 200 && (
              <ReadMoreButton
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? 'Read Less' : 'Read More'}
              </ReadMoreButton>
            )}
          </TextHolder>
        </Container>
      ))}
    </Carousel>
  );
}

export default ReviewSlider;

const Carousel = styled(Slider)`
  width: 80%;

  .element-style {
    display: flex;
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
    scale: 3;
    z-index: 10;
    display: none;
  }

  .slick-prev::before,
  .slick-next::before {
    color: #8fbc8f;
    display: none;
  }

  .slick-next {
    right: -45px;
  }

  .slick-prev {
    left: -45px;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 8px;
`;

const PersonHolder = styled.div`
  display: flex;
`;

const Person = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextHolder = styled.div`
  p {
    margin: 8px 0;
  }
`;

const Description = styled.p`
  margin: 8px 0;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #525252;
  cursor: pointer;
  font-weight: bold;
  margin: 8px 0;
  padding: 0;
  outline: none;
  font-size: 16px;
`;

const Score = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 10px 10px 10px 0;
  background-color: #8fbc8f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
  font-weight: bold;
  position: relative;

    &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 50%;
    height: 100%;
    z-index: 0;
    opacity: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
  }
`;

const Image = styled.img`
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;

const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-weight: bold;
  }

  div {
    display: flex;
    margin: 8px 0;

    img {
      width: 20px;
      height: 20px;
      margin: 0 6px 0 0;
    }
  }
`;

const IconHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin: 0 12px 0 0;

  span {
    font-weight: bold;
  }
`;

const Title = styled.h2`
  margin: 12px 0;
`;
