import styled from "styled-components";
import Title from "./Title";

function Body() {
  return (
    <Container>
        <Title />
        Body
    </Container>
  )
}

export default Body

const Container = styled.div`
	border: 2px solid black;
    width: 80%;
    
    @media (max-width: 850px) {
        width: 95%;
    }
`