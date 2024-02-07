import { lazy, Suspense } from "react";
import AboutImg from "../../assets/About.webp";
import AboutVisitImg from "../../assets/AboutVisitDreznica.webp";
import styled from "styled-components";
import AboutUs from "../sections/AboutUs";
import { GuestReview } from "../data/GuestReview";
import { GuestReviewSecond } from "../data/GuestReviewSecond";
const About = lazy(() => import("../sections/About"));
const RoomEquipment = lazy(() => import("../sections/RoomEquipment"));
const Rooms = lazy(() => import("../sections/Rooms"));
const Strip = lazy(() => import("../sections/Strip"));
const Activities = lazy(() => import("../sections/Activities"));
const Review = lazy(() => import("../sections/Review"));
const Galery = lazy(() => import("../sections/Galery"));

function Home() {
    const AboutDreznica = {
        title: "visit Drežnica",
        titleBold: "Why you should ",
        generalDescription: [
            {
                __html: `If you're <b>drawn to the serene beauty of nature and crave an escape from humdrum routine and daily stress,</b> Drežnica is the place for you.\n\n`,
            },
            {
                __html: `Surrounded by breathtaking mountains with a tranquil emerald river going through and untouched nature stretching as far as the eye can see…\n\n`,
            },
            {
                __html: `Drežnica offers an <b>unforgettable blend of adventure and peace.</b>\n\n`,
            },
            {
                __html: `After visiting Drežnica, <b>you'll be eager to share your exhilarating adventures with friends and family,</b> captivating them with tales of discovering hidden gems in its untouched wilderness.\n\n`,
            },
        ],
        mountainDescription: [
            {
                __html: `You can <b>scale the peaks of mountains Čvrsnica and Čabulja</b> that encircle Drežnica…\n\n`,
            },
            {
                __html: `Čvrsnica commands the skyline to the north, its rugged ridges and majestic cliffs offering a dramatic backdrop to the village…\n\n`,
            },
            {
                __html: `To the south, Čabulja stretches out with its rolling slopes and verdant meadows, gently enfolding Drežnica in a tranquil embrace.\n\n`,
            },
            {
                __html: `Or...\n\n`,
            },
        ],
        riverDescription: [
            {
                __html: `You can take a boat ride, kayak, or swim at the meeting point of two natural wonders...\n\n`,
            },
            {
                __html: `The river Drežanka gracefully converges with the expansive Neretva Lake, creating a harmonious union where flowing waters meet still expanses.\n\n`,
            },
            {
                __html: `Surrounded by lush vegetation and framed by towering mountains, this confluence exudes a sense of peacefulness and serenity.\n\n`,
            },
        ],
        alter: "About Image",
        image: AboutImg,
    };
    const AboutVisitDreznica = {
        title: "About ",
        titleBold: "Visit Drežnica",
        aboutUsDescription: "afdwdaw",
        alter: "About Image",
        image: AboutVisitImg,
    };
    return (
        <Container>
            <Suspense fallback={<div>Loading...</div>}>
                <About content={AboutDreznica} />
                <Strip guestInfo={GuestReview} />
                <RoomEquipment />
                <Rooms />
                <Activities />
                <Review guestInfo={GuestReviewSecond} />
                <AboutUs content={AboutVisitDreznica} />
                <Galery />
            </Suspense>
        </Container>
    );
}

export default Home;

const Container = styled.div`
    overflow: hidden;
`;
