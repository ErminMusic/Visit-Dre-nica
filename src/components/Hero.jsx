import styled from "styled-components"
import HeroBg from "../../public/Images/Hero.webp"


function Hero() {
  return (
    <Wrap>
      
      <BackgroundOverlay />
      
      <BackgroundImage alt="Hero Image" src={HeroBg} />      

      <Container>

        <ContentHolder>

          <TextHolder>

            <Headline>Visit <span>Drežnica</span></Headline>

            <SubHeadline>A Hidden Gem in <br /> Bosnai & Herzegovina</SubHeadline>

          </TextHolder>

          <ButtonHolder>

            <BookButton>BOOK A <span>ROOM</span></BookButton>

            <ContactButton><span>CONTACT</span> US</ContactButton>

          </ButtonHolder>

        </ContentHolder>

      </Container>

    </Wrap>
  )
}

export default Hero

const Wrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 1;
`

const Container = styled.div`
  width: 80%;
  color: white;
  z-index: 100;
  display: flex;
  align-items: center;
`

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const TextHolder = styled.div`
  max-height: fit-content;
`

const Headline = styled.h1`
  font-size: 56px;
  font-weight: bold;
  text-transform: uppercase;

  span {
    color: #F0FFF0;
  }
`

const SubHeadline = styled.h2`
  font-size: 32px;
  margin: 16px 0 20px 0;
  font-weight: normal;
`

const ButtonHolder = styled.div`
  
`

const BookButton = styled.div`
  border-radius: 16px;
  background-color: #507D7F;
  text-align: center;
  width: 35%;
  padding: 16px 36px ;
  cursor: pointer;
  opacity: 0.9;

  span {
    font-weight: bold;

  }

  &:hover {
    transform: scale(1.05);
    transition: 250ms;
    opacity: 1;
  }
`

const ContactButton = styled(BookButton)`
  background-color: #8FBC8F;
  margin-top: 20px;
`


const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  width: 100%;
  height: 100vh;
`

const BackgroundOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh; // Set the height to cover the entire viewport
  z-index: 2;
  background: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
`;