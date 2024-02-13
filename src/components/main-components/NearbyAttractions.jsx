import styled from "styled-components";
import Body from "../sections/Activites-Attractions-components/Body";

function NearbyAttractions() {
    return (
        <Container>
            <Body />
        </Container>
    );
}

export default NearbyAttractions;

const Container = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid black;
    width: 100%;
`;
