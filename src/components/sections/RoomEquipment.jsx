import styled from "styled-components";
import { lazy, Suspense } from "react";
import { RoomsInclude,OutdoorsInclude,ServiceInclude,BathroomInclude,} from "../data/IncludeIcons";
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
        normal: "Includes: ",
        bold: "The Bathroom ",
    };
    const service = {
        normal: "",
        bold: "Services:",
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 850px) {
        width: 95%;
    }
`;