import styled from "styled-components";
import { lazy } from "react";
const Body = lazy(() =>import("../sections/Activites-Attractions-components/Body"));
const Title = lazy(() =>import("../sections/Activites-Attractions-components/Title"));
const QuestionNavbar = lazy(() =>import("../sections/FAQ-components/QuestionNavbar"));
import { ActivitiesDetailList } from "../data/ActivitesDetail";

function ActivitiesDetail() {
    const activityNames = ActivitiesDetailList.map((activity) => activity.name);
    return (
        <Container>
            <Title title="Activities" />
            <QuestionNavbar category={activityNames} />
            <Body content={ActivitiesDetailList} />
        </Container>
    );
}

export default ActivitiesDetail;

const Container = styled.div`
    background-color: #f0fff0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #525252;
`;
