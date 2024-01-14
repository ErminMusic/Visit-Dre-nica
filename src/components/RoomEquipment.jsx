import styled from "styled-components"
import AC from "../../public/Images/AC.webp"
import Bath from "../../public/Images/Bath.webp"
import Beach from "../../public/Images/Beach.webp"
import Breakfast from "../../public/Images/Breakfast.webp"
import CCTV from "../../public/Images/AC.webp"
import Delivery from "../../public/Images/Delivery.webp"
import FamilyRoom from "../../public/Images/FamilyRoom.webp"
import Fire from "../../public/Images/Fire.webp"
import Fireplace from "../../public/Images/Fireplace.webp"
import Garden from "../../public/Images/Garden.webp"
import Iron from "../../public/Images/Iron.webp"
import Laundry from "../../public/Images/Laundry.webp"
import NonSmokingRooms from "../../public/Images/NonSmokingRooms.webp"
import PackedLunch from "../../public/Images/PackedLunch.webp"
import Parking from "../../public/Images/Parking.webp"
import Patio from "../../public/Images/Patio.webp"
import Picnic from "../../public/Images/Picnic.webp"
import RoomService from "../../public/Images/RoomService.webp"
import Security from "../../public/Images/Security.webp"
import Sink from "../../public/Images/Sink.webp"
import Toilet from "../../public/Images/AC.webp"
import WiFi from "../../public/Images/WiFi.webp"

function RoomEquipment() {

  const Rooms = [
    {
      icon: WiFi,
      alter: "WiFi",
      text: "Free WiFi"
    },
    {
      icon: Parking,
      alter: "Parking",
      text: "Free Parking"
    },
    {
      icon: AC,
      alter: "AC",
      text: "AC"
    },
    {
      icon: RoomService,
      alter: "RoomService",
      text: "Room Service"
    },
    {
      icon: CCTV,
      alter: "CCTV",
      text: "CCTV of the outside property and parking"
    },
    {
      icon: Security,
      alter: "Security",
      text: "Security"
    },
    {
      icon: FamilyRoom,
      alter: "FamilyRoom",
      text: "Family Room"
    },
    {
      icon: NonSmokingRooms,
      alter: "NonSmokingRooms",
      text: "Non-Smoking Rooms"
    },
    {
      icon: Fire,
      alter: "Fire",
      text: "Fire Extinguisher"
    },
  ]

  const Outside = [
    {
      icon: Beach,
      alter: "Beach",
      text: "Private Beachfront"
    },
    {
      icon: Fireplace,
      alter: "Fireplace",
      text: "Fireplace & BBQ"
    },
    {
      icon: Garden,
      alter: "Garden",
      text: "Garden"
    },
    {
      icon: Patio,
      alter: "Patio",
      text: "Patio"
    },
    {
      icon: Picnic,
      alter: "Picnic",
      text: "Picnic"
    },
  ]

  const Service = [
    {
      icon: Breakfast,
      alter: "Breakfast",
      text: "Breakfast"
    },
    {
      icon: Delivery,
      alter: "Delivery",
      text: "Grocery Delivery (additional charges)"
    },
    {
      icon: Iron,
      alter: "Iron",
      text: "Ironing (additional charges)"
    },
    {
      icon: Laundry,
      alter: "Laundry",
      text: "Laundry (additional charges)"
    },
    {
      icon: PackedLunch,
      alter: "PackedLunch",
      text: "PackedLunch"
    },
  ]

  const Bathroom = [
    {
      icon: Bath,
      alter: "Bath",
      text: "Bath"
    },
    {
      icon: Sink,
      alter: "Sink",
      text: "Sink"
    },
    {
      icon: Toilet,
      alter: "Toilet",
      text: "Toilet"
    },

  ]

  return (
    <Wrap>
      <Container>
        <Title>
          <span>Rooms</span> Include:
        </Title>



        <Title>
          <span>Outdoors:</span>
        </Title>

        <Title>
          <span>Bathroom</span> Includes:
        </Title>

        <Title>
          <span>Services:</span>
        </Title>
      </Container>
    </Wrap>
  )
}

export default RoomEquipment

const Wrap =  styled.div`
  background-color: #F0FFF0;
  width: 100%;
  color: #525252;
  padding: 36px 0;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 80%;
`

const Title = styled.p`
  font-size: 36px;

  span {
    font-weight: bold;
  }
`






// Triple Room with Mountain View.

// The place rents boats and canoes in summer and bicycles all year.

// Every room includes:
// Free Parking
// Free WiFi
// Family rooms
// Non-smoking rooms
// Beachfront
// Room service
// Private beach area
// Breakfast



// Bathroom includes:
// Toilet paper
// Shared toilet
// Toilet
// Shower

// View:
// Inner courtyard view
// Mountain view
// Garden view

// Outdoors:
// Outdoor fireplace
// Picnic area
// Beachfront
// Sun terrace
// Private beach area
// BBQ facilities
// Additional charge
// Patio
// Terrace
// Garden

// Activities:
// Tour or class about local culture
// Beach
// Water sports facilities on site
// Cycling (Off-site)
// Hiking (Off-site)
// Canoeing (Additional charge, Off-site)
// Fishing (Off-site)

// Food & Drinks:
// Coffee house on-site
// Fruits

// Internet:
// WiFi is available in all areas and is free of charge.

// Parking:
// Free private parking is possible on-site (reservation is not needed).

// Services:
// Grocery deliveries(Additional charge)
// Packed lunches
// Ironing service(Additional charge)
// Laundry(Additional charge)
// Room service
// Safety & Security
// Fire extinguishers
// CCTV outside property
// 24-hour security

// General
// Air conditioning(Additional charge)
// Heating
// Family rooms
// Non-smoking rooms

// Wellness:
// Sun umbrellas

// Languages spoken:
// Bosnian
// German
// English
// Croatian
// Serbian
 