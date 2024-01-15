import styled from "styled-components"
import Room from "./sub-components/Room"
import RoomImage from "../../../public/Images/RoomOne.webp"

function Rooms() {

  const roomOne = {
    title: "Budget Singe Room",
    people: "1 Adult",
    view: "Lake",
    bed: "One Single Bed",
    size: "20sqm",
    description: "11111Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur aperiam voluptatem, necessitatibus iure optio incidunt rerum? Explicabo, aut facere nihil maxime vel consequuntur. Sed magnam eligendi, velit dolorum iste necessitatibus.",
    images : [
      RoomImage,
      RoomImage,
      RoomImage
    ]
  }

  const roomTwo = {
    title: "Twin Room  ",
    people: "2 Adults",
    view: "Lake View",
    bed: "2 Single Beds and 1 Sofa Bed",
    size: "20sqm",
    description: "22222Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur aperiam voluptatem, necessitatibus iure optio incidunt rerum? Explicabo, aut facere nihil maxime vel consequuntur. Sed magnam eligendi, velit dolorum iste necessitatibus.",
    images : [
      RoomImage,
      RoomImage,
      RoomImage
    ]
  }

  const roomThree = {
    title: "Quadruple Room with Balcony",
    people: "4 Adults",
    view: "Lake View",
    bed: "3 Single Beds, 1 Double Bed and 1 Sofa Bed",
    size: "20sqm",
    description: "33333Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur aperiam voluptatem, necessitatibus iure optio incidunt rerum? Explicabo, aut facere nihil maxime vel consequuntur. Sed magnam eligendi, velit dolorum iste necessitatibus.",
    images : [
      RoomImage,
      RoomImage,
      RoomImage
    ]
  }

  return (
    <Wrap>
        
      <Container>

        <Room 
          title={roomOne.title}
          people={roomOne.people}
          view={roomOne.view}
          bed={roomOne.bed}
          size={roomOne.size}
          description={roomOne.description}   
          images={roomOne.images}
        />

        <Room 
          title={roomTwo.title}
          people={roomTwo.people}
          view={roomTwo.view}
          bed={roomTwo.bed}
          size={roomTwo.size}
          description={roomTwo.description}   
          images={roomTwo.images}
        />

        <Room 
          title={roomThree.title}
          people={roomThree.people}
          view={roomThree.view}
          bed={roomThree.bed}
          size={roomThree.size}
          description={roomThree.description}   
          images={roomThree.images}
        />

        <Room 
          title={roomOne.title}
          people={roomOne.people}
          view={roomOne.view}
          bed={roomOne.bed}
          size={roomOne.size}
          description={roomOne.description}   
          images={roomOne.images}
        />

      </Container>

    </Wrap>
  )
}

export default Rooms

const Wrap = styled.div`
  background-color: #F8F5DF;
  width: 100%;
  color: #525252;
  padding: 18px 0;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  flex-wrap: wrap;
`