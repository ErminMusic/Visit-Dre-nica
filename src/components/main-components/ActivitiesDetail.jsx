import styled from "styled-components";
import Body from "../sections/Activites-Attractions-components/Body";
import Title from "../sections/Activites-Attractions-components/Title";
import { ActivitiesDetailList } from "../data/ActivitesDetail";
import QuestionNavbar from "../sections/FAQ-components/QuestionNavbar";

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
