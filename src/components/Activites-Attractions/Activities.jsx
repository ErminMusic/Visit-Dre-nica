import styled from "styled-components";
import { lazy } from "react";
const Body = lazy(() => import("../Activites-Attractions/Body"));
const Title = lazy(() => import("../Activites-Attractions/Title"));
const QuestionNavbar = lazy(() => import("../FAQ/Navbar"));
import { ActivitiesDetailList } from "../../data/ActivitesDetail";

const ActivitiesDetail = () => {
    const activityNames = ActivitiesDetailList.map((activity) => ({
        name: activity.linkName,
        link: activity.link,
    }));
    return (
        <Container>
            <Title title="Activities" />
            <QuestionNavbar category={activityNames} />
            <Body content={ActivitiesDetailList} />
        </Container>
    );
};

export default ActivitiesDetail;

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
