import styled from "styled-components";
import PropTypes from "prop-types";
import { lazy, Suspense } from "react";
import MontainImage from "../../../assets/About/TwoMountains.webp"
import SplitImage from "../../../assets/About/Split.webp"
import RiverImage from "../../../assets/About/River.webp"
const Image = lazy(() => import("./Image"));
const Content = lazy(() => import("./Content"));

function About({ content }) {
    About.propTypes = {
        content: PropTypes.shape({
            title: PropTypes.string.isRequired,
            titleBold: PropTypes.string.isRequired,
            generalDescription: PropTypes.arrayOf(
                PropTypes.shape({
                    __html: PropTypes.string.isRequired,
                })
            ).isRequired,
            mountainDescription: PropTypes.arrayOf(
                PropTypes.shape({
                    __html: PropTypes.string.isRequired,
                })
            ).isRequired,
            riverDescription: PropTypes.arrayOf(
                PropTypes.shape({
                    __html: PropTypes.string.isRequired,
                })
            ).isRequired,
            alter: PropTypes.string.isRequired,
        }).isRequired,
    };

    return (
        <Wrap id="AboutDreznica">
            <Suspense fallback={<div>Loading...</div>}>
                <Container>
                    <Image image={SplitImage} alter={content.alter} />
                    <Content
                        title={content.title}
                        titleBold={content.titleBold}
                        content={content.generalDescription}
                    />
                </Container>
                <FlipContainer>
                    <Image image={MontainImage} alter={content.alter} />
                    <Content
                        title=""
                        titleBold=""
                        content={content.mountainDescription}
                    />
                </FlipContainer>
                <Container>
                    <Image image={RiverImage} alter={content.alter} />
                    <Content
                        title=""
                        titleBold=""
                        content={content.riverDescription}
                    />
                </Container>
            </Suspense>
        </Wrap>
    );
}

export default About;

const Wrap = styled.div`
    background-color: #f0fff0;
    color: #525252;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 36px 0;
    scroll-margin-top: 80px;
`;
const Container = styled.div`
    width: 80%;
    margin: 24px 0;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 850px) {
        width: 95%;
    }
    @media (max-width: 700px) {
        flex-direction: column-reverse;
        align-items: center;
        margin: 12px 0;
    }
`;
const FlipContainer = styled(Container)`
    flex-direction: row-reverse;
    @media (max-width: 850px) {
        width: 95%;
    }
    @media (max-width: 700px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;
