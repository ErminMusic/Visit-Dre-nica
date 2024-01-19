import styled from "styled-components";
import ReviewSlider from "./sub-components/ReviewSlider";
import { GuestReviews } from "../data/GuestReview";

function Testimonials() {
    return (
        <Wrap>
            <TitleHolder>
                <h1>See what guests loved the most:</h1>
            </TitleHolder>

            <ReviewSlider list={GuestReviews} />
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
