import styled from "styled-components";
import Activitie from "./sub-components/Activitie";
import { ActivitiesList, AttractionList } from "../data/ActivitiesContent";


function Activities() {

  return (
    <Wrap>
      <Container>
        
        <Title>Activities:</Title>

        <ActivitiesHolder>
          <Activitie list={ActivitiesList} />
        </ActivitiesHolder>

        <Title>Nearby Attractions:</Title>

        <ActivitiesHolder>
          <Activitie list={AttractionList} />
        </ActivitiesHolder>

      </Container>
    </Wrap>
  )
}

export default Activities

const Wrap = styled.div`
  background-color: #F0FFF0;
  width: 100%;
  color: #525252;
  padding: 36px 0;
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
`;

const Title = styled.h1`
  margin: 0 0 12px 0;
`;