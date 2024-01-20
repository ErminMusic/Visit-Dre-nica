import { lazy, Suspense } from "react";
import AboutImg from "../../assets/About.webp";
import AboutVisitImg from "../../assets/AboutVisitDreznica.webp";
const About = lazy(() => import("../sections/About"));
const RoomEquipment = lazy(() => import("../sections/RoomEquipment"));
const Rooms = lazy(() => import("../sections/Rooms"));
const Strip = lazy(() => import("../sections/Strip"));
const Activities = lazy(() => import("../sections/Activities"));
const Review = lazy(() => import("../sections/Review"));
const Galery = lazy(() => import("../sections/Galery"));

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
            "Visit Drežnica Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quasi minima ipsa quisquam magnam optio corporis.",
        alter: "About Image",
        image: AboutVisitImg,
    };
    return (
        <>
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
        </>
    );
}

export default Home;