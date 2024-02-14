import styled from "styled-components";
import "./App.css";
import Header from "./components/sections/Header";
import { lazy, Suspense } from "react";
const Footer = lazy(() => import("./components/sections/Footer"));
import Home from "./components/main-components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const ActivitiesDetail = lazy(() => import("./components/main-components/ActivitiesDetail"));
const NearbyAttractions = lazy(() => import("./components/main-components/NearbyAttractions"));
const Questions = lazy(() => import("./components/main-components/Questions"));
const Contact = lazy(() => import("./components/main-components/Contact"));
const HowToBook = lazy(() => import("./components/main-components/HowToBook"));

function App() {
    return (
        <Container>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Activities" element={<ActivitiesDetail />} />
                    <Route path="/Nearby Attractions" element={<NearbyAttractions />} />
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
