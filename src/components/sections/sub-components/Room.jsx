import styled from "styled-components";
import Carusel from "./Carusel";
import BedIcon from "../../../assets/Bed.webp";
import PeopleIcon from "../../../assets/People.webp";
import SizeIcon from "../../../assets/Size.webp";
import ViewIcon from "../../../assets/View.webp";
import BathIcon from "../../../assets/Bath.webp";
import PropTypes from 'prop-types';
import Buttons from "./Buttons";

const Room = ({ title, people, size, bed, view, bathroom, description, images }) => {

  Room.propTypes = {
    title: PropTypes.string.isRequired, 
    people: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    bed: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired, 
    bathroom: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.node.isRequired,
  };

  return (
    <Container>
      <SliderHolder>
        <Carusel image={images} />
      </SliderHolder>

      <ContentHolder>
        <Content>
          <Title>{title}</Title>
          <p>{description}</p>
          
          <IconHolder>
            <IconSection >
              <Icon loading="lazy" alt="People Icon" src={PeopleIcon} />
              <p>{people}</p>
            </IconSection>

            <IconSection >
              <Icon loading="lazy" alt="Size Icon" src={SizeIcon} />
              <p>{size}</p>
            </IconSection>

            <IconSection >
              <Icon loading="lazy" alt="Bed Icon" src={BedIcon} />
              <p>{bed}</p>
            </IconSection>

            <IconSection >
              <Icon loading="lazy" alt="View Icon" src={ViewIcon} />
              <p>{view}</p>
            </IconSection>
            <IconSection >
              <Icon loading="lazy" alt="Bath Icon" src={BathIcon} />
              <p>{bathroom}</p>
            </IconSection>
          </IconHolder>

          <Buttons />
        </Content>
        
      </ContentHolder>
    </Container>
  );
}

export default Room;

const Container = styled.div`
  width: 48%;
  margin: 18px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const SliderHolder = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  margin: 20px 0;
  width: 90%;

  p {
    margin: 8px 0;
  }
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const IconHolder = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px 0;
`;

const IconSection = styled.div`
  width: 45%;
  height: 70px;
  display: flex;
  align-items: center;
  margin: 10px 0px;

  p {
    font-size: 12px;
    margin: 0 0 0 8px ;
    font-weight: bold;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
