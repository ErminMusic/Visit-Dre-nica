import styled from "styled-components"
import AwardIcon from "../../public/Images/Award.webp"
import ScoreIcon from "../../public/Images/Score.webp"

function Strip() {

  const content = [
    {
      icon: AwardIcon,
      alter: "Award Icon",
      text: "Booking.com Traveller Review Awards 2022"
    },
    {
      icon: ScoreIcon,
      alter: "Score Icon",
      text: "Our score on Booking.com"
    },
    {
      icon: AwardIcon,
      alter: "Award Icon",
      text: "Booking.com Traveller Review Awards 2022"
    },
  ]

  return (
    <Wrap>

      <Container>
        
        <Wrapper>
        {content.map((item, index) => (
          <Holder key={index}>

            <IconHolder alt={item.alter} src={item.icon} />

            <TextHolder>{item.text}</TextHolder>
            
          </Holder>
        ))}
        </Wrapper>
        
      </Container>
        
    </Wrap>
  )
}

export default Strip

const Wrap = styled.div`
  width: 100%;
  height: 220px;
  background-color: #F8F5DF;
  display: flex;
  justify-content: center;
  padding: 16px 0;
`

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  width: 100%;
`

const IconHolder = styled.img`
  width: 80px;
  border-radius: 10px 10px 10px 0;
  margin: 0 0 12px 0;
`

const TextHolder = styled.div`
  width: 120px;
  color: #525252;
  font-weight: bold;
  text-align: center;
`