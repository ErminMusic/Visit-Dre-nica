import { lazy, Suspense } from "react";
import AboutImg from "../../assets/About.webp";
import AboutVisitImg from "../../assets/AboutVisitDreznica.webp";
import styled from "styled-components";
const About = lazy(() => import("../sections/About"));
const RoomEquipment = lazy(() => import("../sections/RoomEquipment"));
const Rooms = lazy(() => import("../sections/Rooms"));
const Strip = lazy(() => import("../sections/Strip"));
const Activities = lazy(() => import("../sections/Activities"));
const Review = lazy(() => import("../sections/Review"));
const Galery = lazy(() => import("../sections/Galery"));

function Home() {
    const AboutDreznica = {
        title: "Why you should ",
        titleBold: "visit Drežnica",
        placeholderText: 
        `If you're <strong>drawn to the serene beauty of nature</strong> and crave an escape from humdrum routine and daily stress, Drežnica is the place for you.\n\n
        Surrounded by breathtaking mountains with a tranquil emerald river going through and untouched nature stretching as far as the eye can see…\n\n 
        Drežnica offers an unforgettable blend of adventure and peace.\n\n
        After visiting Drežnica, you'll be eager to share your exhilarating adventures with friends and family, captivating them with tales of discovering hidden gems in its untouched wilderness.\n\n
        `,
        alter: "About Image",
        image: AboutImg,
    };
    const AboutVisitDreznica = {
        title: "About ",
        titleBold: "Visit Drežnica",
        placeholderText: "afdwdaw",
        alter: "About Image",
        image: AboutVisitImg,
    };
    return (
        <Container>
            <Suspense fallback={<div>Loading...</div>}>
                <About content={AboutDreznica} />
                <Strip />
                <RoomEquipment />
                <Rooms />
                <Activities />
                <Review />
                <About content={AboutVisitDreznica} />
                <Galery />
            </Suspense>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    overflow: hidden;
`;
