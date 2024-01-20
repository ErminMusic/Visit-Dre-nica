import styled from "styled-components";
import { ActivitiesList, AttractionList } from "../data/ActivitiesContent";
import { lazy, Suspense } from "react";

const Activitie = lazy(() =>
    import("../sections/sub-components/Activities/Activitie")
);

function Activities() {
    return (
        <Wrap>
            <Container>
                <TitleHolder>
                    <Title>Activities:</Title>
                </TitleHolder>
                <ActivitiesHolder>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Activitie list={ActivitiesList} />
                    </Suspense>
                </ActivitiesHolder>
                <TitleHolder>
                    <Title>Nearby Attractions:</Title>
                </TitleHolder>
                <ActivitiesHolder>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Activitie list={AttractionList} />
                    </Suspense>
                </ActivitiesHolder>
            </Container>
        </Wrap>
    );
}

export default Activities;

const Wrap = styled.div`
    background-color: #f0fff0;
    width: 100%;
    color: #525252;
    padding: 16px 0 0px 0;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 80%;
    @media (max-width: 850px) {
        width: 95%;
    }
`;

const ActivitiesHolder = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const TitleHolder = styled.div`
    margin: 20px;
    width: 100%;
`;

const Title = styled.h1``;
