import styled from "styled-components";
import { lazy, Suspense } from "react";
import {
    RoomsInclude,
    OutdoorsInclude,
    ServiceInclude,
    BathroomInclude,
} from "../data/IncludeIcons";

const EquipmentIcons = lazy(() => import("./sub-components/RoomEquipment/EquipmentIcons"));

function RoomEquipment() {
    const room = {
        normal: "Include:",
        bold: "All Rooms ",
    };

    const outdoor = {
        normal: "",
        bold: "Outdoors:",
    };

    const bathroom = {
        normal: "Include: ",
        bold: "Bathroom ",
    };

    const service = {
        normal: "Include:",
        bold: "Services ",
    };

    return (
        <Wrap>
            <Container>
                <Suspense fallback={<div>Loading...</div>}>
                    <EquipmentIcons title={room} content={RoomsInclude} />

                    <EquipmentIcons title={outdoor} content={OutdoorsInclude} />

                    <EquipmentIcons title={service} content={ServiceInclude} />

                    <EquipmentIcons title={bathroom} content={BathroomInclude}/>
                </Suspense>
            </Container>
        </Wrap>
    );
}

export default RoomEquipment;

const Wrap = styled.div`
    background-color: #f0fff0;
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
