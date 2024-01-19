import { lazy, Suspense } from "react";
import AboutImg from "../../assets/About.webp";

const Hero = lazy(() => import("../sections/Hero"));
const About = lazy(() => import("../sections/About"));
const RoomEquipment = lazy(() => import("../sections/RoomEquipment"));
const Rooms = lazy(() => import("../sections/Rooms"));
const Strip = lazy(() => import("../sections/Strip"));
const Activities = lazy(() => import("../sections/Activities"));
const Review = lazy(() => import("../sections/Review"));

function Home() {
    const AboutDreznica = {
        title: "About ",
        titleBold: "Drežnica",
        placeholderText:
            "Drežnica Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis.",
        alter: "About Image",
        image: AboutImg,
    };

    const AboutVisitDreznica = {
        title: "About ",
        titleBold: "Visit Drežnica",
        placeholderText:
            "Visit DrežnicaLorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis.",
        alter: "About Image",
        image: AboutImg,
    };
    return (
        <>
            <Hero />
            <Suspense fallback={<div>Loading...</div>}>
                <About content={AboutDreznica} />
                <Strip />
                <RoomEquipment />
                <Rooms />
                <Activities />
                <Review />
                <About content={AboutVisitDreznica} />
            </Suspense>
        </>
    );
}

export default Home;
