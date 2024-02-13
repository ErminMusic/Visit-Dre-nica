import styled from "styled-components";
import Body from "../sections/Activites-Attractions-components/Body";
import Title from "../sections/Activites-Attractions-components/Title";
import { AttractionDetailList } from "../data/ActivitesDetail";
import QuestionNavbar from "../sections/FAQ-components/QuestionNavbar";

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
