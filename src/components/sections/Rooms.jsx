import styled from 'styled-components';
import Room from './sub-components/Room';
import RoomImage from '../../assets/RoomOne.webp';

function Rooms() {
  
  const roomOne = {
    title: 'Budget Single Room',
    people: '1 Adult',
    view: 'Lake View',
    bed: '1 Single Bed',
    size: '20sqm',
    description:
      '11111Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur aperiam voluptatem, necessitatibus iure optio incidunt rerum? Explicabo, aut facere nihil maxime vel consequuntur. Sed magnam eligendi, velit dolorum iste necessitatibus.',
    images: [RoomImage, RoomImage, RoomImage],
    bathroom: "Shared Bathroom"
  };

  const roomTwo = {
    title: 'Twin Room',
    people: '2 Adults',
    view: 'Lake View',
    bed: '2 Single Beds and 1 Sofa Bed',
    size: '20sqm',
    description:
      '22222Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur aperiam voluptatem, necessitatibus iure optio incidunt rerum? Explicabo, aut facere nihil maxime vel consequuntur. Sed magnam eligendi, velit dolorum iste necessitatibus.',
    images: [RoomImage, RoomImage, RoomImage],
    bathroom: "Shared Bathroom"
  };

  const roomThree = {
    title: 'Quadruple Room with Balcony',
    people: '4 Adults',
    view: 'Lake View',
    bed: '3 Single, 1 Double and 1 Sofa Bed',
    size: '20sqm',
    description:
      '33333Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur aperiam voluptatem, necessitatibus iure optio incidunt rerum? Explicabo, aut facere nihil maxime vel consequuntur. Sed magnam eligendi, velit dolorum iste necessitatibus.',
    images: [RoomImage, RoomImage, RoomImage],
    bathroom: "Shared Bathroom"
  };

  const mainTitle = "Choose A Room:"

  return (
    <Wrap>
      <Container>
        <TitleHolder>
          <Title>{mainTitle}</Title>
        </TitleHolder>
      
      <ContentHolder>
        <Room
          title={roomOne.title}
          people={roomOne.people}
          view={roomOne.view}
          bed={roomOne.bed}
          size={roomOne.size}
          description={roomOne.description}
          images={roomOne.images}
          bathroom={roomOne.bathroom}
        />

        <Room
          title={roomTwo.title}
          people={roomTwo.people}
          view={roomTwo.view}
          bed={roomTwo.bed}
          size={roomTwo.size}
          description={roomTwo.description}
          images={roomTwo.images}
          bathroom={roomTwo.bathroom}
        />

        <Room
          title={roomThree.title}
          people={roomThree.people}
          view={roomThree.view}
          bed={roomThree.bed}
          size={roomThree.size}
          description={roomThree.description}
          images={roomThree.images}
          bathroom={roomThree.bathroom}
        />

        <Room
          title={roomOne.title}
          people={roomOne.people}
          view={roomOne.view}
          bed={roomOne.bed}
          size={roomOne.size}
          description={roomOne.description}
          images={roomOne.images}
          bathroom={roomOne.bathroom}
        />
      </ContentHolder>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: #f8f5df;
  width: 100%;
  color: #525252;
  padding: 36px 0 0px 0;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const TitleHolder = styled.div`
  width: 80%;
  padding: 0 0 12px 1%;
  display: flex;
  justify-content: start;

  @media (max-width: 850px) {
    width: 95%;
  }
  @media (max-width: 700px) {
    padding: 0 0 12px 2%;
  }
`
const Title = styled.h1`
  font-weight: normal;
  font-weight: bold;
`;

const ContentHolder = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: wrap;

  @media (max-width: 850px) {
    width: 95%;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export default Rooms;