import styled from "styled-components";
import { Suspense, useState, useEffect } from 'react';

function Strip() {
  const [AwardIcon, setAwardIcon] = useState(null);
  const [ScoreIcon, setScoreIcon] = useState(null);
  const [AffordableIcon, setAffordableIcon] = useState(null);

  useEffect(() => {
    const loadIcons = async () => {
      try {
        const award = await import('../../../public/Images/Award.webp');
        setAwardIcon(() => award.default);
        
        const score = await import('../../../public/Images/Score.webp');
        setScoreIcon(() => score.default);
        
        const affordable = await import('../../../public/Images/Affordable.webp');
        setAffordableIcon(() => affordable.default);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadIcons();
  }, []);

  const content = [
    {
      icon: AwardIcon,
      alter: "Award Icon",
      text: "Booking.com Traveller Review Awards 2022",
    },
    {
      icon: ScoreIcon,
      alter: "Score Icon",
      text: "Score on Booking.com",
    },
    {
      icon: AffordableIcon,
      alter: "Affordable Icon",
      text: "Affordable for any budget",
    },
  ];

  return (
    <Wrap>
      <Container>
        <Wrapper>
          {content.map((item, index) => (
            <Holder key={index}>
              <Suspense fallback={<div>Loading...</div>}>
                {item.icon && <IconHolder alt={item.alter} src={item.icon} />}
              </Suspense>
              <TextHolder>{item.text}</TextHolder>
            </Holder>
          ))}
        </Wrapper>
      </Container>
    </Wrap>
  );
}

export default Strip;

const Wrap = styled.div`
  width: 100%;
  background-color: #F8F5DF;
  display: flex;
  justify-content: center;
  padding: 36px 0;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 520px) {
    margin: 20px;
  }
`;

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
`;

const IconHolder = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px 10px 10px 0;
  margin: 0 0 12px 0;

  @media (max-width: 520px) {
    width: 100px;
    height: 100px;
  }
`;

const TextHolder = styled.div`
  width: 120px;
  color: #525252;
  font-weight: bold;
  text-align: center;

  @media (max-width: 520px) {
    font-size: 18px;
  }
`;