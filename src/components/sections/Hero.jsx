import styled from "styled-components";
import TextHolder from "./sub-components/Hero/TextHolder";
import Buttons from "./sub-components/Hero/HeroButtons";
import Background from "./sub-components/Hero/Background";

function Hero() {
    const buttonContent = {
        buttonOne: "BOOK A ",
        buttonOneSpan: "ROOM",
        buttonTwo: "US",
        buttonTwoSpan: "CONTACT",
    };
    return (
        <Wrap>
            <Background />
            <Container>
                <ContentHolder>
                    <TextHolder />
                    <Buttons content={buttonContent} />
                </ContentHolder>
            </Container>
        </Wrap>
    );
}

export default Hero;

const Wrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    z-index: 1;
    overflow: hidden;
`;
const Container = styled.div`
    width: 80%;
    color: white;
    z-index: 100;
    display: flex;
    align-items: center;
    @media (max-width: 850px) {
        width: 95%;
    }
`;
const ContentHolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;
