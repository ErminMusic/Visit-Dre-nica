import styled from "styled-components";
import "./App.css";
import Header from "./components/sections/Header";
import { lazy, Suspense } from "react";
const Footer = lazy(() => import("./components/sections/Footer"));
import Home from "./components/main-components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainActivities from "./components/main-components/MainActivities";
import NearbyAttractions from "./components/main-components/NearbyAttractions";
import Questions from "./components/main-components/Questions";
import Contact from "./components/main-components/Contact";
import HowToBook from "./components/main-components/HowToBook";

function App() {
    return (
        <Container>
            <Router>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Activities" element={<MainActivities />} />
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
