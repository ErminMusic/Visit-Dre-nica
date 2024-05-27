import styled from "styled-components";
import { lazy } from "react";
const Body = lazy(() => import("../Activites-Attractions/Body"));
const Title = lazy(() => import("../Activites-Attractions/Title"));
const QuestionNavbar = lazy(() => import("../FAQ/QuestionNavbar"));
import { AttractionDetailList } from "../../data/ActivitesDetail";

function NearbyAttractions() {
    const activityNames = AttractionDetailList.map((activity) => activity.name);
    return (
        <Container>
            <Title title="Nearby Attractions" />
            <QuestionNavbar category={activityNames} />
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
`;
