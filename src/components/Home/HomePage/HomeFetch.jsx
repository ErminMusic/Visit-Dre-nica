import { lazy, Suspense } from "react";
import styled from "styled-components";
import { GuestReview } from "../../../data/GuestReview";
import { GuestReviewSecond } from "../../../data/GuestReviewSecond";
const About = lazy(() => import("../About/About"));
const AboutUs = lazy(() => import("../About/AboutUs"));
const RoomEquipment = lazy(() => import("../RoomEquipment/RoomEquipment"));
const Rooms = lazy(() => import("../Rooms/Rooms"));
const Strip = lazy(() => import("../Strip/Strip"));
const Activities = lazy(() => import("../Activities/Activities"));
const Review = lazy(() => import("../Review/Review"));
const Galery = lazy(() => import("../Galery/Galery"));

function HomeFetch() {
    const AboutDreznica = {
        title: "If you want to escape from daily stress,",
        titleBold: "Drežnica is the place for you.",
        generalDescription: [
            {
                __html: `Surrounded by stunning mountains and an emerald river that stretches as far as the eye can see.\n\n`,
            },
            {
                __html: `Offering a <b>sense of calmness</b> with every breath of its untouched nature.\n\n`,
            },
            {
                __html: `After visiting Drežnica, you’ll <b>want to share the story of your amazing trip.</b>\n\n`,
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
                __html: `While climbing these mountains, you will <b>feel the thrill of scaling rocky summits</b> and <b>breathing in the crisp mountain air</b> as you gaze out over panoramic vistas that stretch as far as the eye can see.\n\n`,
            },
            {
                __html: `Or...\n\n`,
            },
        ],
        riverDescription: [
            {
                __html: `You can take a <b>boat ride, kayak, or swim</b> at the meeting point of two natural wonders.\n\n`,
            },
            {
                __html: `<b>Drežanka gracefully converges with the expansive Neretva Lake</b>, creating a harmonious union where flowing waters meet still expanses.\n\n`,
            },
            {
                __html: `Surrounded by lush vegetation and framed by towering mountains, this confluence exudes a sense of peacefulness and serenity.\n\n`,
            },
            {
                __html: `These tranquil emerald waters <b>give a calming and refreshing feeling to everyone</b> who experiences their natural beauty.`,
            },
        ],
        alter: "About Image",
    };
    const AboutVisitDreznica = {
        title: "",
        titleBold: "About Us",
        aboutUsDescription: [
            {
                __html: `Welcome to Visit Drežnica! A small family-owned business <b>serving  over 5 years.<b>`,
            },
            {
                __html: `Enjoy cozy rooms with beautiful views of Drežnica.`,
            },
            {
                __html: `We will give you a <b>stay worth remembering.</b>`,
            },
            {
                __html: `Visit us and feel the <b>warmth of Bosnian hospitality.</b>`,
            },
        ],
        alter: "About Image",
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

export default HomeFetch;

const Container = styled.div`
    overflow: hidden;
`;
