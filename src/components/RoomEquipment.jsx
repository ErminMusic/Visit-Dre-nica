import styled from "styled-components"
import AC from "../../public/Images/AC.webp"
import Bath from "../../public/Images/Bath.webp"
import Beach from "../../public/Images/Beach.webp"
import Breakfast from "../../public/Images/Breakfast.webp"
import CCTV from "../../public/Images/CCTV.webp"
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
import Toilet from "../../public/Images/Toilet.webp"
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
    {
      icon: Security,
      alter: "Security",
      text: "Security"
    },
    {
      icon: CCTV,
      alter: "CCTV",
      text: "CCTV of the outside property"
    },
  ]

  const Outdoors = [
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
          <span>All Rooms</span> Include:
        </Title>
        <IconWrap>
          {Rooms.map((item, index) => (
            <IconHolder key={index}>

              <Icon 
                alt={item.alter} 
                src={item.icon}
                srcSet={`${item.icon} 300w, ${item.icon} 768w, ${item.icon} 1280w`}
                  sizes="(max-width: 300px) 100vw, (max-width: 768px) 80vw, 50vw" 
                />

              <Text>{item.text}</Text>

            </IconHolder>
          ))}
        </IconWrap>

        <Title>
          <span>Outdoors:</span>
        </Title>
          <IconWrap>
            {Outdoors.map((item, index) => (
              <IconHolder key={index}>

                <Icon 
                  alt={item.alter} 
                  src={item.icon}
                  srcSet={`${item.icon} 300w, ${item.icon} 768w, ${item.icon} 1280w`}
                  sizes="(max-width: 300px) 100vw, (max-width: 768px) 80vw, 50vw" 
                />

                <Text>{item.text}</Text>

              </IconHolder>
            ))}
          </IconWrap>

        <Title>
          <span>Bathroom</span> Includes:
        </Title>
        <IconWrap>
            {Bathroom.map((item, index) => (
              <IconHolder key={index}>

                <Icon 
                  alt={item.alter} 
                  src={item.icon}
                  srcSet={`${item.icon} 300w, ${item.icon} 768w, ${item.icon} 1280w`}
                  sizes="(max-width: 300px) 100vw, (max-width: 768px) 80vw, 50vw" 
                />

                <Text>{item.text}</Text>

              </IconHolder>
            ))}
          </IconWrap>

        <Title>
          <span>Services:</span>
        </Title>
        <IconWrap>
            {Service.map((item, index) => (
              <IconHolder key={index}>

                <Icon 
                  alt={item.alter} 
                  src={item.icon}
                  srcSet={`${item.icon} 300w, ${item.icon} 768w, ${item.icon} 1280w`}
                  sizes="(max-width: 300px) 100vw, (max-width: 768px) 80vw, 50vw" 
                />

                <Text>{item.text}</Text>

              </IconHolder>
            ))}
          </IconWrap>
      </Container>
    </Wrap>
  )
}

export default RoomEquipment

const Wrap =  styled.div`
  background-color: #F0FFF0;
  width: 100%;
  color: #525252;
  padding: 18px 0 36px 0;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 80%;

  @media (max-width: 850px) {
    width: 95%;
  } 
`

const Title = styled.p`
  font-size: 36px;
  margin: 18px 0 14px 0;
  span {
    font-weight: bold;
  }
`

const IconWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const IconHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: auto;
  padding: 16px 8px;
  word-wrap: break-word;
  text-align: center;   

  @media (max-width: 650px) {
    width: 33%;
  } 

  @media (max-width: 500px) {
    width: 50%;
  } 
`

const Icon = styled.img`
  width: 80px;
  height: 80px;
`

const Text = styled.div`
  font-weight: bold;
  padding: 12px 0 0 0;
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
 