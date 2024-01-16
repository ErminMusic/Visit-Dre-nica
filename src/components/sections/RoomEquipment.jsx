import styled from "styled-components"
import { RoomsInclude, OutdoorsInclude, ServiceInclude, BathroomInclude } from "../data/IncludeIcons"

function RoomEquipment() {
  return (
    <Wrap>
      <Container>

        <Title>
          <span>All Rooms</span> Include:
        </Title>
        <IconWrap>
          {RoomsInclude.map((item, index) => (
            <IconHolder key={index}>
              <Icon
                  alt={item.alter}
                  loading="lazy"
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
            {OutdoorsInclude.map((item, index) => (
              <IconHolder key={index}>
                <Icon
                  alt={item.alter}
                  loading="lazy"
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
            {ServiceInclude.map((item, index) => (
              <IconHolder key={index}>
                <Icon
                  alt={item.alter}
                  loading="lazy"
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
            {BathroomInclude.map((item, index) => (
              <IconHolder key={index}>
                <Icon
                  alt={item.alter}
                  loading="lazy"
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

const Wrap = styled.div`
  background-color: #F0FFF0;
  width: 100%;
  color: #525252;
  padding: 18px 0 36px 0;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;

  @media (max-width: 850px) {
    width: 95%;
  } 
`;

const Title = styled.p`
  font-size: 36px;
  margin: 18px 0 14px 0;

  span {
    font-weight: bold;
  }
`;

const IconWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

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
`;

const Icon = styled.img`
  width: 80px;
  height: 80px;
`;

const Text = styled.div`
  font-weight: bold;
  padding: 12px 0 0 0;
`;
// Room type
// Number of guests
 
// Quadruple Room with Balcony
// 3 single bedsand1 double bedand1 sofa bed

// Twin Room with Lake View
// 2 single bedsand1 sofa bed

// Budget Single Room
// 1 single bed


// Triple Room with Mountain View.

// The place rents boats and canoes in summer and bicycles all year.

// Every room includes:
// FREE Parking
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
 