import styled from "styled-components"


function RoomEquipment() {
  return (
    <Wrap>
        <Container>
            <p>Room <span>Equipment</span></p>
        </Container>
    </Wrap>
  )
}

export default RoomEquipment

const Wrap =  styled.div`
    background-color: #F0FFF0;
    width: 100%;
    color: #525252;
`

const Container = styled.div`

    p {
        font-size: 36px;

        span {
            font-weight: bold;
        }
    }
`