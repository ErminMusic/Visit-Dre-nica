import styled from "styled-components";
import PropTypes from "prop-types";
import { lazy, Suspense } from "react";
const Image = lazy(() => import("./sub-components/About/Image"));
const Content = lazy(() => import("./sub-components/About/Content"));

function AboutUs({ content }) {
    AboutUs.propTypes = {
        content: PropTypes.shape({
            title: PropTypes.string,
            titleBold: PropTypes.string,
            aboutUsDescription: PropTypes.string.isRequired,
            alter: PropTypes.string.isRequired,
            image: PropTypes.node.isRequired,
        }).isRequired,
    };

    return (
        <Wrap>
            <Container>
                <Suspense fallback={<div>Loading...</div>}>
                    <Image image={content.image} alter={content.alter} />
                    <Content
                        title={content.title}
                        titleBold={content.titleBold}
                        content={content.aboutUsDescription}
                    />
                </Suspense>
            </Container>
        </Wrap>
    );
}

export default AboutUs;

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
`;
const Container = styled.div`
    width: 80%;
    margin: 8px 0;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 850px) {
        width: 95%;
    }
    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`;