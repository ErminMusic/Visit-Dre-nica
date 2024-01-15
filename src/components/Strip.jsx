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
      text: "Score on Booking.com"
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
  background-color: #F8F5DF;
  display: flex;
  justify-content: center;
  padding: 36px 0;
`

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    width: 100%;
  } 
`

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 520px) {
    margin: 20px;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  width: 100%;

  @media (max-width: 700px) {
    justify-content: space-around;
  }

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
  }
`

const IconHolder = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px 10px 10px 0;
  margin: 0 0 12px 0;

  @media (max-width: 520px) {
    width: 100px;
    height: 100px;
  }
`

const TextHolder = styled.div`
  width: 120px;
  color: #525252;
  font-weight: bold;
  text-align: center;
  
  @media (max-width: 520px) {
    font-size: 18px;
  }
`