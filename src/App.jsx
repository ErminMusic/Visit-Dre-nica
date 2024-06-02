import styled from "styled-components";
import "./App.css";
import Header from "./components/Universal/Header/Header";
import { lazy, Suspense } from "react";
import Home from "./components/Home/HomePage/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTopButton from "./components/Universal/ToTopButton/ScrollToTopButton";
const Footer = lazy(() => import("./components/Universal/Footer/Footer"));
const Activities = lazy(() =>
    import("./components/Activites-Attractions/Activities")
);
const Attractions = lazy(() =>
    import("./components/Activites-Attractions/Attractions")
);
const Questions = lazy(() => import("./components/FAQ/FAQ"));
const Contact = lazy(() => import("./components/Contact-Book/Contact"));
const HowToBook = lazy(() => import("./components/Contact-Book/HowToBook"));

function App() {
    return (
        <Container>
            <Router>
                <body>
                    <header>
                        <Header />
                    </header>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Activities" element={<Activities />} />
                        <Route path="/Attractions" element={<Attractions />} />
                        <Route path="/FAQ" element={<Questions />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/HowToBook" element={<HowToBook />} />
                    </Routes>
                    <Suspense fallback={<div>Loading...</div>}>
                        <footer>
                            <Footer />
                        </footer>
                    </Suspense>
                    <ScrollToTopButton />
                </body>
            </Router>
        </Container>
    );
}

export default App;

const Container = styled.div`
    width: 100%;
`;
