import styled from "styled-components";
import { lazy } from "react";
const Body = lazy(() => import("./Body"));
const Title = lazy(() => import("./Title"));
const QuestionNavbar = lazy(() => import("../FAQ/Navbar"));
import { AttractionDetailList } from "../../data/ActivitesDetail";

function NearbyAttractions() {
    const attractionNames = AttractionDetailList.map((activity) => ({
        name: activity.linkName,
        link: activity.link,
    }));
    return (
        <Container>
            <Title title="Nearby Attractions" />
            <QuestionNavbar category={attractionNames} />
            <Body content={AttractionDetailList} />
        </Container>
    );
}

export default NearbyAttractions;

const Container = styled.div`
    background-color: #f0fff0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #525252;
    scroll-behavior: smooth;
`;
