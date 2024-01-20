import styled from "styled-components";
import { GaleryImage } from "../data/GaleryImages";
import { lazy, Suspense } from "react";

const GalerySlider = lazy(() => import("./sub-components/Galery/GalerySlider"));

function Galery() {
    return (
        <Wrap>
            <TitleHolder>
                <Title>Gallery:</Title>
            </TitleHolder>
            <Suspense fallback={<div>Loading...</div>}>
                <GalerySlider images={GaleryImage} />
            </Suspense>
        </Wrap>
    );
}

export default Galery;

const Wrap = styled.div`
    width: 100%;
    background-color: #f8f5df;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 36px 0;
    color: #525252;
    overflow: hidden;
`;

const Title = styled.h1``;

const TitleHolder = styled.div`
    margin: 0 0 16px 0;
    width: 80%;
`;
