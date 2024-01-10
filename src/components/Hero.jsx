import styled from "styled-components"


function Hero() {
  return (
    <Container>
        <p>Hero</p>
        <p>Hero</p>
        <p>Hero</p>
        <p>Hero</p>
    </Container>
  )
}

export default Hero

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 20%;
`