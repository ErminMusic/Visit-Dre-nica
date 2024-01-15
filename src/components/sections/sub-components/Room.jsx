import styled from "styled-components"
import Carusel from "./Carusel"
import BedIcon from "../../../../public/Images/Bed.webp"
import PeopleIcon from "../../../../public/Images/People.webp"
import SizeIcon from "../../../../public/Images/Size.webp"
import ViewIcon from "../../../../public/Images/View.webp"
import PropTypes from 'prop-types';

function Room({ title, people, size, bed, view, description, images }) {

  Room.propTypes = {
    title: PropTypes.string.isRequired, 
    people: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    bed: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired, 
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

              <Icon alt="People Icon" src={PeopleIcon} />
              <p>{people}</p>

            </IconSection>

            <IconSection >

              <Icon alt="Size Icon" src={SizeIcon} />
              <p>{size}</p>

            </IconSection>

            <IconSection >

              <Icon alt="Bed Icon" src={BedIcon} />
              <p>{bed}</p>

            </IconSection>

            <IconSection >

              <Icon alt="View Icon" src={ViewIcon} />
              <p>{view}</p>

            </IconSection>


          </IconHolder>

          <ButtonHolder>

            <MoreButton><span>LEARN MORE</span></MoreButton>
            <BookButton><span>BOOK</span> THIS ROOM</BookButton>

          </ButtonHolder>
        </Content>

      </ContentHolder>
 
    </Container>
  )
}

export default Room

const Container = styled.div`
  width: 45%;
  margin: 18px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SliderHolder = styled.div`

`

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  margin: 20px 0;
  width: 90%;

  p {
    margin: 8px 0;
  }
`

const Title = styled.h1`

`

const IconHolder = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 0;
`

const IconSection = styled.div`
  width: 45%;
  height: 70px;
  display: flex;
  align-items: center;
  margin: 10px;
  p {
    margin: 0 8px;
  }
`

const Icon = styled.img`
  width: 50px;
`

const ButtonHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const MoreButton = styled.div`
  border-radius: 10px;
  background-color: #507D7F;
  text-align: center;
  width: 90%;
  padding: 16px 0px ;
  cursor: pointer;
  opacity: 0.9;
  color: white;
  
  span {
    font-weight: bold;
  }

  &:hover {
    /* transform: scale(1.05); */
    transition: 250ms;
    opacity: 1;
    background-color: white;
    color: #507D7F;
  }

  @media (max-width: 500px) {
    width: 55%;
  }

  @media (max-width: 420px) {
    width: 65%;
  }
`

const BookButton = styled(MoreButton)`
  background-color: #8FBC8F;
  margin-top: 20px;

  &:hover {
    background-color: white;
    color: #8FBC8F;
  }
`