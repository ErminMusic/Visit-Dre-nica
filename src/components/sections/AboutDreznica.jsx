import styled from "styled-components";
import AboutImg from "../../assets/About.webp";
import { lazy, Suspense } from "react";

const Image = lazy(() => import("./sub-components/About/Image"));
const Content = lazy(() => import("./sub-components/About/Content"));

function AboutDreznica() {
    const textContent = {
        title: "About ",
        titleBold: "Drežnica",
        placeholderText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis.",
        image: AboutImg,
        alter: "About Image",
    };

    return (
        <Wrap>
            <Container>
                <Suspense fallback={<div>Loading...</div>}>
                    <Image
                        image={textContent.image}
                        alter={textContent.alter}
                    />

                    <Content
                        title={textContent.title}
                        titleBold={textContent.titleBold}
                        content={textContent.placeholderText}
                    />
                </Suspense>
            </Container>
        </Wrap>
    );
}

export default AboutDreznica;

const Wrap = styled.div`
    background-color: #f0fff0;
    color: #525252;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    padding: 36px 0;
`;

const Container = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;

    @media (max-width: 850px) {
        width: 95%;
    }

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
    }
`;

// Mobile (up to 576px):

// @media (max-width: 576px) {
//   /* Custom styling for mobile devices */
// }

// Portrait Tablets (577px to 768px):
// @media (min-width: 577px) and (max-width: 768px) {
//   /* Custom styling for portrait tablets */
// }

// Tablets and Desktops (769px to 991px):
// @media (min-width: 769px) and (max-width: 991px) {
//   /* Custom styling for tablets and desktops */
// }

// Desktops (992px to 1199px):
// @media (min-width: 992px) and (max-width: 1199px) {
//   /* Custom styling for desktops */
// }

// Large Desktops (1200px and above):
// @media (min-width: 1200px) {
//   /* Custom styling for large desktops */
// }
