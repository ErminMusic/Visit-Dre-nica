import styled from "styled-components";
import "./App.css";
import Header from "./components/sections/Header";
import { lazy, Suspense } from "react";
const Footer = lazy(() => import("./components/sections/Footer"));
import Home from "./components/main-components/Home";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const ActivitiesDetail = lazy(() => import("./components/main-components/ActivitiesDetail"));
const NearbyAttractions = lazy(() => import("./components/main-components/NearbyAttractions"));
const Questions = lazy(() => import("./components/main-components/Questions"));
const Contact = lazy(() => import("./components/main-components/Contact"));
const HowToBook = lazy(() => import("./components/main-components/HowToBook"));

function App() {
    ReactGA.initialize("G-6TCDM52R17");
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=G-6TCDM52R17`; // Replace with your tracking ID
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            gtm: new Date().getTime(),
            event: "pageview",
        });
        return () => document.head.removeChild(script);
    }, []);
    return (
        <Container>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Activities" element={<ActivitiesDetail />} />
                    <Route
                        path="/Nearby Attractions"
                        element={<NearbyAttractions />}
                    />
                    <Route path="/FAQ" element={<Questions />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/How To Book" element={<HowToBook />} />
                </Routes>
                <Suspense fallback={<div>Loading...</div>}>
                    <Footer />
                </Suspense>
            </Router>
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100%;
`;
