import styled from "styled-components";
import { GuestReviews } from "../data/GuestReview";
import { lazy, Suspense } from "react";

const ReviewSlider = lazy(() => import("./sub-components/Review/ReviewSlider"));

function Testimonials() {
    return (
        <Wrap>
            <TitleHolder>
                <h1>See what guests loved the most:</h1>
            </TitleHolder>

            <Suspense fallback={<div>Loading...</div>}>
                <ReviewSlider list={GuestReviews} />
            </Suspense>
        </Wrap>
    );
}

export default Testimonials;

const Wrap = styled.div`
    background-color: #f8f5df;
    width: 100%;
    color: #525252;
    padding: 16px 0 36px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
`;

const TitleHolder = styled.div`
    width: 80%;
`;
