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
                __html: `You can climb mountains Čvrsnica and Čabulja that encircle Drežnica.\n\n`,
            },
            {
                __html: `Čvrsnica to the north, and Čabulja to the south.\n\n`,
            },
            {
                __html: `These mountains <b>offer cool fresh air</b> and make you <b>feel truly out in nature.</b>\n\n`,
            },
            {
                __html: `And at the <b>top, you are rewarded with a view that is simply beautiful.</b>\n\n`,
            },
            {
                __html: `Or...\n\n`,
            },
        ],
        riverDescription: [
            {
                __html: `You can take a boat ride or a swim.\n\n`,
            },
            {
                __html: `Surrounded by lush vegetation and towering mountains...\n\n`,
            },
            {
                __html: `These emerald waters give a refreshing feeling to everyone who sees them.\n\n`,
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
